import { App } from 'vue'
import FSelect from './index.vue'

FSelect.install = (Vue: App) => Vue.component(FSelect.name, FSelect)

export default FSelect
