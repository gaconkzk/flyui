import FButton from '@/components/FButton'
import FDrawer from '@/components/FDrawer'

const components = {
  FButton,
  FDrawer,
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
  // Vue.config.globalProperties.$Message = Message
  // Vue.config.globalProperties.$Notification = Notification
  // Vue.config.globalProperties.$Loading = Loadingbar
  // Vue.config.globalProperties.$Equal = {
  //   drawers: [],
  //   modals: [],
  // } as IEqual
}

export default { install, FButton, FDrawer }
