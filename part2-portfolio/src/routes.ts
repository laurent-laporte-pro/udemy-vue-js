import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import PortfolioMain from './pages/PortfolioMain.vue'
import ContactPage from './pages/ContactPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

/**
 * Définitions des routes de notre application
 */
export const routes = [
  { path: '/', component: PortfolioMain },
  { path: '/contact', component: ContactPage },
  { path: '/contact/:id', component: ContactPage, beforeEnter: validateContactId },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
]

function validateContactId (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
): void {
  const recipientId: string = to.params.id as string
  if (['me', 'webmaster', 'sav'].includes(recipientId)) {
    next()
  } else {
    next({ name: 'NotFound' })
  }
}
