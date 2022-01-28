<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Générer une facture
    </h2>
    <div class="flex justify-center max-w-3xl mx-auto space-x-2">
      <div class="w-7/12 mx-auto rounded-md border pt-4 my-7">
        <div id="bill" class="w-full px-2 mx-auto">
          <h2 v-if="failureMessage.length > 0" class="text-center text-red-700 my-2">
            {{ failureMessage }}
          </h2>
          <h2 v-else class="text-center text-green-700 my-2">
            {{ message }}
          </h2>
          <ShopInfo />
          <div class="mt-4 flex justify-between text-gray-900 capitalize">
            <p>
              {{ getDateTime() }}
            </p>
            <p>Facture N°{{ bill.receipt_id }}</p>
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
              <span>{{ bill.client.phone || "-" }}</span>
            </p>
            <p class="flex items-center justify-between">
              <span class="font-bold">Email:</span>
              <span>{{ bill.client.email || "-" }}</span>
            </p>
          </div>

          <div class="border-t-2 border-dashed border-gray-300 py-2 w-full">
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
                  @keyup.enter="removeFromBill(order)"
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
            v-if="bill.items.length"
            class="py-2 w-full border-t-2 border-dashed text-lg border-gray-300"
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
              class="
                border-t-2 border-dashed
                px-0
                py-4
                flex
                items-center
                uppercase
                text-center text-sm
              "
            >
              <span class="font-bold mr-1">Date limite de paiment:</span>
              <span class="text-base">{{ getDateTime(bill.deadline) }}</span>
            </p>
          </div>
          <div v-if="error.length">
            <p class="text-center mb-3 text-sm text-red-700">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-5/12 py-4 px-4 my-7 mx-auto rounded-md border h-full"
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
              @click="printBill"
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
              @click="resetBill"
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
          <Autocomplete @choice="(article) => addToBill(article)" id="article" :items="reactiveArticles" @search="(keyword) => {form.search=keyword;}" :default="{name: '', id:0}" />
          <div class="text-red-700 text-xs mt-1" v-if="bill.errors.items">
            {{ bill.errors.items }}
          </div>
        </div>
        <div class="mt-1 mt-[5px] relative">
          <label
            for="client"
            class="text-sm family-mono uppercase font-bold text-gray-800"
            >Client:</label
          >
          <Autocomplete @choice="(client) => bill.client = client" id="client" :items="clients" @search="(keyword) => searchClient({search:keyword})" :default="{name: '', id:0}"/>
          <div class="text-red-700 text-xs mt-1" v-if="clientDetailsError">
            {{
              bill.errors["client.id"] ||
              bill.errors["client.name"] ||
              bill.errors["client.phone"]
            }}
          </div>
        </div>
        <div class="mx-auto mt-[5px]">
          <label
            for="deadline"
            class="text-sm uppercase family-mono font-bold text-gray-800"
            >Date limite:</label
          >
          <input
            id="deadline"
            type="date"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': bill.errors.deadline }"
            v-model="bill.deadline"
            placeholder="Date d'expiration"
          />
          <div class="text-red-700 text-xs mt-1" v-if="bill.errors.deadline">
            {{ bill.errors.deadline }}
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
            :class="{ 'border-red-700': bill.errors.description }"
            v-model="bill.description"
            placeholder="Description de la facture"
          ></textarea>
          <div class="text-red-700 text-xs mt-1" v-if="bill.errors.description">
            {{ bill.errors.description }}
          </div>
        </div>
        <div class="mx-auto mt-[5px] mb-4">
          <label
            for="shipment"
            class="text-sm uppercase family-mono font-bold text-gray-800"
            >Frais de livraison:</label
          >
          <input
            id="shipment"
            type="number"
            min="0"
            max="1000000000"
            maxlength="10"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': bill.errors.shipment }"
            v-model="bill.shipment"
            placeholder="Frais de livraison"
          />
          <div class="text-red-700 text-xs mt-1" v-if="bill.errors.shipment">
            {{ bill.errors.shipment }}
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
import ShopInfo from "@/Components/ShopInfo.vue";
import Autocomplete from "@/Components/Autocomplete.vue";

