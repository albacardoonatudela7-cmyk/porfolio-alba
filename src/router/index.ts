import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' 

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      children: [
        { path: '', redirect: '/sobre-mi/estudios' }, 
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
    }
  ]
})

export default router