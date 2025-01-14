<script setup lang="ts">
/**
 * KPI card component to display a key performance indicator with a title, value, and icon.
 *
 * @component KpiCard
 * @prop {string} title - The title of the KPI
 * @prop {number} value - The value of the KPI
 * @prop {boolean} isPositive - Whether the KPI is positive or negative
 * @example
 * <KpiCard title="Revenue" value="1000" isPositive />
 */

import MetricsIcon from '@/components/MetricsIcon.vue'
import { formatDollar } from '@/utils'

interface KpiCardProps {
  title: string;
  value: number;
  isPositive: boolean;
}

const props: KpiCardProps = defineProps<KpiCardProps>()
</script>

<template>
  <v-card class="pa-2" variant="tonal">
    <v-card-title>
      <MetricsIcon :is-positive size="24px" />
      {{ formatDollar(props.value) }}
    </v-card-title>
    <v-card-subtitle>{{ props.title }}</v-card-subtitle>
  </v-card>
</template>

<style scoped>
</style>
