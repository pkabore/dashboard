<template>
  <div class="w-full p-1 mx-auto">
    <div class="mt-4 px-2">
      <h2 class="m-0 py-2 text-lg text-gray-600 flex items-center justify-end">
        @{{$page.props.auth.user.name}}
      </h2>
    </div>
    <form method="post" @submit.prevent="update" class="mt-4 px-2 sm:flex items-center justify-end sm:space-x-2">
      <div class="relative">
        <button type="button" @focus="showMonths=true" @blur="showMonths=false" class="btn border bg-white border border-slate-300 text-slate-600 text-center text-sm">{{form.month || new Date().getMonth() + 1}}
        </button>
        <ul v-show="showMonths" class="mt-2 w-44 py-4 absolute z-10 bg-white rounded-2xl shadow-2xl">
          <li v-for="(month, key) in months" class="hover:text-blue-900 hover:bg-blue-100
            text-gray-900
            cursor-default
            select-none
            relative
            py-2
            pl-2 text-sm" @mousedown="form.month=key+1; showMonths=false" :key="key">{{month}}</li>
        </ul>
      </div>
      <div class="relative">
        <button type="button" @focus="showYears=true" @blur="showYears=false" class="btn border bg-white border border-slate-300 text-slate-600 text-center text-sm">{{form.year || new Date().getFullYear()}}
        </button>
        <ul v-show="showYears" class="mt-2 w-44 py-4 absolute z-10 bg-white rounded-2xl shadow-2xl">
          <li v-for="(year, key) in years" class="hover:text-blue-900 hover:bg-blue-100
            text-gray-900
            cursor-default
            select-none
            relative
            py-2
            pl-2 text-sm" @mousedown="form.year=key+1; showYears=false" :key="key">{{year}}</li>
        </ul>
      </div>
      <button type="button" @click="form.month = ''; form.year=''" class="btn bg-slate-500 text-white hover:bg-slate-600">Reset</button>
      <button type="submit" class="btn bg-blue-500 text-white hover:bg-blue-600">Filtrer</button>
    </form>
    <div class="mt-4 px-2">
      <div class="divide-y bg-white rounded-3xl p-4">
        <div class="divide-x grid grid-cols-4 gap-1 md:gap-2">
          <StatCard title="Articles" :value="data.articlesNumber" />
          <StatCard title="Dépenses" :value="parseFloat(data.expensesAmount.toFixed(2))" />
          <StatCard title="Factures Tot" :value="data.billsNumber" />
          <StatCard title="Clients" :value="data.clientsNumber" />
        </div>
        <div class="divide-x grid grid-cols-4 gap-1 md:gap-2">
          <StatCard title="Rayons" :value="data.categoriesNumber" />
          <StatCard title="Ventes" :value="parseFloat(data.income.toFixed(2))" />
          <StatCard title="Factures NP" :value="data.unpaidBillsNumber" />
          <StatCard title="Devis" :value="data.quotesNumber" />
        </div>
      </div>
      <div class="mt-6 w-full md:flex justify-between md:space-x-2">
        <div style="min-height: 300px;" class="chart-container bg-white relative border p-2 md:p-4 rounded-2xl mt-2 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
          <canvas id="balance" class="h-20" />
        </div>
        <div style="min-height: 300px;" class="chart-container bg-white relative border p-2 md:p-4 rounded-2xl mt-4 md:mt-0 w-full md:w-1/2 md:max-w-1/2">
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
import { ref, onMounted } from "vue";
import {useForm} from '@inertiajs/inertia-vue3';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  LineController,
  LinearScale,
  LogarithmicScale,
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
  LogarithmicScale,
  CategoryScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

Chart.defaults.font.family = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;


export default {
  layout: Layout,

  components: { PersonIcon, StatCard },

  props: { metadata: Object, month: Number, year: Number },

  setup(props) {

    const data = ref(props.metadata);
    const showMonths = ref(false);
    const showYears = ref(false);
    const form = useForm({
      month: parseInt(props.month) || new Date().getMonth() + 1,
      year: parseInt(props.year) || new Date().getFullYear()
    });

    onMounted(() => {
      const balance = new Chart('balance', {
        data : {
          datasets: [
            {
              type: 'bar',
              label: 'Dépenses',
              data: data.value.expensesAmountStats,
              backgroundColor: '#0ea5e9',
              tension: 0.1,
              order:1
            },
            {
              type: 'bar',
              label: 'Ventes',
              data: data.value.salesAmountStats,
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
            maintainAspectRatio: false,
          },
      });

      const clients = new Chart('clients', {
        data : {
          datasets: [
            {
              type: 'line',
              label: 'Clients',
              data: data.value.clientsNumberStats,
              borderColor: '#10b981',
              backgroundColor: '#10b981',
              cubicInterpolationMode: 'monotone'
            },
            {
              type: 'line',
              label: 'Devis',
              data: data.value.quotesNumberStats,
              borderColor: '#ea580c',
              backgroundColor: '#ea580c',
              cubicInterpolationMode: 'monotone'
            }
          ],
        },
        options: {
            interaction: {
              intersect: false,
              mode: 'index',
            },
            maintainAspectRatio: false,
          },
      });
    });

    const update = () => {
      form
      .get(route('home'), {
        only: ['metadata', 'year', 'month'],
        preserveState: false,
        onFinish: () => {
          data.value = props.metadata;
        }
    });
  };

  const years = [];
  const year = new Date().getFullYear();

  for (let i = year; i >= 2022; i--)
    years.push(i);

  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    return {
      data,
      form,
      update,
      years,
      months,
      showMonths,
      showYears
    };
  },
};
</script>