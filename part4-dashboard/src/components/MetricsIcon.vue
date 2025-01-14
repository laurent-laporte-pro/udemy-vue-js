<script setup lang="ts">
/**
 * Icon component to display a green arrow-up when the metric is positive or
 * a red arrow-down when the metric is negative.
 *
 * @component MetricsIcon
 * @prop {boolean} isPositive - Whether the metric is positive or negative
 * @prop {string} size - The size of the icon
 * @example
 * <MetricsIcon isPositive size="24px" />
 * <MetricsIcon size="24px" />
 */

import greenArrow from '@/assets/circle_green_arrow-up.svg'
import redArrow from '@/assets/circle_red_arrow-down.svg'

interface MetricsIconProps {
  isPositive: boolean;
  size: string;
}

const props: MetricsIconProps = defineProps<MetricsIconProps>()
</script>

<template>
  <img v-if="props.isPositive"
       :src="greenArrow"
       :style="{ width: props.size, height: props.size, verticalAlign: 'middle' }"
       alt="Up arrow indicating a positive metric"
  >
  <img v-else
       :src="redArrow"
       :style="{ width: props.size, height: props.size, verticalAlign: 'middle' }"
       alt="Down arrow indicating a negative metric"
  >
</template>

<style scoped>
</style>
