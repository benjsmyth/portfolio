import axios from 'axios';
import { createApp } from 'vue';

// Custom imports
import App from './App.vue';
import router from './router';

// Address
const HOST = 'http://localhost';
const PORT = '8000';

// Application
const app = createApp(App);

// Installations
app.use(router);

// Prefetches
// Briefs
await axios.get(
  `${HOST}:${PORT}/briefs/`
).then(response => {
  app.provide('briefs', response.data);
}).catch(error => {
  console.log(`Error fetching briefs => ${error}`);
});

// Projects
await axios.get(
  `${HOST}:${PORT}/projects/`
).then(response => {
  app.provide('projects', response.data);
}).catch(error => {
  console.log(`Error fetching projects => ${error}`);
});

// Tags
await axios.get(
  `${HOST}:${PORT}/tags/`
).then(response => {
  app.provide('tags', response.data);
}).catch(error => {
  console.log(`Error fetching tags => ${error}`);
});

// Mount
app.mount('#app');
