<template>
  <v-app>

    <v-app-bar class="px-3" color="grey-darken-4" flat density="compact">
      <v-spacer></v-spacer>
      <v-tabs v-model="selectedTab" centered color="grey-darken-1">
        <v-tab v-for="link in links" :key="link.name" :value="link.name" class="text-center">
          {{ link.label }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>

          <!-- left sidebar -->
          <v-col cols="12" sm="2">
            <aside>foo</aside>
          </v-col>

          <!-- main content -->
          <v-col cols="12" sm="8">
            <v-sheet
              v-if="selectedTab === 'dashboard'"
              min-height="70vh"
              rounded="lg"
              class="pa-4"
            >
              <h1>My Dashboard</h1>
            </v-sheet>
            <v-sheet
              v-else-if="selectedTab === 'about'"
              min-height="70vh"
              rounded="1g"
              class="pa-4"
            >
              <h1>About this site</h1>
            </v-sheet>
            <v-sheet
              v-else
              min-height="70vh"
              rounded="lg"
              class="pa-4"
            >
              <p class="text-error">Sheet '{{ selectedTab }}' not implemented yet</p>
            </v-sheet>
          </v-col>

          <!-- right sidebar -->
          <v-col cols="12" sm="2">
            <aside>Bar</aside>
          </v-col>

        </v-row>
      </v-container>
    </v-main>

  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedTab = ref('one')
const links = [
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'about', label: 'About' },
]
</script>
