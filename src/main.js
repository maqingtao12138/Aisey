import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import Mock from 'mockjs'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('axios', axios)
app.provide('Mock', Mock)

app.mount('#app')
