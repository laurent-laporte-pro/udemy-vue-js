<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const title = ref<string>('Bienvenue sur Vue 3')

</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <HelloWorld />
  </main>
</template>

<style scoped>
</style>
