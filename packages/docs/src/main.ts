import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:windi.css'
import './styles/index.scss'

import Flyui from '@gaconkzk/flyui'
import '@gaconkzk/flyui/css'

const app = createApp(App)
app.use(Flyui)

app.mount('#app')
