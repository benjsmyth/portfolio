import axios from 'axios';
import router from './router';
import App from './App.vue';
import { createApp } from 'vue';
import { aboutKey, projectKey, tagKey } from './keys';

// Address
const HOST: string = 'http://localhost';
const PORT: string = '8000';

// Application & router
const app: any = createApp(App).use(router);

// GET abouts
await axios.get(`${HOST}:${PORT}/abouts/`)
  .then(response => {
    app.provide(
      aboutKey, Object.values(response.data)
    );
  })
  .catch(error => {
    console.log(`
      Error fetching \`abouts\` => ${error}
    `);
  });

// GET projects
await axios.get(`${HOST}:${PORT}/projects/`)
  .then(response => {
    app.provide(
      projectKey, Object.values(response.data)
    );
  })
  .catch(error => {
    console.log(`
      Error fetching \`projects\` => ${error}
    `);
  });

// GET tags
await axios.get(`${HOST}:${PORT}/tags/`)
  .then(response => {
    app.provide(
      tagKey, Object.values(response.data)
    );
  })
  .catch(error => {
    console.log(`
      Error fetching \`tags\` => ${error}
    `);
  });

// Mount application
app.mount('#app');
