/**
 * File:    Frontend application script
 * Author:  Ben J. Smyth
 * Date:    May 7, 2023
 */

// Third-party imports
import axios from 'axios';
import { createApp } from 'vue';
import type { InjectionKey } from 'vue';

// Custom imports
import App from './App.vue';
import router from './router';
import { aboutKey, projectKey, tagKey } from './keys';

// Addresses
const HOST: string = 'http://localhost';
const PORT: string = '8000';

// Application & router
const app: any = createApp(App).use(router);

// GET abouts
await axios.get(`${HOST}:${PORT}/abouts`)
  .then(response => { const aboutKey = Symbol() as InjectionKey<Array<any>>;
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
  .then(response => { const projectKey = Symbol() as InjectionKey<Array<any>>;
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
  .then(response => { const tagKey = Symbol() as InjectionKey<Array<any>>;
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
