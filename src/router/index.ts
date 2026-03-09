import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
   {
  path: '/trabajos',
  name: 'trabajos-padre',
  component: () => import('../views/ProjectGeneral.vue'),
  children: [
    {
      // Esta es la ruta anidada: /trabajos/galeria
      path: 'galeria', 
      name: 'trabajos',
      component: () => import('../views/ProjectGeneral.vue')
    }
  ]
},
    {
      path: '/proyecto/:id',
      name: 'proyecto',
      component: () => import('../views/ProjectDetail.vue')
    },
    {
      path: '/sobre-mi',
      name: 'sobre-mi',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router