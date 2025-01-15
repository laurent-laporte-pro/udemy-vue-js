<script setup lang="ts">
/**
 * This component displays a contact form.
 */
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Form fields
const email = ref<string>('')
const message = ref<string>('')

// Confirmation dialog
const dialog = ref<boolean>(false)

// Paramètres de la route
const route = useRoute()
const recipientId = route.params.id || 'me'

// recipients
const recipients = {
  me: 'laurent.laporte.pro@gmail.com',
  webmaster: 'webmaster@example.fr',
  sav: 'sav@example.fr',
}

const recipient = recipients[recipientId as keyof typeof recipients]

/**
 * Submit the form and show the confirmation dialog.
 */
const submitForm = (event: Event) => {
  event.preventDefault()
  if (email.value && message.value) {
    console.log('Form submitted:', {
      email: email.value,
      message: message.value,
    })
    // Show the dialog
    dialog.value = true
    // Here you can add the logic to send the form data to your server
    // For example, using fetch or axios to make an HTTP request
  } else {
    console.error('All fields are required')
  }
}

/**
 * Close the dialog and reset the form fields.
 */
const closeDialog = (event: Event) => {
  event.preventDefault()
  dialog.value = false
  email.value = ''
  message.value = ''
}
</script>

<template>
  <main>
    <h1 class="text-highlight-2">Prise de contact par email</h1>
    <form>
      <p><label for="email">De&nbsp;:</label> <input
          type="email"
          id="email"
          name="email"
          required
          v-model="email"
          placeholder="bernard.petit@example.fr" /></p>
      <p><label for="recipient">À&nbsp;:</label> <input
          type="text"
          id="recipient"
          name="recipient"
          readonly
          :value="recipient" /></p>
      <p><label for="message">Votre message&nbsp;:</label></p>
      <p><textarea
          id="message"
          name="message"
          required
          v-model="message"
          placeholder="Votre message..."></textarea></p>
      <p>
        <button type="submit" @click="submitForm">Envoyer</button>
      </p>
    </form>
    <footer>
      <nav>
        <router-link to="/" class="home-link">Retourner à l'accueil</router-link>
      </nav>
    </footer>
  </main>
  <section v-if="dialog" class="dialog">
    <h2>Message envoyé</h2>
    <p>Votre message à <b class="text-highlight-2">{{ email }}</b> a bien été envoyé.</p>
    <button @click="closeDialog">Fermer</button>
  </section>
</template>

<style scoped>
form {
  display: grid;
  gap: .5em;
  width: 50%;
}

#email {
  width: 20em;
}

#message {
  width: 100%;
  height: 10em;
}

button {
  padding: .5em 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: .3em;
}

button:hover {
  background-color: #0056b3;
}

.dialog {
  display: grid;
  gap: .5em;
  width: 50%;
  padding: 1em;
  border: 1px solid #007bff;
  border-radius: .3em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-background);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  gap: 1em;
  margin-top: 1em;
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