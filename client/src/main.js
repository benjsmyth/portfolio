import { createApp } from 'vue';
import axios from 'axios';

// Application imports
import App from './App.vue';
import router from './router';

// Create application
const app = createApp(App).use(router);

// Provide briefs
axios
  .get('http://localhost:8000/briefs/')
  .then(response => {
    app.provide('briefs', response.data);
  })
  .catch(error => {
    console.log(`Error fetching briefs => ${error}`);
  });

// Provide projects
axios
  .get('http://localhost:8000/projects/')
  .then(response => {
    app.provide('projects', response.data);
  })
  .catch(error => {
    console.log(`Error fetching projects => ${error}`);
  });

// Provide tags
axios
  .get('http://localhost:8000/tags/')
  .then(response => {
    app.provide('tags', response.data);
  })
  .catch(error => {
    console.log(`Error fetching tags => ${error}`);
  });

// Mount application
app.mount('#app');
