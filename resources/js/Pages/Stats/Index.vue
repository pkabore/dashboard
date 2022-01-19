<template>
  <div class="w-full p-1">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Analytics
    </h2>
    <div class="rounded mt-4">
      <div class="block w-full md:flex items-center justify-between">
        <canvas id="sales" class="bg-white rounded-md w-full md:w-1/2 md:max-w-1/2 md:mr-2"></canvas>
       <!--  <canvas id="customers" class="bg-white rounded-md w-full md:w-1/2 md:max-w-1/2 mt-2 md:mt-0"></canvas> -->
      </div>
      <div class="mt-2 block w-full md:flex items-center justify-between">
        <canvas id="bills" class="bg-white rounded-md w-full md:w-1/2 md:max-w-1/2 md:mr-2"></canvas>
        <canvas id="quotes" class="bg-white rounded-md w-full md:w-1/2 md:max-w-1/2 mt-2 md:mt-0"></canvas>
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

    const data = {};
    const direction = ref("horizontal");
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    onMounted(() => {
      const dashboard = new Chart('sales', {
        data : {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              type: 'bar',
              label: 'Ventes',
              data: [65, 59, 80, 81, 56, 55, 40, 10, 81, 56, 55, 40],
              backgroundColor: [
                '#2563eb',
                //'#7c3aed',
                //'#16a34a'
              ],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
              //barThickness: 30,
              order:2
            },
            {
              type: 'line',
              label: 'Dépenses',
              data: [0, 59, 10, 81, 56, 55, 40, 15.3, 81, 57, 55, 12],
              borderColor: '#7c3aed',
              fill: false,
              tension: 0,
              order:1
            },
          ]
        }
      });
    });

    return {};
  },
});
</script>