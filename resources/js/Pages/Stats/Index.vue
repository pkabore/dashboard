<template>
  <div class="w-full p-1 mx-auto">
    <div class="mt-4 px-2">
      <h2 class="m-0 py-2 text-lg text-gray-600 flex items-center justify-end">
        <div class="relative h-6 w-6 mr-1">
          <PersonIcon class="absolute text-gray-500" />
          <div class="absolute border-[2px] border-white bottom-[2px] left-[0px] w-[9px] h-[9px] rounded-full bg-green-500"></div>
        </div>
        <span>{{$page.props.auth.user.name}}</span>
      </h2>
    </div>
    <div class="mt-4 px-2">
      <div class="family-mono uppercase grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Articles</p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.articlesNumber).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Sorties</p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.expensesAmount.toFixed(2)).toLocaleString('fr-FR')}} Frs</p>
        </div>
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Factures Total</p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.billsNumber).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Clients</p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.clientsNumber).toLocaleString('fr-FR')}}</p>
        </div>
      </div>
      <div class="family-mono uppercase grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Rayons</p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.categoriesNumber).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Entrées</p>
          <p class="text-base font-bold text-sky-700 text-center">{{parseFloat(metadata.income.toFixed(2)).toLocaleString('fr-FR')}} Frs</p>
        </div>
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm"> Factures Non Payées </p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.unpaidBillsNumber).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white border border-slate-300 text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Devis</p>
          <p class="text-base font-bold text-sky-700">{{parseFloat(metadata.quotesNumber).toLocaleString('fr-FR')}}</p>
        </div>
      </div>
      <div class="mt-4 w-full md:flex justify-between md:space-x-2">
        <div class="chart-container bg-white relative border border-dashed border-slate-300 px-2 rounded-md mt-2 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="balance"></canvas>
        </div>
        <div class="chart-container bg-white relative border border-dashed border-slate-300 px-2 rounded-md mt-4 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="clients"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/Pages/Layout.vue";
import PersonIcon from "@/Components/PersonIcon.vue";
import { defineComponent, ref, onMounted } from "vue";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  LinearScale,
  CategoryScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  LinearScale,
  CategoryScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);


export default defineComponent({
  layout: Layout,

  components: { PersonIcon },

  props: { metadata: Object },

  setup(props) {

    const data = ref(props.metadata);

    onMounted(() => {
      const balance = new Chart('balance', {
        data : {
          //labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
            {
              type: 'bar',
              label: 'Sorties',
              data: props.metadata.expensesAmountStats,
              backgroundColor: '#0ea5e9',
              tension: 0.1,
              order:1
            },
            {
              type: 'bar',
              label: 'Entrées',
              data: props.metadata.salesAmountStats,
              backgroundColor: '#a855f7',
              tension: 0.1,
              order:2
            }
          ],
        },
        options: {
            interaction: {
              intersect: false,
              mode: 'index',
            },
            plugins: {},
            responsive: true
          },
      });

      const clients = new Chart('clients', {
        data : {
          //labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
            {
              type: 'line',
              label: 'Clients',
              data: props.metadata.clientsNumberStats,
              borderColor: '#10b981',
              backgroundColor: '#10b981',
              //tension: 0.1,
              cubicInterpolationMode: 'monotone'
            },
            {
              type: 'line',
              label: 'Devis',
              data: props.metadata.quotesNumberStats,
              borderColor: '#a855f7',
              backgroundColor: '#a855f7',
              //tension: 0.1,
              cubicInterpolationMode: 'monotone'
            }
          ],
        },
        options: {
            interaction: {
              intersect: false,
              mode: 'index',
            },
            plugins: {},
            //responsive: true,
            scales:{
              y: {
                type:'linear'
              }
            }

          },
      });
    });
    return {};
  },
});
</script>