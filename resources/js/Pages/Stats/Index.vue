<template>
  <div class="w-full p-1 mx-auto">
    <div class="mt-4 px-2">
      <h2 class="m-0 py-2 text-lg text-gray-600 flex items-center justify-end">
        <div class="relative h-6 w-6 mr-1">
          <PersonIcon class="absolute text-gray-400" />
          <div class="absolute border-[2px] border-white bottom-[2px] left-[0px] w-[9px] h-[9px] rounded-full bg-green-500"></div>
        </div>
        <span>{{$page.props.auth.user.name}}</span>
      </h2>
    </div>
    <div class="mt-4 px-2 bg-white rounded-md">
      <div class="divide-y">
        <div class="divide-x grid grid-cols-4 gap-1 md:gap-2">
          <StatCard title="Articles" :value="metadata.articlesNumber" />
          <StatCard title="Dépenses" :value="parseFloat(metadata.expensesAmount.toFixed(2))" />
          <StatCard title="Factures Tot" :value="metadata.billsNumber" />
          <StatCard title="Clients" :value="metadata.clientsNumber" />
        </div>
        <div class="divide-x grid grid-cols-4 gap-1 md:gap-2">
          <StatCard title="Rayons" :value="metadata.categoriesNumber" />
          <StatCard title="Ventes" :value="parseFloat(metadata.income.toFixed(2))" />
          <StatCard title="Factures NP" :value="metadata.unpaidBillsNumber" />
          <StatCard title="Devis" :value="metadata.quotesNumber" />
        </div>
      </div>
      <div class="mt-6 w-full md:flex justify-between md:space-x-2">
        <div class="chart-container bg-white relative border p-2 rounded-md mt-2 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="balance" class="h-20" />
        </div>
        <div class="chart-container bg-white relative border p-2 rounded-md mt-4 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="clients" class="h-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/Pages/Layout.vue";
import StatCard from "@/Components/StatCard.vue";
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

Chart.defaults.font.family = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;


export default defineComponent({
  layout: Layout,

  components: { PersonIcon, StatCard },

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
              label: 'Dépenses',
              data: props.metadata.expensesAmountStats,
              backgroundColor: '#0ea5e9',
              tension: 0.1,
              order:1
            },
            {
              type: 'bar',
              label: 'Ventes',
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
            scales:{
              /*x:{
                grid:{
                  display: true
                }
              },*/
              y:{
                
              }
            },
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
              borderColor: '#ea580c',
              backgroundColor: '#ea580c',
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
<!-- 
<style>
  body, html{
    background-color: gainsboro;
  }
</style> -->