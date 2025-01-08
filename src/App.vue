<script setup lang="ts">
import { computed, ref } from 'vue'

const title = ref<string>('Bienvenue sur Vue 3')
const firstName = ref('Laurent')
const lastName = ref('Laporte')

const fullName = computed(() => `${firstName.value} ${lastName.value.toUpperCase()}`)

const price = ref(123)
const discountPercent = ref(10)
const finalPrice = computed(() => price.value * (1 - discountPercent.value / 100))

const fullName2 = computed({
  get: () => {
    if (lastName.value) {
      return `${firstName.value} ${lastName.value.toUpperCase()}`
    } else {
      return firstName.value
    }
  },
  set: (value: string) => {
    if (!value.includes(' ')) {
      firstName.value = value
      lastName.value = ''
    } else {
      const parts = value.split(' ')
      firstName.value = parts[0]
      lastName.value = parts[1].charAt(0).toUpperCase() + parts[1].slice(1).toLowerCase()
    }
  }
})

</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p><strong>Nom :</strong> {{ lastName }}, <strong>Prénom :</strong> {{ firstName }}</p>
    <p>{{ fullName }}</p>
    <p>{{ fullName2 }}</p>
    <p><label for="name">Modifier le nom :</label> <input name="name" v-model="fullName2" placeholder="Prénom Nom"></p>
    <table>
      <tr>
        <th>Prix</th>
        <th>Réduction</th>
        <th>Prix final</th>
      </tr>
      <tr>
        <td class="currency">{{ price }}</td>
        <td class="percent">{{ discountPercent }}</td>
        <td class="currency">{{ finalPrice }}</td>
      </tr>
    </table>
  </main>
</template>

<style scoped>
.currency {
  text-align: right;
}

.currency::after {
  content: ' €';
}

.percent {
  text-align: right;
}

.percent::after {
  content: ' %';
}
</style>
