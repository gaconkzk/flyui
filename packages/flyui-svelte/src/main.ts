import 'virtual:windi.css'
import App from '@/App.svelte'

// common ones from core
import '@/styles/index.scss'

const app = new App({
  target: document.getElementById('app') as Element,
})

export default app