/*import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";*/

export default {
  layout: Layout,

  components: {
    ShopInfo,
    SearchIcon,
    ResetIcon,
    CheckIcon,
    Autocomplete,
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
      let d = new Date(bill.deadline);
      if (!bill.deadline) {
        d = new Date();
      }
      const year = d.getFullYear();
      let months = d.getMonth() + 1;
      let days = d.getDate();

      if (months < 10) months = "0" + months;
      if (days < 10) days = "0" + days;
      return `${days}/${months}/${year}`;
    };

    const bill = useForm({
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

    const addToBill = (article) => {
      error.value = "";
      let item = article;
      item.qty = 1;
      bill.items.push(item);
    };

    const removeFromBill = (removal) => {
      bill.items = bill.items.filter((order) => order.id != removal.id);
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

    watch(bill, () => {
      let priceAccumultor = 0;
      bill.partial = bill.items.reduce(
        (priceAccumultor, item) => priceAccumultor + item.price * item.qty,
        priceAccumultor
      );
      priceAccumultor = 0;
      bill.taxes = bill.items.reduce(
        (priceAccumultor, item) =>
          priceAccumultor + (item.price * item.qty * item.tax) / 100,
        priceAccumultor
      );
      bill.total = bill.partial + bill.taxes + bill.shipment;
    });

    const message = ref("");
    const error = ref("");

    const saveBill = () => {
      return new Promise(async (resolve, reject) => {
        error.value = "";
        if (bill.items.length == 0) {
          error.value = "Motif de facturation non spécifié (articles)";
          reject(new Error("Empty basket error"));
        }
        bill.items.forEach((order) => {
          if (order.qty > order.stock) {
            error.value = `Qté ${order.name} erronée!`;
            reject(new Error("Stock balance error"));
          }
        });
        if (!error.value.length) {
          bill.post(route("bills.store"), {
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

    const resetBill = () => {
      bill.items = [];
      bill.client = {};
      bill.taxes = 0;
      bill.partial = 0;
      bill.total = 0;
      bill.shipment = 0;
      bill.description = "";
      bill.receipt_id = getReceiptId();
      bill.deadline = "";

      message.value = "";
      error.value = "";
    };

    const printBill = async () => {
      try {
        await saveBill();
        message.value = "Facture générée avec succès";
        /*const targettedDiv = document.getElementById("bill");
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
          doc.save(`bill-${bill.receipt_id}.pdf`);
          reactiveArticles.value = props.articles;
        });*/
      } catch (error) {
        return;
      }
    };

    const getClientName = () => {
      if (bill.client.fname) {
        bill.client = {
          id: bill.client.id,
          name: bill.client.fname + " " + bill.client.lname,
          phone: bill.client.phone,
          email: bill.client.email,
        };
      }
      return bill.client.name;
    };

    const search = ref({ client: "" });
    const clients = ref([]);

    const searchClient = () => {
      axios
        .post(route("clients.search"), { search: search.value.client })
        .then((res) => {
          clients.value = res.data.data;
        })
        .catch((err) => {
          (err);
        });
    };

    const clientDetailsError = () => {
      if (
        bill.errors["client.id"] ||
        bill.errors["client.name"] ||
        bill.errors["client.phone"]
      )
        return (
          bill.errors["client.id"] ||
          bill.errors["client.name"] ||
          bill.errors["client.phone"]
        );
    };

    return {
      form,
      search,
      searchClient,
      clients,
      reactiveArticles,
      bill,
      getDateTime,
      error,
      addToBill,
      removeFromBill,
      printBill,
      resetBill,
      getClientName,
      clientDetailsError,
      message,
    };
  },
};
</script>

<style scoped>
#bill {
  font-family: "Ubuntu Mono" !important;
}
</style>