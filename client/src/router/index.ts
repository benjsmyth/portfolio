import { createRouter, createWebHistory } from 'vue-router'

import Aside from '../views/Tags.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Tags from '../views/Tags.vue'
import Contact from '../views/Contact.vue'

// Routes go here.
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes: [{
  
  path: '/',
  name: 'Home',
  component: Home,
  meta: { desc: "Navigate my portfolio" }}, {
    
  path: '/about',
  name: 'About',
  component: About,
  meta: { desc: "Read about me" }}, {
    
  path: '/tags',
  name: 'Tags',
  component: Tags,
  meta: { desc: "Browse relevant topics" }}, {
    
  path: '/projects',
  name: 'Projects',
  component: Projects,
  meta: { desc: "Discover my work" }}, {
    
  path: '/contact',
  name: 'Contact',
  component: Contact,
  meta: { desc: "Get in touch" }}
                                                                                           
]})

export default router
