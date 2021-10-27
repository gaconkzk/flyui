import { App } from 'vue'
import FTextField from './index.vue'

FTextField.install = (Vue: App) => Vue.component(FTextField.name, FTextField)

export default FTextField
