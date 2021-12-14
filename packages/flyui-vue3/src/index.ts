import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'

import FButton from '@/components/FButton/index.vue'
import FDrawer from '@/components/FDrawer/index.vue'
import FTextField from '@/components/FTextField/index.vue'
import FSelect from '@/components/FSelect/index.vue'
import FIcon from '@/components/FIcon/index.vue'

import { FScrollable } from '$lib/core/utils/FScrollable'

const components = {
  FButton,
  FDrawer,
  FIcon,
  FTextField,
  FSelect,
}

import 'virtual:windi.css'

import '$lib/core/styles/variables.scss'
import '$lib/core/styles/neumophism.scss'

// scrollable - auto import
import '$lib/core/styles/components/fscrollable.scss'

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
    mounted(el, binding, vnode) {
      Object.defineProperty(el, 'data-f-scrollable', {
        value: new FScrollable(el),
        configurable: true,
      })
    },
    beforeUnmount(el, binding, vnode) {
      if (!Object.prototype.hasOwnProperty.call(el, 'data-f-scrollable')) return
      const cnode: HTMLElement & { 'data-f-scrollable'?: FScrollable } = el
      cnode['data-f-scrollable']?.unBind()
      delete cnode['data-f-scrollable']
    },
  })
}

export default {
  install,
}

// For named components usage
export {
  theme,
  updateTheme,
  defaultTheme,
  currentTheme,
} from '$lib/core/utils/theme'
export { default as FButton } from '@/components/FButton'
export { default as FDrawer } from '@/components/FDrawer'
export { default as FIcon } from '@/components/FIcon'
export { default as FTextField } from '@/components/FTextField'
export { default as FSelect } from '@/components/FSelect'
// -- end
