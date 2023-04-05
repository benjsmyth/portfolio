import { createApp } from 'vue';
import axios from 'axios';

// Application imports
import App from './App.vue';
import router from './router';

// Create application
const app = createApp(App).use(router);

// Provide briefs
axios.get('http://localhost:8000/briefs/').then(response => {
    app.provide('briefs', response.data);
})
.catch(error => {console.log("error fetching briefs\n", error)});

// Provide projects
axios.get('http://localhost:8000/projects/').then(response => {
    app.provide('projects', response.data);
})
.catch(error => {console.log("error fetching projects\n", error)});

// Provide tags
axios.get('http://localhost:8000/tags/').then(response => {
    console.log(response.data)
    app.provide('tags', response.data);
})
.catch(error => {console.log("error fetching tags\n", error)});

// Mount application
app.mount('#app');
