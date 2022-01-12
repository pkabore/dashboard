<template>
  <Dashboard>
    <div class="px-2 mx-auto w-full">
      <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Vente</h2>
      <div class="flex justify-center">
        <div class="w-8/12 mx-auto rounded-xl bg-white border pt-4 my-7">
          <div class="flex items-center justify-center space-x-2 px-2 mb-4">
            <div class="relative max-w-sm mx-auto">
              <SearchIcon
                class="absolute right-2 top-4 w-4 h-4 text-gray-600"
              />
              <input
                id="search"
                type="text"
                class="input bg-slate-200 rounded inset-0 pr-8"
                v-model="form.search"
                placeholder="Rechercher un article"
              />
            </div>
          </div>
          <div class="w-full mx-auto overflow-x-auto">
            <table class="w-full table-auto text-sm shadow-sm">
              <thead>
                <tr>
                  <th class="py-3">Id</th>
                  <th class="py-3">
                    <div class="flex items-center justify-center">
                      <ChevronUpIcon
                        @click="setFilter('sortByName', 'asc')"
                        class="
                          h-4
                          w-4
                          mr-1
                          text-gray-500
                          hover:text-amber-700
                          cursor-pointer
                        "
                        :class="{ 'text-amber-700': form.sortByName == 'asc' }"
                      />
                      <span>Dés.</span>
                      <ChevronDownIcon
                        @click="setFilter('sortByName', 'desc')"
                        class="
                          h-4
                          w-4
                          ml-1
                          text-gray-500
                          hover:text-amber-700
                          cursor-pointer
                        "
                        :class="{ 'text-amber-700': form.sortByName == 'desc' }"
                      />
                    </div>
                  </th>
                  <th class="py-3">
                    <div class="flex items-center justify-center">
                      <ChevronUpIcon
                        @click="setFilter('sortByPrice', 'asc')"
                        class="
                          h-4
                          w-4
                          mr-1
                          text-gray-500
                          hover:text-amber-700
                          cursor-pointer
                        "
                        :class="{ 'text-amber-700': form.sortByPrice == 'asc' }"
                      />
                      <span>Prix</span>
                      <ChevronDownIcon
                        @click="setFilter('sortByPrice', 'desc')"
                        class="
                          h-4
                          w-4
                          ml-1
                          text-gray-500
                          hover:text-amber-700
                          cursor-pointer
                        "
                        :class="{
                          'text-amber-700': form.sortByPrice == 'desc',
                        }"
                      />
                    </div>
                  </th>
                  <th class="py-3">
                    <div class="flex items-center justify-center">
                      <ChevronUpIcon
                        @click="setFilter('sortByTax', 'asc')"
                        class="
                          h-4
                          w-4
                          mr-1
                          text-gray-500
                          hover:text-amber-700
                          cursor-pointer
                        "
                        :class="{ 'text-amber-700': form.sortByTax == 'asc' }"
                      />
                      <span>Taxe</span>
                      <ChevronDownIcon
                        @click="setFilter('sortByTax', 'desc')"
                        class="
                          h-4
                          w-4
                          ml-1
                          text-gray-500
                          hover:text-amber-700
                          cursor-pointer
                        "
                        :class="{ 'text-amber-700': form.sortByTax == 'desc' }"
                      />
                    </div>
                  </th>
                  <th class="py-3">Actions</th>
                </tr>
              </thead>
              <tbody class="pt-4">
                <tr
                  v-for="article in reactiveArticles"
                  :key="article.id"
                  class="border-t space-x-2 text-center hover:bg-neutral-200"
                  @click="addToCart(article)"
                >
                  <td class="p-2">
                    {{ article.id }}
                  </td>
                  <td class="p-2 uppercase">
                    {{ article.name }}
                  </td>
                  <td class="p-2">
                    {{ parseFloat(article.price).toLocaleString("fr-FR") }}
                  </td>
                  <td>
                    {{ parseFloat(article.tax).toLocaleString("fr-FR") + "%" }}
                  </td>
                  <td class="p-2">
                    <ShoppingIcon
                      class="h-5 w-5 text-indigo-600 cursor-pointer"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id="receipt"
          style="width: 272.125px !important"
          class="
            pt-4
            my-7
            px-[4px]
            ml-3
            bg-white
            rounded-xl
            h-full
            text-xs
            mx-auto
          "
        >
          <h2 v-if="message" class="text-center text-green-600 text-xs my-2">
            {{ message }}
          </h2>
          <p class="text-center text-gray-900 uppercase">
            SuperMarket Boutique - Bogodogo
            <br />
            17 Avenue Kwamé N'Krumah 2
            <br />
            01 BP 0321
            <br />
            +226 70 00 00 00
            <br />
            +226 74 00 00 00
          </p>
          <div class="mt-4 flex justify-between text-gray-900 capitalize">
            <p>
              {{ sale.date }}
            </p>
            <p>Reçu {{ sale.receipt_id }}</p>
          </div>
          <div class="w-full mx-auto overflow-x-hidden mt-4 p-0">
            <table class="table-auto w-full p-0">
              <thead>
                <tr class="text-xs">
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
                  @keyup.enter="removeFromCart(order)"
                >
                  <td class="px-[4px] py-1">
                    <input
                      type="number"
                      step="1"
                      min="1"
                      v-model="order.qty"
                      class="
                        block
                        mx-auto
                        p-0
                        w-10
                        h-7
                        border-none
                        focus:border-2 focus:border-green-300
                        rounded-md
                        focus:outline-none focus:ring-0
                        text-xs
                      "
                    />
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
            v-if="sale.items.length"
            class="
              mt-4
              py-2
              w-full
              border-t-2 border-dashed
              text-lg
              border-gray-300
            "
          >
            <div class="px-2 flex justify-between text-xs">
              <p>Total:</p>
              <p>{{ sale.partial.toLocaleString("fr-FR") }} FCFA</p>
            </div>
            <div class="px-2 flex justify-between text-xs mt-1">
              <p>Taxes:</p>
              <p>{{ sale.taxes.toLocaleString("fr-FR") }} FCFA</p>
            </div>
            <div class="px-2 pb-1 flex justify-between text-xs mt-1 font-bold">
              <p>Total TTC:</p>
              <p>{{ sale.total.toLocaleString("fr-FR") }} FCFA</p>
            </div>
            <p
              class="
                border-t-2 border-dashed
                mt-2
                px-0
                py-4
                text-center text-sm
              "
            >
              Au revoir et à bientôt...
            </p>
          </div>
          <div v-else>
            <p class="text-center text-xs text-amber-700">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
      <div class="fixed right-2 z-50 flex flex-col bottom-2">
        <button
          class="
            bg-white
            py-2
            px-4
            shadow-sm shadow-green-500/50
            flex
            items-center
            text-green-600
            rounded-md
            text-sm
            mb-3
          "
          @click="printReceipt"
        >
          <CheckIcon class="h-5 w-5 mr-1" />
          <span>Valider</span>
        </button>
        <button
          class="
            bg-white
            py-2
            px-4
            shadow-sm shadow-blue-500/50
            flex
            items-center
            text-blue-600
            rounded-md
            text-sm
          "
          @click="resetSale"
        >
          <ResetIcon class="h-5 w-5 mr-1" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  </Dashboard>
