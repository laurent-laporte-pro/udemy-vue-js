<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const dialog = ref(false)

const submitForm = () => {
  if (name.value && email.value && message.value) {
    console.log('Form submitted:', {
      name: name.value,
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
</script>

<template>
  <v-sheet rounded="lg" min-height="268px" class="pa-3">
    <v-list-item-title class="text-h5 mb-1 mt-2">
      <v-icon>mdi-email</v-icon>
      <span>Contact Form</span>
    </v-list-item-title>
    <v-text-field label="Name" density="comfortable" v-model="name"></v-text-field>
    <v-text-field label="Email" density="comfortable" v-model="email"></v-text-field>
    <v-textarea label="Message" dense rows="5" v-model="message"></v-textarea>
    <v-btn color="primary" @click="submitForm">Submit</v-btn>
  </v-sheet>

  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title class="headline">Message Sent</v-card-title>
      <v-card-text>Your message to {{ email }} is sent</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>
