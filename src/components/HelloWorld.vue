<script setup lang="ts">
import { ref } from 'vue'
import SubComp from './SubComp.vue'

const title = ref<string>('Hello World!')
const firstName = ref<string>('Laurent')
const childMsg = ref<string>('-- no message yet --')

const handleSubComponentEvent = (msg: string) => {
  childMsg.value = msg
}
</script>

<template>
  <h1>{{ title }}</h1>
  <h3>{{ childMsg }}</h3>
  <SubComp @sub-component-event="handleSubComponentEvent" title="Bonjour"/>
  <SubComp @sub-component-event="handleSubComponentEvent" :title="firstName" color="darkGreen"/>
</template>

<style scoped>
h1 {
  color: darkred;
}
</style>