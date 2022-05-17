import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        desc: "Navigate my portfolio"
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        desc: "Read about me"
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
      meta: {
        desc: "Discover my work"
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
      meta: {
        desc: "Get in touch"
      }
    }
  ]
})

export default router
