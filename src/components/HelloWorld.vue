<script setup lang="ts">
import { ref } from 'vue'
import SubComp from './SubComp.vue'

const title = ref<string>('Hello World!')
const firstName = ref<string>('Laurent')
</script>

<template>
  <h1>{{ title }}</h1>
  <SubComp title="Bonjour"/>
  <SubComp :title="firstName" color="darkGreen"/>
</template>

<style scoped>
h1 {
  color: darkred;
}
</style>