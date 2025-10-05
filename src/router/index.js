import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrudView from '../views/CrudView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/crud/:id?', // Rota com parâmetro opcional para edição
      name: 'crud',
      component: CrudView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router