import { createApp } from 'vue'

import 'virtual:windi.css'
import Flyui from './index'

import App from './App.vue'

const app = createApp(App)
app.use(Flyui)
app.mount('#app')
