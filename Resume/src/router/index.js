import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import AboutmeView from '../views/AboutmeView.vue'
import EducatuionView from '../views/EducationView.vue'
import SkillsView from '../views/SkillsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutmeView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/education',
      name: 'education',
      component: EducatuionView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    }
  ]
})

export default router
