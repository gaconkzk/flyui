import { App } from 'vue'
import FButton from './FButton.vue'

FButton.install = (Vue: App) => {
  Vue.component(FButton.name, FButton)
}

export default FButton
