<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Enregistrer vente
    </h2>
    <div class="flex justify-center max-w-3xl mx-auto space-x-2">
      <div class="w-7/12 mx-auto rounded-md bg-white border pt-4 my-7">
        <div id="sale" class="w-full px-2 mx-auto">
          <h2 v-if="message" class="text-center text-green-700 my-2">
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
            <p>Reçu N°{{ sale.receipt_id }}</p>
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
                  v-for="(order, i) in sale.items"
                  :key="i"
                  class="break-words text-center"
                  @keyup.enter="removeFromsale(order)"
                >
                  <td class="px-[4px] py-1">
                    <input
                      type="number"
                      step="1"
                      min="1"
                      :max="order.stock"
                      v-model="order.qty"
                      class="
                        block
                        mx-auto
                        p-0
                        w-10
                        h-7
                        border-none
                        focus:border focus:border-green-300
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
            class="py-2 w-full border-t-2 border-dashed text-lg border-gray-300"
          >
            <div class="px-2 flex justify-between text-base">
              <p class="font-bold">Total:</p>
              <p>{{ sale.partial.toLocaleString("fr-FR") }} FCFA</p>
            </div>
            <div class="px-2 flex justify-between text-base mt-1">
              <p class="font-bold">Taxes:</p>
              <p>{{ sale.taxes.toLocaleString("fr-FR") }} FCFA</p>
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
              <p>{{ sale.total.toLocaleString("fr-FR") }} FCFA</p>
            </div>
          </div>
          <div class="py-4 mt-3 border-t-2 border-dashed">
            <p class="text-center text-base">Au revoir et à bientôt...</p>
          </div>
          <div v-if="error.length">
            <p class="text-center mb-3 text-sm text-red-700">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-5/12 py-4 px-4 my-7 mx-auto bg-white rounded-md border h-full"
      >
        <div class="flex justify-end">
          <div class="w-24">
            <button
              class="
                bg-white
                w-full
                py-2
                px-4
                flex
                border border-slate-300
                hover:border-blue-600
                transition
                ease-in-out
                duration-300
                items-center
                text-blue-700
                focus:outline-none
                rounded-md
                text-sm
                mb-2
              "
              @click="printSale"
            >
              <CheckIcon class="h-5 w-5 mr-1" />
              <span>Save</span>
            </button>
            <button
              class="
                bg-white
                w-full
                py-2
                px-4
                flex
                border border-slate-300
                hover:border-slate-600
                transition
                ease-in-out
                duration-300
                items-center
                text-slate-600
                focus:outline-none
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
        <div class="mt-1 relative">
          <label
            for="article"
            class="text-sm family-mono uppercase font-bold text-gray-800"
            >Articles:</label
          >
          <Listbox id="article">
            <div class="mt-1">
              <ListboxButton
                class="
                  relative
                  w-full
                  py-[11px]
                  pl-3
                  pr-10
                  text-sm text-left
                  bg-white
                  border border-slate-300
                  focus:outline-none focus:border-slate-400
                  rounded-md
                  cursor-default
                "
              >
                <span class="block truncate"> Sélectionner </span>
                <span
                  class="
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    pr-2
                    pointer-events-none
                  "
                >
                  <SelectorIcon
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>
              <ListboxOptions
                class="
                  w-full
                  py-1
                  mt-1
                  overflow-y-scroll
                  bg-slate-50
                  rounded-md
                  shadow-md shadow-slate-500/50
                  max-h-60 max-w-full
                  focus:outline-none
                "
              >
                <ListboxOption disabled>
                  <div class="relative w-10/12 mb-1 mx-auto">
                    <input
                      type="text"
                      maxlength="32"
                      @keydown="escapeSpace"
                      class="input text-sm py-[7px] pl-3 text-sm pr-10"
                      v-model="form.search"
                      placeholder="Rechercher article"
                    />
                    <span
                      class="
                        absolute
                        inset-y-0
                        right-0
                        flex
                        items-center
                        pr-2
                        pointer-events-none
                      "
                    >
                      <SearchIcon
                        class="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </ListboxOption>
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="(article, i) in reactiveArticles"
                  :key="i"
                  :value="article"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'text-amber-700 bg-amber-200' : 'text-gray-900',
                      'list-none cursor-default text-sm select-none relative py-2 pl-10 pr-4',
                    ]"
                    @click="addTosale(article)"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ article.name }}</span
                    >
                    <span
                      v-if="selected"
                      class="
                        absolute
                        inset-y-0
                        left-0
                        flex
                        items-center
                        pl-3
                        text-amber-700
                      "
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </div>
          </Listbox>
          <div class="text-red-700 text-xs mt-1" v-if="sale.errors.items">
            {{ sale.errors.items }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import ResetIcon from "@/Components/ResetIcon.vue";
import CheckIcon from "@/Components/CheckIcon.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { SelectorIcon, SearchIcon } from "@heroicons/vue/solid";

export default {
  layout: Layout,

  components: {
    SearchIcon,
    ResetIcon,
    CheckIcon,
    SelectorIcon,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },

  props: { msg: String },

  setup(props) {
    const form = useForm({
      search: "",
    });

    const getReceiptId = () => {
      const d = new Date();
      return `${d.getFullYear()}${
        d.getMonth() + 1
      }${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
    };

    const getDateTime = () => {
      let d = new Date();

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
      items: [],
      taxes: 0,
      partial: 0,
      total: 0,
      date: getDateTime(),
    });

    const reactiveArticles = ref(props.articles);

    const addTosale = (article) => {
      error.value = "";
      article.qty = 1;
      sale.items.push(article);
    };

    const removeFromsale = (removal) => {
      sale.items = sale.items.filter((order) => order.id != removal.id);
    };

    watch(form, () => {
      axios
        .post(route("articles.search"), form)
        .then((res) => {
          reactiveArticles.value = res.data.data;
        })
        .catch((err) => {
          //console.log('');
        });
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
        error.value = "";
        if (sale.items.length == 0) {
          error.value = "Panier vide";
          reject(new Error("Empty basket error"));
        }
        sale.items.forEach((order) => {
          if (order.qty > order.stock) {
            error.value = `Qté ${order.name} erronée!`;
            reject(new Error("Stock balance error"));
          }
        });
        if (!error.value.length) {
          sale.post(route("sales.store"), {
            onSuccess: () => {
              resolve(0);
            },
            onFailure: () => {
              reject(error);
            },
          });
        }
      });
    };

    const resetSale = () => {
      sale.items = [];
      sale.taxes = 0;
      sale.partial = 0;
      sale.total = 0;
      sale.date = "";
      sale.receipt_id = getReceiptId();

      message.value = "";
      error.value = "";
    };

    const printSale = async () => {
      const confirmation = confirm("Confirmer le paiement ?");
      if (confirmation) {
        try {
          await saveSale();
          const targettedDiv = document.getElementById("sale");
          const doc = new jsPDF({
            unit: "px",
            format: [targettedDiv.clientWidth, targettedDiv.clientHeight],
            orientation: "p",
            hotfixes: ["px_scaling"],
          });

          doc.setFontSize("16px");
          doc.setFont("courier");

          html2canvas(targettedDiv, {
            width: doc.internal.pageSize.getWidth(),
            height: doc.internal.pageSize.getHeight(),
          }).then((canvas) => {
            const img = canvas.toDataURL("image/png");
            message.value = "Vente enregistrée avec succès";
            doc.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
            doc.save(`sale-${sale.receipt_id}.pdf`);
            reactiveArticles.value = props.articles;
          });
        } catch (error) {
          return;
        }
      }
    };

    const escapeSpace = (e) => {
      if (e.keyCode === 32) {
        e.stopImmediatePropagation();
        search.value.client = search.value.client + " ";
      }
    };

    return {
      form,
      escapeSpace,
      reactiveArticles,
      sale,
      getDateTime,
      error,
      addTosale,
      removeFromsale,
      printSale,
      resetSale,
      message,
    };
  },
};
</script>

<style scoped>
#sale {
  font-family: "Ubuntu Mono", monospace;
}
</style>