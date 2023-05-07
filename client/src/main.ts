/**
 * File:    Frontend application script
 * Author:  Ben J. Smyth
 * Date:    May 7, 2023
 */

// Third-party imports
import { createApp } from 'vue';
import axios from 'axios';

// Custom imports
import { aboutKey, projectKey, tagKey } from './keys';
import router from './router';
import App from './App.vue';

// Addresses
const HOST: string = 'http://localhost';
const PORT: string = '8000';

// Application & router
const app: any = createApp(App).use(router);

// GET abouts
await axios.get(`${HOST}:${PORT}/abouts`)
  .then(response => {
    app.provide(
      aboutKey, response.data
    );
  })
  .catch(error => {
    console.log(`
      Error fetching \`abouts\` => ${error}
    `);
  });
//
// GET projects
await axios.get(`${HOST}:${PORT}/projects`)
  .then(response => {
    app.provide(
      projectKey, response.data
    );
  })
  .catch(error => {
    console.log(`
      Error fetching \`projects\` => ${error}
    `);
  });
//
// GET tags
await axios.get(`${HOST}:${PORT}/tags`)
  .then(response => {
    app.provide(
      tagKey, response.data
    );
  })
  .catch(error => {
    console.log(`
      Error fetching \`tags\` => ${error}
    `);
  });

// Mount application
app.mount('#app');
