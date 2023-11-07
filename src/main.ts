import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import App from './App.vue'
import './styles.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

if(window.location.hostname != "cheeyong.vercel.app") window.location.href = "https://cheeyong.vercel.app/"+window.location.pathname.slice(6);

const app = createApp(App)
app.use(router)
app.mount('#app')
