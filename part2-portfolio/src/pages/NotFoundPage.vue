<script setup lang="ts">
</script>

<template>
  <div class="not-found">
    <h1 class="text-highlight-2">404 - Page non trouvée</h1>
    <p class="default-text">Désolé, la page que vous recherchez n'existe pas.</p>
    <router-link to="/" class="home-link">Retourner à l'accueil</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

.home-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-custom-text-1);
  color: white;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  text-decoration: none;
}
.home-link:hover {
  background-color: var(--vt-c-custom-text-2);
}

</style>