import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import 'virtual:windi.css'
import './styles/index.scss'

import Flyui from '@theflies/flyui-vue3'
import '@theflies/flyui-vue3/css'

const app = createApp(App)

app.use(Flyui)
app.use(router)

app.mount('#app')
