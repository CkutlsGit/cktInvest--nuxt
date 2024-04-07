<template>
  <div class="chart-content">
    <LineChart style="height: 12rem; width: 12rem" v-bind="lineChartProps" :options="options"></LineChart>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import {LineChart, useLineChart} from "vue-chart-3";
Chart.register(...registerables)

export default {

  components: { LineChart },
  setup(props) {
    const data = reactive([120, 100, 40, 0, 80, 160, 120])
    const options = reactive({
      plugins: {
        legend: {
          display: false
        }
      }
    })

    const chartData = computed(() => ({
      labels: [],
      datasets: [{
        data: data,
        backgroundColor: '#8021F9',
        borderColor: '#9560EB'
      }],
    }))

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData
    })

    return { options, lineChartProps, lineChartRef }
  }
}
</script>

<style scoped>

</style>