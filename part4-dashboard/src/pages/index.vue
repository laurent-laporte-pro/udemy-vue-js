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
              <pre v-else>{{ groupedData }}</pre>
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
import type { GroupedMonetizationData, MonetizationData } from '@/types/monetization'
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

const groupedData = ref<GroupedMonetizationData[]>([])

watch(monetizationData, (newData) => {
  groupedData.value = monetizationService.getDataByAppPlatform(newData)
})
</script>
