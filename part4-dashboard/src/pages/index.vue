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
            <SearchForm @update:searchValue="updateSearchedValue" />
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
              <h1>Applications</h1>

              <!-- KPI overview -->
              <v-row>
                <v-col>
                  <KpiBlock title="Total Android Revenues"
                            :value="getTotalOsRevenues(Platform.Android)"
                            :is-positive="false" />
                </v-col>
                <v-col>
                  <KpiBlock title="Total iOS Revenues"
                            :value="getTotalOsRevenues(Platform.iOS)"
                            :is-positive="true" />
                </v-col>
                <v-col>
                  <KpiBlock title="Total Revenues"
                            :value="getTotalOsRevenues()"
                            :is-positive="true" />
                </v-col>
              </v-row>

              <v-divider class="my-4" />

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
                :search="searchedValue"
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
                  <ExpandedRow :item="item" :column-count="columns.length" />
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
            <ContactForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { type GroupedMonetizationData, type MonetizationData, Platform } from '@/types/monetization'
import { MonetizationService } from '@/services/monetizationService'
import { formatDollar } from '@/utils'
import ExpandedRow from '@/components/ExpandedRow.vue'
import KpiBlock from '@/components/KpiCard.vue'
import SearchForm from '@/components/SearchForm.vue'
import ContactForm from '@/components/ContactForm.vue'

// Gestion des onglets de navigation
const selectedTab = ref('one')
const links = [
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'about', label: 'About' },
]

// Gestion de la table de MonetizationData
const monetizationData = ref<MonetizationData[]>([])
const dashboardLoading = ref<boolean>(false)
const searchedValue = ref<string>('')
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

const getTotalOsRevenues = (platform?: Platform): number => {
  const reducer = (total: number, data: MonetizationData) => total + data.revenue
  return monetizationData.value
    .filter((data) => platform === undefined || data.platform === platform)
    .reduce(reducer, 0)
}

const updateSearchedValue = (value: string) => {
  searchedValue.value = value
}

</script>
