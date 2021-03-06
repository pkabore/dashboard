<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Enregistrer vente
    </h2>
    <div class="md:flex justify-center md:max-w-3xl mx-auto md:space-x-2">
      <div
        class="w-full md:w-7/12 bg-white mx-auto rounded-3xl border pt-4 my-7"
      >
        <div id="sale" class="w-full px-2 mx-auto">
          <h2
            v-if="failureMessage.length > 0"
            class="text-center text-red-700 my-2"
          >
            {{ failureMessage }}
          </h2>
          <h2 v-else class="text-center text-green-700 my-2">
            {{ message }}
          </h2>
          <shop-info />
          <div class="mt-4 flex justify-between text-gray-900 capitalize">
            <p>
              {{ sale.date }}
            </p>
            <p>Reçu N°<span class="uppercase">{{ sale.receipt_id }}</span></p>
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
            class="py-2 w-full border-t border-dashed text-lg"
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
          <div class="py-4 mt-3 border-t border-dashed">
            <p class="text-center text-base font-sans">Au revoir et à bientôt . . .</p>
          </div>
          <div v-if="error.length">
            <p class="text-center mb-3 text-red-800">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          md:w-5/12
          bg-white
          py-4
          px-4
          my-7
          mx-auto
          rounded-3xl
          border
          h-full
        "
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
                rounded-full
                text-sm
                mb-2
              "
              @click="isOpen = !isOpen"
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
                rounded-full
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
          <Autocomplete
            @choice="(article) => addToSale(article)"
            id="article"
            :items="reactiveArticles"
            @search="
              (keyword) => {
                form.search = keyword;
              }
            "
            :default="{ name: '', id: 0 }"
          />
          <div class="text-red-700 text-xs mt-1" v-if="sale.errors.items">
            {{ sale.errors.items }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog
    @cancel="isOpen = false"
    @confirm="printSale()"
    :class="{ hidden: !isOpen }"
    type="Sauver"
    message="Confirmez-vous ce paiement?"
  />
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import ResetIcon from "@/Components/ResetIcon.vue";
import CheckIcon from "@/Components/CheckIcon.vue";
import Dialog from "@/Components/Dialog.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import axios from "axios";
import ObjectId from 'bson-objectid';
import SearchIcon from "@/Components/SearchIcon.vue";
import Autocomplete from "@/Components/Autocomplete.vue";
import ShopInfo from "@/Components/ShopInfo.vue";

export default {
  layout: Layout,

  components: {
    SearchIcon,
    ResetIcon,
    CheckIcon,
    Dialog,
    Autocomplete,
    ShopInfo,
  },

  props: { failureMessage: String },

  setup(props) {
    const form = useForm({
      search: "",
    });

    const isOpen = ref(false);

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
      receipt_id: ObjectId(),
      items: [],
      taxes: 0.0,
      partial: 0.0,
      total: 0.0,
      date: getDateTime(),
    });

    const reactiveArticles = ref([]);

    const addToSale = (article) => {
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
          //('');
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
          error.value = "Aucun article ajouté!";
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
      sale.taxes = 0.0;
      sale.partial = 0.0;
      sale.total = 0.0;
      sale.date = getDateTime();
      sale.receipt_id = ObjectId();

      message.value = "";
      error.value = "";
    };

    const printSale = async () => {
      try {
        isOpen.value = false;
        await saveSale();
        message.value = "Vente enregistrée avec succès";
        /*const targettedDiv = document.getElementById("sale");
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
            doc.save(`sale-${sale.receipt_id}.pdf`);
            reactiveArticles.value = props.articles;
          });*/
      } catch (error) {
        return;
      }
    };

    return {
      form,
      isOpen,
      reactiveArticles,
      sale,
      getDateTime,
      error,
      addToSale,
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