import { createApp } from 'vue'

import 'virtual:svg-icons-register'
import 'virtual:windi.css'

import App from './App.vue'
import Flyui from './index'

const app = createApp(App)
app.use(Flyui)
app.mount('#app')
