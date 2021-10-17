import FButton from '@/components/FButton'
import FDrawer from '@/components/FDrawer'
import FIcon from '@/components/FIcon/index.vue'

const components = {
  FButton,
  FDrawer,
  FIcon,
}

import 'virtual:windi.css'
import './styles/index.scss'
import { App } from 'vue'

import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

// Use full install all declared components
function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }

  Vue.use(VueSvgIconPlugin, { tagName: 'svg-icon' })
  // Vue.config.globalProperties.$Message = Message
  // Vue.config.globalProperties.$Notification = Notification
  // Vue.config.globalProperties.$Loading = Loadingbar
  // Vue.config.globalProperties.$Equal = {
  //   drawers: [],
  //   modals: [],
  // } as IEqual
}

export default { install, FButton, FDrawer, FIcon }
