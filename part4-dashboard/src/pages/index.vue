<template>
  <v-app>
    <v-app-bar
      class="px-3"
      color="grey-darken-4"
      density="compact"
      flat
    >
      <v-spacer />
      <v-tabs
        v-model="selectedTab"
        color="grey-darken-1"
        iaaaal
      >
        <v-tab
          v-for="link in links"
          :key="link.name"
          :value="link.name"
          class="text-center"
        >
          {{ link.label }}
        </v-tab>
      </v-tabs>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <!-- left sidebar -->
          <v-col
            cols="12"
            sm="2"
          >
            <aside>foo</aside>
          </v-col>

          <!-- main content -->
          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              v-if="selectedTab === 'dashboard'"
              class="pa-4"
              min-height="70vh"
              rounded="lg"
            >
              <h1>My Dashboard</h1>
              <v-progress-linear
                v-if="dashboardLoading"
                color="primary"
                indeterminate
              />
              <p v-if="dashboardLoading">
                Loading dashboard…
              </p>
              <v-data-table
                v-else
                v-model:expanded="expandedApps"
                :headers="monetizationService.headers"
                :items="groupedData"
                item-key="app"
                item-value="app"
                show-expand
              >
                <template v-slot:header.app="{ column }">{{ column.title?.toUpperCase() || '' }}</template>
                <template v-slot:item.totalRevenuesAU="{ item }">{{ formatDollar(item.totalRevenuesAU) }}</template>
                <template v-slot:item.totalRevenuesCN="{ item }">{{ formatDollar(item.totalRevenuesCN) }}</template>
                <template v-slot:item.totalRevenuesFR="{ item }">{{ formatDollar(item.totalRevenuesFR) }}</template>
                <template v-slot:item.totalRevenuesJP="{ item }">{{ formatDollar(item.totalRevenuesJP) }}</template>
                <template v-slot:item.totalRevenuesUK="{ item }">{{ formatDollar(item.totalRevenuesUK) }}</template>
                <template v-slot:item.totalRevenuesUS="{ item }">{{ formatDollar(item.totalRevenuesUS) }}</template>
                <template v-slot:item.totalRevenues="{ item }">{{ formatDollar(item.totalRevenues) }}</template>
                <template v-slot:expanded-row="{ columns, item }">
                  <tr>
                    <td :colspan="columns.length" style="padding: 15px">
                      <v-row>
                        <v-col>The country which performed the best is {{ getBestCountryRevenue(item) }}</v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          Total ads views: <b>{{ item.views }}</b><br />
                          Total ads conversion: <b>{{ item.conversions }}</b><br />
                          Conversions percent: <b>{{
                            item.views ? formatPercent(item.conversions / item.views) : ''
                          }}</b><br />
                          Total revenues: <b>{{ formatDollar(item.totalRevenues) }}</b>
                        </v-col>
                        <v-col>
                          Total rewarded revenues: <b>{{ formatDollar(item.rewarded) }}</b><br />
                          Total banner revenues: <b>{{ formatDollar(item.banner) }}</b><br />
                          Total fullscreen revenues: <b>{{ formatDollar(item.fullscreen) }}</b><br />
                          Total video revenues: <b>{{ formatDollar(item.video) }}</b>
                        </v-col>
                      </v-row>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-sheet>
            <v-sheet
              v-else-if="selectedTab === 'about'"
              class="pa-4"
              min-height="70vh"
              rounded="1g"
            >
              <h1>About this site</h1>
            </v-sheet>
            <v-sheet
              v-else
              class="pa-4"
              min-height="70vh"
              rounded="lg"
            >
              <p class="text-error">
                Sheet '{{ selectedTab }}' not implemented yet
              </p>
            </v-sheet>
          </v-col>

          <!-- right sidebar -->
          <v-col
            cols="12"
            sm="2"
          >
            <aside>Bar</aside>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { Country, type GroupedMonetizationData, type MonetizationData } from '@/types/monetization'
import { MonetizationService } from '@/services/monetizationService'

// Gestion des onglets de navigation
const selectedTab = ref('one')
const links = [
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'about', label: 'About' },
]

// Gestion de la table de MonetizationData
const monetizationData = ref<MonetizationData[]>([])
const dashboardLoading = ref<boolean>(false)
const monetizationService = new MonetizationService()

onMounted(async () => {
  try {
    dashboardLoading.value = true
    monetizationData.value = await monetizationService.getMonetizationData()
  } finally {
    dashboardLoading.value = false
  }
})

// Grouped data by app and platform
const groupedData = ref<GroupedMonetizationData[]>([])

watch(monetizationData, (newData) => {
  groupedData.value = monetizationService.getDataByAppPlatform(newData)
})

// Set of expanded apps in the data table
const expandedApps = ref<string[]>([])

const formatDollar = (value: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

const formatPercent = (x: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(x)
}

const getBestCountryRevenue = (item: GroupedMonetizationData): string => {
  const countries = Object.values(Country)
  const revenues = countries.map((country) => item[`totalRevenues${country}`])
  const bestCountryIndex = revenues.indexOf(Math.max(...revenues))
  const bestCountry = countries[bestCountryIndex]
  const bestRevenue = revenues[bestCountryIndex]
  return `${bestCountry} with a total of ${formatDollar(bestRevenue)}`
}

</script>
