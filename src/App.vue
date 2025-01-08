<script setup lang="ts">
import { ref } from 'vue'

let keyCount = 0

const title = ref<string>('Bienvenue sur Vue 3')

type Item = { key: number, name: string }

const items = ref<Item[]>([])

const itemName = ref<string>('')

const addItem = (name: string) => {
  if (!name) return
  const newItem: Item = { 'key': ++keyCount, 'name': name }
  items.value.push(newItem)
}

const removeItem = (key: number) => {
  items.value = items.value.filter(item => item.key !== key)
}

const handleSubmit = (event: Event) => {
  event.preventDefault()
  addItem(itemName.value)
  itemName.value = ''
}
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p v-if="items.length === 0"><em>Aucun élément</em></p>
    <ul v-else>
      <li v-for="item in items" :key="item.key">{{ item.name }}
        <button type="button" @click="removeItem(item.key)">🗑️</button>
      </li>
    </ul>
    <form name="addItem" @submit="handleSubmit">
      <label for="itemName" title="Nom de l’élément à ajouter">Nom :</label> <input
        v-model="itemName" placeholder="Nom" name="itemName" />
      <button type="submit">Ajouter</button>
    </form>
  </main>
</template>

<style scoped>
</style>
