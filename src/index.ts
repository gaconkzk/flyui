import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'

import FButton from '@/components/FButton/index.vue'
import FDrawer from '@/components/FDrawer/index.vue'
import FIcon from '@/components/FIcon/index.vue'

const components = {
  FButton,
  FDrawer,
  FIcon,
}

import 'virtual:windi.css'
import './styles/index.scss'
import { App } from 'vue'

// Use full install all declared components
function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }

  Vue.use(VueSvgIconPlugin, { tagName: 'svg-icon' })
}

Object.values(components).forEach(
  (component) =>
    (component.install = (Vue: App) =>
      Vue.component(component.name, component)),
)

export default {
  install,
}

// For named components usage
export { theme, updateTheme, defaultTheme } from './utils/theme'
export { FButton, FDrawer, FIcon }
// -- end
