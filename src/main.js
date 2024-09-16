import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory, } from 'vue-router'

import mainPage from './pages/mainPage.vue'
import basketPage from './pages/basketPage.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

const routes = [
    {path:"/", name:"main", component:mainPage},
    {path:"/basket", name:"basket", component:basketPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.use(pinia)

app.mount('#app')