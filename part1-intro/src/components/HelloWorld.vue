<script setup lang="ts">
import { ref } from 'vue'
import SubComp from './SubComp.vue'

const title = ref<string>('Hello World!')
</script>

<template>
  <h1>{{ title }}</h1>
  <SubComp>
    <p>Contenu de la balise slot</p>
  </SubComp>
  <SubComp />
  <SubComp>
    <u>Exemple</u>
  </SubComp>
</template>

<style scoped>
h1 {
  color: darkred;
}
</style>