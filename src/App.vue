<script setup lang="ts">
import { onMounted, ref } from 'vue'

const title = ref<string>('Bienvenue sur Vue 3')
const todoTitle = ref<string>('')

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    todoTitle.value = (await response.json()).title
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ todoTitle }}</p>
  </main>
</template>

<style scoped>
</style>
