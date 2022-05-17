import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

// Create application
const app = createApp(App)

// Provide JSON from Django ORM
axios.get('http://localhost:8000/projects/').then(response => {
    app.provide('projects', response.data)
})

// Install router as middleware
app.use(router)

// Mount application
app.mount('#app')
