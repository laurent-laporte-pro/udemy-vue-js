import PortfolioMain from './pages/PortfolioMain.vue'
import ContactPage from './pages/ContactPage.vue'

/**
 * Définitions des routes de notre application
 */
export const routes = [
  { path: '/', component: PortfolioMain },
  { path: '/contact', component: ContactPage },
]