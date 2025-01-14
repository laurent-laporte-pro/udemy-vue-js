<script setup lang="ts">
import { ref, watch } from 'vue'

const searchValue = ref<string>('')
const emit = defineEmits(['update:searchValue'])

watch(searchValue, (newValue) => {
  emit('update:searchValue', newValue)
})
</script>

<template>
  <v-sheet rounded="lg" min-height="268px" class="pa-3">
    <v-list-item-title class="text-h5 mb-1 mt-2">
      <v-icon>mdi-filter</v-icon>
      <span>Filter</span>
    </v-list-item-title>
    <v-text-field v-model="searchValue" label="Search" density="comfortable"></v-text-field>
  </v-sheet>
</template>

