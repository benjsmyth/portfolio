import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

// Create application
const app = createApp(App).use(router)

// Provide JSON from Django ORM
axios.get('http://localhost:8000/briefs/').then(response => {
    app.provide('briefs', response.data)
})
.catch(error => {console.log("error fetching briefs\n", error)})

axios.get('http://localhost:8000/projects/').then(response => {
    app.provide('projects', response.data)
})
.catch(error => {console.log("error fetching projects\n", error)})

axios.get('http://localhost:8000/tags/').then(response => {
    console.log(response.data)
    app.provide('tags', response.data)
})
.catch(error => {console.log("error fetching tags\n", error)})

// Mount application
app.mount('#app')
