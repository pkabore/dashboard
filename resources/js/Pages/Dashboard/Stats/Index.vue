<template>
  <div class="w-full m-3">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">
      Statistiques
    </h2>
    <div class="bg-white rounded mt-4">
      <Responsive class="w-full p-3">
        <template #main="{width}">
          <Chart
            :size="{ width, height: 400 }"
            :data="data"
            :margin="margin"
            :direction="direction">

            <template #layers>
              <Grid strokeDasharray="2,2" />
              <Line :dataKeys="['name', 'pl']" class="transition ease-in-out duration-7000" />
            </template>

          </Chart>
        </template>
      </Responsive>
    </div>
  </div>
</template>

<script>
import Dashboard from '../../Dashboard.vue';
import { defineComponent, ref } from 'vue'
import { Responsive, Chart, Grid, Line } from 'vue3-charts'

export default defineComponent({
  layout: Dashboard,
  name: 'LineChart',
  components: { Responsive, Chart, Grid, Line },
  setup() {
    const plByMonth = [
  { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
  { name: 'Fev', pl: 2000, avg: 900, inc: 400 },
  { name: 'Mar', pl: 400, avg: 400, inc: 500 },
  { name: 'Avr', pl: 3100, avg: 1300, inc: 700 },
  { name: 'Mai', pl: 200, avg: 100, inc: 200 },
  { name: 'Jun', pl: 600, avg: 400, inc: 300 },
  { name: 'Jul', pl: 500, avg: 18, inc: 100 },
  { name: 'Aou', pl: 700, avg: 90, inc: 100 },
  { name: 'Sep', pl: 457, avg: 73, inc: 200 },
  { name: 'Oct', pl: 457, avg: 73, inc: 200 },
  { name: 'Nov', pl: 875, avg: 552, inc: 270 },
  { name: 'Dec', pl: 257, avg: 703, inc: 174 },
];
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })

    return { data, direction, margin }
  }
})
</script>

<style scoped>

</style>