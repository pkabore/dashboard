<template>
  <div class="w-full p-1">
    <h2 class="text-2xl font-bold mt-4 text-center">
      Analytics
    </h2>
    <div class="mt-4">
      <div class="family-mono grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Articles</p>
          <p class="text-base font-bold text-gray-600">{{parseFloat(metadata.articles).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Sorties</p>
          <p class="text-base font-bold text-sky-600">{{parseFloat(metadata.spendings.toFixed(2)).toLocaleString('fr-FR')}} Frs</p>
        </div>
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Sorties</p>
          <p class="text-base font-bold text-amber-600">{{parseFloat(metadata.expenses).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Clients</p>
          <p class="text-base font-bold text-green-600">{{parseFloat(metadata.clients).toLocaleString('fr-FR')}}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Rayons</p>
          <p class="text-base font-bold text-gray-600">{{parseFloat(metadata.categories).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Entrées</p>
          <p class="text-base font-bold text-amber-600 text-center">{{parseFloat(metadata.income.toFixed(2)).toLocaleString('fr-FR')}} Frs</p>
        </div>
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Entrées</p>
          <p class="text-base font-bold text-amber-600">{{parseFloat(metadata.sales).toLocaleString('fr-FR')}}</p>
        </div>
        <div class="bg-white text-gray-600 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
          <p class="text-sm">Devis</p>
          <p class="text-base font-bold text-green-600">{{parseFloat(metadata.quotes).toLocaleString('fr-FR')}}</p>
        </div>
      </div>
      <div class="mt-2 w-full md:flex justify-between md:space-x-2 max-w-full">
        <div class="chart-container bg-white relative px-2 rounded-md md:w-1/2">
          <canvas id="sales"></canvas>
        </div>
       <div class="chart-container bg-white relative px-2 rounded-md mt-2 md:mt-0 md:w-1/2">
          <canvas id="expenses"></canvas>
        </div>
      </div>
      <div class="mt-2 w-full md:flex justify-between md:space-x-2">
        <div class="chart-container bg-white relative px-2 rounded-md mt-2 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="bills_quotes"></canvas>
        </div>
       <div class="chart-container bg-white relative px-2 rounded-md mt-2 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="clients"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/Pages/Layout.vue";
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

  components: { },

  props: { metadata: Object },

  setup(props) {

    const data = ref(props.metadata);

    onMounted(() => {
      let datasetA = [];
      let datasetB = [];
      let labs = [];

      const mDays = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();

      for (let i = 0; i < mDays; ++i){
        datasetA.push(1/parseFloat((Math.random())) + 1);
        datasetB.push(parseFloat(Math.random()) * i + 4);
        labs.push(`${(i+1) > 9 ? (i+1) : '0' + (i+1)}`);
      }

      datasetA = datasetA.sort((a, b) => parseFloat(a) - parseFloat(b));
      datasetB = datasetB.sort((a, b) => parseFloat(a) - parseFloat(b));

      const sales = new Chart('sales', {
        data : {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [
            {
              type: 'bar',
              label: 'Dépenses',
              data: props.metadata.expenses_data_totals,
              backgroundColor: 'rgb(37, 99, 235)',
              tension: 0.1,
              order:3
            },
            {
              type: 'bar',
              label: 'Ventes',
              data: props.metadata.paid_bills_totals,
              backgroundColor: 'rgb(217 119 6)',
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
    });

    return {};
  },
});
</script>