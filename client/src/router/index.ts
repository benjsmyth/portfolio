import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Tags from '../views/Tags.vue';
import Contact from '../views/Contact.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Routes go here.
const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes: [{

  path: '/',
  name: 'home',
  component: Home,
  meta: { desc: "my portfolio" }}, {

  path: '/about',
  name: 'about',
  component: About,
  meta: { desc: "about me" }}, {

  path: '/tags',
  name: 'tags',
  component: Tags,
  meta: { desc: "related topics" }}, {

  path: '/projects',
  name: 'projects',
  component: Projects,
  meta: { desc: "my work" }}, {

  path: '/contact',
  name: 'contact',
  component: Contact,
  meta: { desc: "get in touch" }}

]});

export default router;
