<template>
  <div class="mx-auto max-w-lg mb-4 family-mono">
    <h2 class="print:hidden text-2xl font-bold my-4 text-gray-600 text-center">
      Facture N°{{ bill.receipt_id }}
    </h2>
    <div id="bill" class="w-full p-4 mx-auto bg-white rounded-3xl border">
      <ShopInfo />
      <div class="mt-4 flex justify-between text-gray-900">
        <p>
          {{ bill.date }}
        </p>
        <p>Facture N°{{ bill.receipt_id }}</p>
      </div>
      <div class="mt-4 flex justify-between text-gray-900 text-base print:hidden">
        <p class="font-bold">STATUT:</p>
        <p
          class="
            uppercase
            px-4
            font-bold
            py-1
            text-red-600
            border border-red-500
          "
          :class="{
            'px-4 py-1 text-green-600 border border-green-500':
              bill.status == 'Payé',
          }"
        >
          {{ bill.status }}
        </p>
      </div>
      <div
        class="
          mt-4
          py-2
          w-full
          border-t
          text-base
          border-dashed
        "
      >
        <p class="flex items-center justify-between">
          <span class="font-bold">Client:</span>
          <span>{{ bill.client_name || "-" }}</span>
        </p>
        <p class="flex items-center justify-between">
          <span class="font-bold">N° téléphone:</span>
          <span>{{ bill.client_phone || "-" }}</span>
        </p>
        <p class="flex items-center justify-between">
          <span class="font-bold">Email:</span>
          <span>{{ bill.client_email || "-" }}</span>
        </p>
      </div>

      <div class="border-t border-dashed mt-4 py-2 w-full">
        <div class="flex justify-between items-center">
          <p class="w-1/4 font-bold mr-2">Description:</p>
          <p class="w-3/4 break-words">
            {{ bill.description || "-" }}
          </p>
        </div>
      </div>
      <div class="w-full mx-auto overflow-x-hidden mt-4 p-0">
        <table class="table-auto w-full p-0">
          <thead>
            <tr>
              <th class="py-3 font-normal">Qté</th>
              <th class="py-3 font-normal">Dés.</th>
              <th class="py-3 font-normal">Prix</th>
              <th class="py-3 font-normal">Taxe</th>
              <th class="py-3 font-normal">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(order, i) in bill.items"
              :key="i"
              class="break-words text-center"
            >
              <td class="px-[4px] py-1">
                {{ order.qty }}
              </td>
              <td class="px-[4px] uppercase py-1">{{ order.article }}</td>
              <td class="px-[4px] py-1">
                {{ order.price.toLocaleString("fr-FR") }}
              </td>
              <td class="px-[4px] py-1">
                {{ order.tax.toLocaleString("fr-FR") + "%" }}
              </td>
              <td class="px-[4px] py-1 font-bold">
                {{ (order.qty * order.price).toLocaleString("fr-FR") }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="
          mt-4
          py-2
          w-full
          border-t
          text-lg
          border-dashed
        "
      >
        <div class="px-2 flex justify-between text-base">
          <p class="font-bold">Total:</p>
          <p>{{ bill.partial.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div class="px-2 flex justify-between text-base mt-1">
          <p class="font-bold">Taxes:</p>
          <p>{{ bill.taxes.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div class="px-2 flex justify-between text-base mt-1">
          <p class="font-bold">Frais de livraison:</p>
          <p>{{ bill.shipment.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div
          class="
            px-2
            pb-1
            flex
            items-center
            justify-between
            text-base
            mt-1
            font-bold
          "
        >
          <p>Total TTC:</p>
          <p>{{ bill.total.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <p
          class="border-t border-dashed mt-2 px-0 py-4 uppercase text-center"
        >
          <span class="font-bold text-sm mr-1">Date limite de paiment:</span>
          <span class="text-base">{{ getDateTime(bill.deadline) || "-" }}</span>
        </p>
        <div class="flex items-center justify-end space-x-2 print:hidden">
          <!-- <button
            class="
              bg-red-600
              text-red-100 text-base
              rounded
              px-4
              py-[5px]
              focus:outline-none
              hover:bg-red-700
            "
            @click="isOpen=!isOpen"
          >
            Supprimer
          </button> -->
          <button
            v-if="bill.status != 'Payé'"
            class="
              bg-green-600
              btn
              text-white
              font-medium
              hover:bg-green-700
            "
            @click="isOpen=!isOpen"
          >
            Payer
          </button>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    @cancel="isOpen = false"
    @confirm="payBill()"
    :class="{'hidden': !isOpen}"
    type="Payer"
    message="Confirmez-vous ce paiement ?"
  />
</template>

<script>
import Layout from "@/Pages/Layout.vue";
import ShopInfo from "@/Components/ShopInfo.vue";
import Dialog from "@/Components/Dialog.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from 'vue';

export default {
  layout: Layout,

  props: {
    bill: Object,
  },
  components: { ShopInfo, Dialog },
  setup(props) {
    const getDateTime = (date) => {
      const d = new Date(date);
      const year = d.getFullYear();
      let months = d.getMonth() + 1;
      let days = d.getDate();
      let hours = d.getHours();
      let mins = d.getMinutes();

      if (months < 10) months = "0" + months;
      if (days < 10) days = "0" + days;
      if (hours < 10) hours = "0" + hours;
      if (mins < 10) mins = "0" + mins;

      return `${days}/${months}/${year} ${hours}H:${mins}`;
    };

    const isOpen = ref(false);

    const payBill = async () => {
      isOpen.value = false;
      const form = useForm({
        id: props.bill.id,
      });

      form.put(route("bills.update", props.bill.id), {
        only: [""],
      });
    };

    return {
      getDateTime,
      payBill,
      isOpen
    };
  },
};
</script>