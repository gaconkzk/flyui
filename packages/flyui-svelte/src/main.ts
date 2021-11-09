import 'virtual:windi.css'
import App from '@/App.svelte'

// common ones from core
import '@gaconkzk/core/styles/variables.scss'
import '@gaconkzk/core/styles/neumophism.scss'

const app = new App({
  target: document.getElementById('app') as Element,
})

export default app
