import { App } from 'vue'
import FIcon from './index.vue'

FIcon.install = (Vue: App) => Vue.component(FIcon.name, FIcon)

export default FIcon
