import { App } from 'vue'
import FButton from './index.vue'

FButton.install = (Vue: App) => Vue.component(FButton.name, FButton)

export default FButton
