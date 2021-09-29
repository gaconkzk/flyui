import { App } from 'vue'
import FDrawer from './FDrawer.vue'

FDrawer.install = (Vue: App) => {
  Vue.component(FDrawer.name, FDrawer)
}

export default FDrawer
