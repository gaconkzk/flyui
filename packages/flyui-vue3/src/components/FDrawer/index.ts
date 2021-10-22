import { App } from 'vue'
import FDrawer from './index.vue'

FDrawer.install = (Vue: App) => Vue.component(FDrawer.name, FDrawer)

export default FDrawer
