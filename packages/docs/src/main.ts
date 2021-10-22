import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import 'virtual:windi.css'
import './styles/index.scss'

import Flyui from '@gaconkzk/flyui-vue3'
import '@gaconkzk/flyui-vue3/css'

const app = createApp(App)

app.use(Flyui)
app.use(router)

app.mount('#app')
