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
      <div class="family-mono grid grid-cols-2 md:grid-cols-4 gap-2">
        <StatCard title="Article" :value="metadata.articlesNumber" />
        <StatCard title="Sorties" :value="parseFloat(metadata.expensesAmount.toFixed(2))" />
        <StatCard title="Factures Total" :value="metadata.billsNumber" />
        <StatCard title="Clients" :value="metadata.clientsNumber" />
      </div>
      <div class="family-mono grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
        <StatCard title="Rayons" :value="metadata.categoriesNumber" />
        <StatCard title="Entrées" :value="parseFloat(metadata.income.toFixed(2))" />
        <StatCard title="Factures non payées" :value="metadata.unpaidBillsNumber" />
        <StatCard title="Devis" :value="metadata.quotesNumber" />
      </div>
      <div class="mt-4 w-full md:flex justify-between md:space-x-2">
        <div class="chart-container bg-white relative border p-2 rounded-md mt-2 shadow-xl md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="balance"></canvas>
        </div>
        <div class="chart-container bg-white relative border p-2 rounded-md mt-4 shadow-xl md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="clients"></canvas>
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
    const summarize = (min) => {
      min = min || 1e3;
      // Alter numbers larger than 1k
      if (this >= min) {
        let units = ["k", "M", "B", "T"];

      let order = Math.floor(Math.log(this) / Math.log(1000));

      let unitname = units[(order - 1)];
      let num = Math.floor(this / 1000 ** order);

      // output number remainder + unitname
      return num + unitname
    }

  // return formatted original number
  return this.toLocaleString()
}
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
<!-- 
<style>
  body, html{
    background-color: gainsboro;
  }
</style> -->