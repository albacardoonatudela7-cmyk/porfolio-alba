import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue' // Mantengo tu import actual

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/proyecto/:id',
      name: 'project-detail',
      component: () => import('@/views/ProjectDetail.vue')
    },
    {
      path: '/sobre-mi',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      // AQUÍ ESTÁN LAS RUTAS ANIDADAS (Children)
      children: [
        {
          path: 'estudios',
          name: 'about-education',
          component: () => import('@/components/AboutEducation.vue')
        },
        {
          path: 'habilidades',
          name: 'about-skills',
          component: () => import('@/components/AboutSkills.vue')
        }
      ]
    },
    {
      path: '/contacto',
      name: 'contact',         
      component: () => import('@/views/ContactView.vue')
    },
    // Ruta comodín por si escriben algo mal
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router