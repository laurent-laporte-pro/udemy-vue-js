<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

interface BarChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const props: BarChartProps = defineProps<BarChartProps>()
</script>

<template>
  <div class="bar-chart">
    <Bar
      :data="{
        labels: props.labels,
        datasets: [
          {
            label: props.title,
            backgroundColor: [
              '#77ceff',
              '#0079af',
              '#123e6b',
              '#97e0c4',
              '#a5c8ed',
              '#587aa3',
            ],
            data: props.data,
          },
        ],
      }"
      :options="{
        responsive: true,
        maintainAspectRatio: false
      }"
    />
  </div>
</template>

<style scoped>
.bar-chart {
  width: 500px;
}
</style>
