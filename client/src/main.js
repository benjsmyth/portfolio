import axios from 'axios';
import { createApp } from 'vue';

// Custom imports
import App from './App.vue';
import router from './router';

// Addresses
const HOST = 'http://localhost';
const PORT = '8000';

const app = createApp(App);  // Application
app.use(router);  // Router installation

await axios.get(`${HOST}:${PORT}/abouts`).then(response => {
  app.provide('abouts', response.data);
}).catch(error => {
  console.log(`Error fetching abouts => ${error}`);
});

await axios.get(`${HOST}:${PORT}/projects`).then(response => {
  app.provide('projects', response.data);
}).catch(error => {
  console.log(`Error fetching projects => ${error}`);
});

await axios.get(`${HOST}:${PORT}/tags`).then(response => {
  app.provide('tags', response.data);
}).catch(error => {
  console.log(`Error fetching tags => ${error}`);
});

// Mount
app.mount('#app');
