<template>
  <div class="mx-auto max-w-lg family-mono">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Reçu N°{{ sale.receipt_id }}
    </h2>
    <div class="pt-4 w-full my-7 px-4 ml-3 rounded-md h-full mx-auto">
      <ShopInfo />
      <div class="mt-4 flex justify-between text-gray-900 capitalize">
        <p>
          {{ getDateTime(sale) }}
        </p>
        <p>Reçu {{ sale.receipt_id }}</p>
      </div>
      <div class="w-full mx-auto overflow-x-hidden mt-4 p-0">
        <table class="table-auto w-full p-0">
          <thead>
            <tr>
              <th class="py-3">Qté</th>
              <th class="py-3">Dés.</th>
              <th class="py-3">Prix</th>
              <th class="py-3">Taxe</th>
              <th class="py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(order, i) in sale.items"
              :key="i"
              class="break-words text-center"
            >
              <td class="px-[4px] py-1">
                {{ order.qty }}
              </td>
              <td class="px-[4px] py-1 uppercase">{{ order.article }}</td>
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
        v-if="sale.items.length"
        class="mt-4 py-2 w-full border-t-2 border-dashed border-gray-300"
      >
        <div class="px-2 flex justify-between">
          <p>Total:</p>
          <p>{{ sale.partial.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div class="px-2 flex justify-between mt-1">
          <p>Taxes:</p>
          <p>{{ sale.taxes.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <div class="px-2 pb-1 flex justify-between mt-1 font-bold">
          <p>Total TTC:</p>
          <p>{{ sale.total.toLocaleString("fr-FR") }} FCFA</p>
        </div>
        <p class="border-t-2 border-dashed mt-2 px-0 py-4 text-center">
          Au revoir et à bientôt...
        </p>
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
    sale: Object,
  },
  components: { ShopInfo },
  setup(props) {
    const getDateTime = () => {
      const d = new Date(props.sale.created_at);
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