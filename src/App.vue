<script setup lang="ts">
import { ref, watch } from 'vue'

const title = ref<string>('Bienvenue sur Vue 3')

const x = ref<number>(0)
const debug = ref<string>('')
const locked = ref<boolean>(false)

// Utilisation de watch pour observer une variable
watch(x, (newX, oldX) => {
  debug.value = `x = ${newX} (ancienne valeur : ${oldX})`
  locked.value = newX > 5;
})


</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ debug }}</p>
    <input type="number" v-model="x" :disabled="locked" />
  </main>
</template>

<style scoped>
</style>
