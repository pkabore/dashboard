<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Faire un devis
    </h2>
    <div class="flex justify-center max-w-3xl mx-auto space-x-2">
      <div class="w-7/12 bg-white mx-auto rounded-md  border pt-4 my-7">
        <div id="quote" class="w-full px-2 mx-auto">
          <h2 v-if="failureMessage.length > 0" class="text-center text-red-700 my-2">
            {{ failureMessage }}
          </h2>
          <h2 v-else class="text-center text-green-700 my-2">
            {{ message }}
          </h2>
          <shop-info />
          <div class="mt-4 flex justify-between text-gray-900 capitalize">
            <p>
              {{ getDateTime() }}
            </p>
            <p>Devis N°{{ quote.receipt_id }}</p>
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
              <span>{{ getClientName() || "-" }}</span>
            </p>
            <p class="flex items-center justify-between">
              <span class="font-bold">N° téléphone:</span>
              <span>{{ quote.client.phone || "-" }}</span>
            </p>
            <p class="flex items-center justify-between">
              <span class="font-bold">Email:</span>
              <span>{{ quote.client.email || "-" }}</span>
            </p>
          </div>

          <div class="border-t-2 border-dashed border-gray-300 py-2 w-full">
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
                  @keyup.enter="removeFromQuote(order)"
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
            v-if="quote.items.length"
            class="py-2 w-full border-t-2 border-dashed text-lg border-gray-300"
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
              @click="printQuote"
            >
              <CheckIcon class="h-5 w-5 mr-1" />
              <span>Save</span>
            </button>
            <button
              class="
                
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
                text-gray-600
                focus:outline-none
                rounded-md
                text-sm
              "
              @click="resetQuote"
            >
              <ResetIcon class="h-5 w-5 mr-1" />
              <span>Reset</span>
            </button>
          </div>
        </div>
        <div class="mt-1">
          <label
            for="article"
            class="text-sm family-mono uppercase font-bold text-gray-800"
            >Articles:</label
          >
          <Autocomplete @choice="(article) => addToQuote(article)" id="article" :items="reactiveArticles" @search="(keyword) => {form.search=keyword;}" :default="{name: '', id:0}"/>
          <div class="text-red-700 text-xs mt-1" v-if="quote.errors.items">
            {{ quote.errors.items }}
          </div>
        </div>
        <div class="mt-1 mt-[5px]">
          <label
            for="client"
            class="text-sm family-mono uppercase font-bold text-gray-800"
            >Client:</label
          >
          <Autocomplete @choice="(client) => quote.client = client" id="client" :items="clients" @search="(keyword) => searchClient({search:keyword})" :default="{name: '', id:0}"/>
          <div class="text-red-700 text-xs mt-1" v-if="clientDetailsError">
            {{
              quote.errors["client.id"] ||
              quote.errors["client.name"] ||
              quote.errors["client.phone"]
            }}
          </div>
        </div>
        <div class="mx-auto mt-[5px]">
          <label
            for="description"
            class="text-sm uppercase family-mono font-bold text-gray-800"
            >Description:</label
          >
          <textarea
            id="description"
            maxlength="256"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': quote.errors.description }"
            v-model="quote.description"
            placeholder="Description du devis"
          ></textarea>
          <div
            class="text-red-700 text-xs mt-1"
            v-if="quote.errors.description"
          >
            {{ quote.errors.description }}
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
import SearchIcon from "@/Components/SearchIcon.vue";
import Autocomplete from "@/Components/Autocomplete.vue";
/*import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";*/


import ShopInfo from '@/Components/ShopInfo.vue';

