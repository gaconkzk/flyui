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

  // scrollable
  Vue.directive('scrollable', {
    beforeMount(el, binding, vnode) {
      el.classList.add('overflow-y-auto')
      if (binding?.value?.thin) {
        el.classList.add(`scrollbar-thin`)
      } else el.classList.add(`scrollbar`)
    },
  })
}

export default {
  install,
}

// For named components usage
export { theme, updateTheme, defaultTheme } from './utils/theme'
export { default as FButton } from '@/components/FButton'
export { default as FDrawer } from '@/components/FDrawer'
export { default as FIcon } from '@/components/FIcon'
// -- end
