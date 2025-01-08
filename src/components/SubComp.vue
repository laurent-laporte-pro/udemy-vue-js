<script setup lang="ts">
import { ref } from 'vue'

const title = ref<string>('Hello from sub-component!')
</script>

<template>
  <h2>{{ title }}</h2>
</template>

<style scoped>
h2 {
  color: rebeccapurple;
}
</style>