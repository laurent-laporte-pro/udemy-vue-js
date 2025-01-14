<script setup lang="ts">
import type { GroupedMonetizationData } from '@/types/monetization'
import { formatDollar, formatPercent, getBestCountryRevenue } from '@/utils'
import BarChart from '@/components/BarChart.vue'

interface ExpandedRowProps {
  item: GroupedMonetizationData;
  columnCount: number;
}

const props: ExpandedRowProps = defineProps<ExpandedRowProps>()
</script>

<template>
  <tr>
    <td
      :colspan="props.columnCount"
      style="padding: 15px"
    >
      <v-row>
        <v-col>The country which performed the best is {{ getBestCountryRevenue(item) }}</v-col>
      </v-row>
      <v-row>
        <v-col>
          <BarChart
            class="d-flex mx-auto my-0"
            :data="[
              item.totalRevenuesAU,
              item.totalRevenuesCN,
              item.totalRevenuesFR,
              item.totalRevenuesJP,
              item.totalRevenuesUK,
              item.totalRevenuesUS,
            ]"
            :labels="['AU', 'CN', 'FR', 'JP', 'UK', 'US']"
            :title="`Total revenues by country for ${item.app}`"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          Total ads views: <b>{{ item.views }}</b><br>
          Total ads conversion: <b>{{ item.conversions }}</b><br>
          Conversions percent: <b>{{ item.views ? formatPercent(item.conversions / item.views) : '' }}</b><br>
          Total revenues: <b>{{ formatDollar(item.totalRevenues) }}</b>
        </v-col>
        <v-col>
          Total rewarded revenues: <b>{{ formatDollar(item.rewarded) }}</b><br>
          Total banner revenues: <b>{{ formatDollar(item.banner) }}</b><br>
          Total fullscreen revenues: <b>{{ formatDollar(item.fullscreen) }}</b><br>
          Total video revenues: <b>{{ formatDollar(item.video) }}</b>
        </v-col>
      </v-row>
    </td>
  </tr>
</template>

<style scoped>
</style>
