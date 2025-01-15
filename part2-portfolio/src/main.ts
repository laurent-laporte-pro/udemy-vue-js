import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { routes } from './routes.ts'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
