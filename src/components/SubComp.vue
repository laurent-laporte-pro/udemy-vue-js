<script setup lang="ts">

const props = defineProps({
  title: String,
  color: {
    type: String,
    default: 'rebeccapurple',
    required: false
  }
})
</script>

<template>
  <h2 :style="{color: color}">{{ props.title }}</h2>
</template>
