<script setup lang="ts">
import { ref, watch } from 'vue'

const title = ref<string>('Bienvenue sur Vue 3')

const question = ref<string>('')
const answer = ref<string>('Une question possède un point d’interrogation (?)')
const image = ref<string>('')
const loading = ref<boolean>(false)

type Result = {
  answer: string
  forced: boolean
  image: string
}

watch(question, async (newQuestion: string) => {
  if (newQuestion.includes('?')) {
    answer.value = 'Je réfléchis…'
    try {
      loading.value = true
      const res = await fetch('https://yesno.wtf/api')
      const obj: Result = await res.json()
      answer.value = obj.answer
      image.value = obj.image
    } catch (error) {
      answer.value = 'Désolé, je n’ai pas pu répondre à votre question.'
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p>
      <label for="question">Votre question : </label>
      <input name="question" v-model="question" placeholder="Posez une question">
    </p>
    <p>{{ answer }}</p>
    <p v-if="image"><img :src="image" alt="" /></p>
  </main>
</template>

<style scoped>
</style>
