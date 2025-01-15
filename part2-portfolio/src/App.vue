<script lang="ts" setup>
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <header>
    <PageHeader />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  line-height: 60px;
}

main {
  width: 100%;
}

</style>