export default {
  layout: Layout,

  components: {
    SearchIcon,
    ResetIcon,
    CheckIcon,
    Autocomplete,
    ShopInfo,
  },

  props: { failureMessage: String },

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
      let d = new Date(quote.deadline);
      if (!quote.deadline) {
        d = new Date();
      }
      const year = d.getFullYear();
      let months = d.getMonth() + 1;
      let days = d.getDate();

      if (months < 10) months = "0" + months;
      if (days < 10) days = "0" + days;
      return `${days}/${months}/${year}`;
    };

    const quote = useForm({
      client: {},
      receipt_id: getReceiptId(),
      deadline: "",
      description: "",
      items: [],
      taxes: 0,
      shipment: 0,
      partial: 0,
      total: 0,
    });

    const reactiveArticles = ref([]);

    const addToQuote = (article) => {
      error.value = "";
      let item = article;
      item.qty = 1;
      quote.items.push(item);
    };

    const removeFromQuote = (removal) => {
      quote.items = quote.items.filter((order) => order.id != removal.id);
    };

    watch(form, () => {
      axios
        .post(route("articles.search"), form)
        .then((res) => {
          reactiveArticles.value = res.data.data;
        })
        .catch((err) => {
          //('');
        });
    });

    watch(quote, () => {
      let priceAccumultor = 0;
      quote.partial = quote.items.reduce(
        (priceAccumultor, item) => priceAccumultor + item.price * item.qty,
        priceAccumultor
      );
      priceAccumultor = 0;
      quote.taxes = quote.items.reduce(
        (priceAccumultor, item) =>
          priceAccumultor + (item.price * item.qty * item.tax) / 100,
        priceAccumultor
      );
      quote.total = quote.partial + quote.taxes + quote.shipment;
    });

    const message = ref("");
    const error = ref("");

    const savequote = () => {
      return new Promise(async (resolve, reject) => {
        error.value = "";
        if (quote.items.length == 0) {
          error.value = "Motif de facturation non spécifié (articles)";
          reject(new Error("Empty basket error"));
        }
        if (!error.value.length) {
          quote.post(route("quotes.store"), {
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

    const resetQuote = () => {
      quote.items = [];
      quote.client = {};
      quote.taxes = 0;
      quote.partial = 0;
      quote.total = 0;
      quote.shipment = 0;
      quote.description = "";
      quote.receipt_id = getReceiptId();
      quote.deadline = "";

      message.value = "";
      error.value = "";
    };

    const printQuote = async () => {
      try {
        await savequote();
        message.value = "Devis créé avec succès";
        /*const targettedDiv = document.getElementById("quote");
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
          doc.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
          doc.save(`quote-${quote.receipt_id}.pdf`);
          reactiveArticles.value = props.articles;
        });*/
      } catch (error) {
        return;
      }
    };

    const getClientName = () => {
      if (quote.client.fname) {
        quote.client = {
          id: quote.client.id,
          name: quote.client.fname + " " + quote.client.lname,
          phone: quote.client.phone,
          email: quote.client.email,
        };
      }
      return quote.client.name;
    };

    const clients = ref([]);

    const searchClient = (payload) => {
      axios
        .post(route("clients.search"), payload)
        .then((res) => {
          clients.value = res.data.data;
        })
        .catch((err) => {
        });
    };

    const escapeSpace = (e) => {
      if (e.keyCode === 32) {
        e.stopImmediatePropagation();
        search.value.client = search.value.client + " ";
      }
    };

    const clientDetailsError = () => {
      if (
        quote.errors["client.id"] ||
        quote.errors["client.name"] ||
        quote.errors["client.phone"]
      )
        return (
          quote.errors["client.id"] ||
          quote.errors["client.name"] ||
          quote.errors["client.phone"]
        );
    };

    return {
      form,
      searchClient,
      escapeSpace,
      clients,
      reactiveArticles,
      quote,
      getDateTime,
      error,
      addToQuote,
      removeFromQuote,
      printQuote,
      resetQuote,
      getClientName,
      clientDetailsError,
      message,
    };
  },
};
</script>

<style scoped>
#quote {
  font-family: "Ubuntu Mono", monospace;
}
</style>