</template>


<script>
import Dashboard from "../../Dashboard.vue";
import SearchIcon from "@/Components/SearchIcon.vue";
import CheckIcon from "@/Components/CheckIcon.vue";
import ResetIcon from "@/Components/ResetIcon.vue";
import AddIcon from "@/Components/AddIcon.vue";
import EditIcon from "@/Components/EditIcon.vue";
import DeleteIcon from "@/Components/DeleteIcon.vue";
import ChevronRightIcon from "@/Components/ChevronRightIcon.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import ShoppingIcon from "@/Components/ShoppingIcon.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { watch, ref, reactive } from "vue";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default {
  components: {
    SearchIcon,
    CheckIcon,
    ResetIcon,
    AddIcon,
    EditIcon,
    DeleteIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ShoppingIcon,
    Dashboard,
  },

  props: { articles: Array, message: String },

  setup(props) {
    const form = useForm({
      search: "",
      sortByName: "",
      sortByPrice: "",
      sortByTax: "",
    });

    const getReceiptId = () => {
      const d = new Date();
      return `${d.getFullYear()}${
        d.getMonth() + 1
      }${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
    };

    const getDateTime = () => {
      const d = new Date();
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

    const sale = useForm({
      receipt_id: getReceiptId(),
      date: getDateTime(),
      items: [],
      taxes: 0,
      partial: 0,
      total: 0,
    });

    const reactiveArticles = ref(props.articles);

    const setFilter = (key, value) => {
      const keys = Object.keys(form);
      if (keys.length > 1) {
        keys.forEach((key) => {
          if (key.startsWith("sortBy")) delete form[key];
        });
      }
      form[key] = value;
    };

    const addToCart = (article) => {
      article.qty = 1;
      sale.items.push(article);
    };

    const removeFromCart = (removal) => {
      sale.items = sale.items.filter((order) => order.id != removal.id);
    };

    watch(form, () => {
      axios
        .post(route("articles.search"), form)
        .then((res) => {
          reactiveArticles.value = res.data.data;
        })
        .catch((err) => console.log(err));
    });

    watch(sale, () => {
      let priceAccumultor = 0;
      sale.partial = sale.items.reduce(
        (priceAccumultor, item) => priceAccumultor + item.price * item.qty,
        priceAccumultor
      );
      priceAccumultor = 0;
      sale.taxes = sale.items.reduce(
        (priceAccumultor, item) =>
          priceAccumultor + (item.price * item.qty * item.tax) / 100,
        priceAccumultor
      );
      sale.total = sale.partial + sale.taxes;
    });

    const message = ref("");
    const error = ref("");

    const saveSale = () => {
      return new Promise(async (resolve, reject) => {
        try {
          sale.post(route("sales.store"));
          resolve(1);
        } catch (error) {
          reject(error);
        }
      });
    };

    const resetSale = () => {
      sale.items = [];
      sale.taxes = 0;
      sale.partial = 0;
      sale.total = 0;
      sale.receipt_id = getReceiptId();
      sale.date = getDateTime();

      message.value = "";
      error.value = "";
    };

    const printReceipt = async () => {
      await saveSale();

      console.log("Logging ", sale.errors.items);
      if (!Object.keys(sale.errors).length) {
        const receipt = document.getElementById("receipt");
        const doc = new jsPDF({
          unit: "px",
          format: [receipt.clientWidth, receipt.clientHeight],
          orientation: "p",
          hotfixes: ["px_scaling"],
        });

        doc.setFontSize(18);
        doc.setFont("courier");

        html2canvas(receipt, {
          width: doc.internal.pageSize.getWidth(),
          height: doc.internal.pageSize.getHeight(),
        }).then((canvas) => {
          const img = canvas.toDataURL("image/png");
          doc.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
          doc.save(`receipt-${sale.receipt_id}.pdf`);
        });
      } else error.value = sale.errors.items;
    };

    return {
      form,
      reactiveArticles,
      sale,
      error,
      setFilter,
      addToCart,
      removeFromCart,
      printReceipt,
      resetSale,
    };
  },
};
</script>

<style scoped>
#receipt {
  font-family: "Ubuntu Mono" !important;
}
</style>