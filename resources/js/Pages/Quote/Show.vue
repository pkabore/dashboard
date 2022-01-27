<template>
  <div class="mx-auto bg-white max-w-lg mb-4 family-mono">
    <h2 class="text-2xl font-bold my-4 text-gray-600 text-center">
      Devis N°{{ quote.receipt_id }}
    </h2>
    <div id="quote" class="w-full px-2 mx-auto rounded-md border">
      <shop-info />
      <div class="mt-4 flex justify-between text-gray-900">
        <p>
          {{ quote.date }}
        </p>
        <p>Devis N°{{ quote.receipt_id }}</p>
      </div>
      <div class="mt-4 flex justify-between text-gray-900 text-base">
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
              quote.status == 'Payé',
          }"
        >
          {{ quote.status }}
        </p>
      </div>
      <div
        class="
          mt-4
          py-2
          w-full
          border-t-2 border-dashed
          text-base
          border-gray-300
        "
      >
        <p class="flex items-center justify-between">
          <span class="font-bold">Client:</span>
          <span>{{ quote.client_name || "-" }}</span>
        </p>
        <p class="flex items-center justify-between">
          <span class="font-bold">N° téléphone:</span>
          <span>{{ quote.client_phone || "-" }}</span>
        </p>
        <p class="flex items-center justify-between">
          <span class="font-bold">Email:</span>
          <span>{{ quote.client_email || "-" }}</span>
        </p>
      </div>

      <div class="border-t-2 border-dashed border-gray-300 mt-4 py-2 w-full">
        <div class="flex justify-between items-center">
          <p class="w-1/4 font-bold mr-2">Description:</p>
          <p class="w-3/4 break-words">
            {{ quote.description || "-" }}
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
              v-for="(order, i) in quote.items"
              :key="i"
              class="break-words text-center"
            >
              <td class="px-[4px] py-1">
                {{ order.qty }}
              </td>
              <td class="px-[4px] uppercase py-1">{{ order.name }}</td>
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
          border-t-2 border-dashed
          text-lg
          border-gray-300
        "
      >
        <div class="px-2 flex justify-between text-base">
          <p class="font-bold">Total:</p>
          <p>{{ quote.partial.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div class="px-2 flex justify-between text-base mt-1">
          <p class="font-bold">Taxes:</p>
          <p>{{ quote.taxes.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div class="px-2 flex justify-between text-base mt-1">
          <p class="font-bold">Frais de livraison:</p>
          <p>{{ quote.shipment.toLocaleString("fr-FR") }} FCFA</p>
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
          <p>{{ quote.total.toLocaleString("fr-FR") }} FCFA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/Pages/Layout.vue";
import ShopInfo from "@/Components/ShopInfo.vue";

export default {
  layout: Layout,

  props: {
    quote: Object,
  },

  components: {
    ShopInfo,
  },

  setup(props) {
    const getDateTime = () => {
      const d = new Date(props.quote.created_at);
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

    return {
      getDateTime,
    };
  },
};
</script>