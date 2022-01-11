<template>
  <Dashboard>
    <div class="px-2 mx-auto w-full">
      <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
        Vente
      </h2>
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
            <table
              class="w-full table-auto text-sm shadow-sm"
            >
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
                  <td class="p-2">
                    {{ article.name }}
                  </td>
                  <td class="p-2">{{ parseFloat(article.price).toLocaleString('fr-FR') }}</td>
                  <td>{{ parseFloat(article.tax).toLocaleString('fr-FR') }}</td>
                  <td>
                    <ShoppingIcon
                      class="h-5 w-5 text-indigo-600 cursor-pointer"     
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="receipt" style="width: 272.125px!important" class="pt-4 my-7 px-[4px] ml-3 bg-white rounded-xl h-full text-xs">
          <p class="text-center text-gray-900 capitalize">
            SuperMarket Boutique - Bogodogo
          <br>
            17 Avenue Kwamé N'Krumah 2
          <br>
            01 BP 0321
            <br>
            +226 70 00 00 00
            <br>
            +226 74 00 00 00
          </p>
          <div class="mt-4 flex justify-between text-gray-900 capitalize">
          	<p>
          		{{ orders.date.date + " " + orders.date.time }}
          	</p>
          	<p>Reçu {{orders.receiptId}}</p>
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
	          		<tr v-for="(order, i) in orders.items" :key="i" class="break-words text-center" @keyup.enter="removeFromCart(order)">	
		            	<td class="px-[4px] py-1">
		            		<input type="number" step="1" min="1" v-model="order.qty" class="block mx-auto p-0 w-10 h-7 border-none focus:border-2 focus:border-green-300 rounded-md focus:outline-none focus:ring-0">
		            	</td>
		            	<td class="px-[4px] py-1">{{ order.name }}</td>
		            	<td class="px-[4px] py-1">{{ order.price.toLocaleString('fr-FR') }}</td>
		            	<td class="px-[4px] py-1">{{ (order.qty * order.tax).toLocaleString('fr-FR') + "%" }}</td>
		            	<td class="px-[4px] py-1 font-bold">
		                	{{ (order.qty * order.price).toLocaleString('fr-FR') }}
		            	</td>
	          		</tr>
	          	</tbody>
	         	</table>
          </div>
        	<div v-if="orders.items.length" class="mt-4 py-2 w-full border-t-2 border-dashed text-lg border-gray-300">
        		<p class="px-2 flex justify-between text-xs">
        			<span>Total:</span>	
        			<span>{{orders.partialTotal.toLocaleString('fr-FR')}} FCFA</span>
        		</p>
        		<p class="px-2 flex justify-between text-xs mt-1">
        			<span>Taxes:</span>
        			<span>{{orders.taxes.toLocaleString('fr-FR')}} FCFA</span>
        		</p>
        		<p class="px-2 pb-1 flex justify-between text-xs mt-1 font-bold">
        			<span>Total TTC:</span>
        			<span>{{orders.total.toLocaleString('fr-FR')}} FCFA</span>
        		</p>

        		<p class="border-t-2 border-dashed mt-2 px-0 py-4 text-center text-sm">Au revoir et à bientôt!</p>
        	</div>
        </div>
      </div>
      <div class="fixed right-2 flex flex-col bottom-2">
      	<button class="bg-white text-green-600" @click="printReceipt">Valider</button>
      	<button class="bg-white text-blue-600">Reset</button>
      </div>
    </div>
  </Dashboard>
</template>


<script>
import Dashboard from "../../Dashboard.vue";
import SearchIcon from "@/Components/SearchIcon.vue";
import AddIcon from "@/Components/AddIcon.vue";
import EditIcon from "@/Components/EditIcon.vue";
import DeleteIcon from "@/Components/DeleteIcon.vue";
import ChevronRightIcon from "@/Components/ChevronRightIcon.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import ShoppingIcon from "@/Components/ShoppingIcon.vue";
import { Link, Head, useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { watch, ref, reactive } from "vue";
import axios from "axios";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

export default {
  components: {
    Link,
    Head,
    SearchIcon,
    AddIcon,
    EditIcon,
    DeleteIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ShoppingIcon,
    Dashboard,
  },

  props: { articles: Array },

  setup(props) {
    const form = reactive({
      search: "",
      sortByName: "",
      sortByPrice: "",
      sortByTax: "",
    });

    const getReceiptId = () => {
    	const d = new Date();
    	return `${d.getFullYear()}${d.getMonth()+1}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
    }

    const getDateTime = () => {
    	const d = new Date();
    	const year = d.getFullYear();
    	let months = d.getMonth() + 1;
    	let days = d.getDate();
    	let hours = d.getHours();
    	let mins = d.getMinutes();

    	if (months < 10)
    		months = "0" + months;
    	if (days < 10)
    		days = "0" + days;
    	if (hours < 10)
    		hours = "0" + hours;
    	if (mins < 10)
    		mins = "0" + mins;

    	return {
    		date: `${days}/${months}/${year}`,
    		time: `${hours}H:${mins}`
    	}
    }

    const orders = reactive({
    	receiptId: getReceiptId(),
    	date: getDateTime(),
    	items: [],
    	taxes: 0,
    	partialTotal: 0,
    	total: 0
    });

    const orderError = ref('');

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
    	orders.items.push(article);
    };

    const removeFromCart = (removal) => {
    	orders.items = orders.items.filter(order => order.id != removal.id);
    };

    watch(form, () => {
      axios
        .post(route("articles.search"), form)
        .then((res) => {
          reactiveArticles.value = res.data.data;
        })
        .catch((err) => console.log(err));
    });

    watch(orders, () => {
    	let priceAccumultor = 0;
    	orders.partialTotal = orders.items.reduce(function(priceAccumultor, item) {
    		if (item.qty < 1){
    			orderError.value = "Mauvaise entrée, veuillez recommencer!";
    			return 0;
    		}
    		return priceAccumultor + item.price * item.qty;
    	}, priceAccumultor);
    	priceAccumultor = 0;
    	orders.taxes = orders.items.reduce(((priceAccumultor, item) => priceAccumultor + (item.price * item.qty * item.tax) / 100), priceAccumultor);
    	orders.total = orders.partialTotal + orders.taxes;
    })


    const saveReceipt = () => {

    };


    const printReceipt = async () => {
    	
    	await saveReceipt();

    	const receipt = document.getElementById('receipt');
    	const doc = new jsPDF({ unit: 'px', format: [receipt.clientWidth, receipt.clientHeight], orientation: 'p', hotfixes: ['px_scaling'] });
    	
    	doc.setFontSize(18);
    	doc.setFont('courier');

    	html2canvas(receipt, {
        width: doc.internal.pageSize.getWidth(),
        height: doc.internal.pageSize.getHeight()
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        doc.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
        doc.save("receipt.pdf");
      })
    }

    return {
    	form,
    	setFilter,
    	addToCart,
    	removeFromCart,
    	reactiveArticles,
    	orders,
    	printReceipt
    };
  },
};
</script>

<style scoped>
	#receipt{
		font-family: 'JetBrains Mono' !important;
	}

	.family-mono{
		font-family: 'Ubuntu Mono' !important;
	}
</style>