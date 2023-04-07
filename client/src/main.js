import App from './App.vue';
import axios from 'axios';
import router from './router';
import { createApp } from 'vue';

const app = createApp(App).use(router);

axios
  .get('http://localhost:8000/briefs/')
  .then(response => {
    app.provide('briefs', response.data);
  })
  .catch(error => {
    console.log(`Error fetching briefs => ${error}`);
  });
axios
  .get('http://localhost:8000/projects/')
  .then(response => {
    app.provide('projects', response.data);
  })
  .catch(error => {
    console.log(`Error fetching projects => ${error}`);
  });
axios
  .get('http://localhost:8000/tags/')
  .then(response => {
    app.provide('tags', response.data);
  })
  .catch(error => {
    console.log(`Error fetching tags => ${error}`);
  });

app.mount('#app');
