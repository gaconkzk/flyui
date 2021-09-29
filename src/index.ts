import FButton from '@/components/FButton'
import FDrawer from '@/components/FDrawer'

const components = {
  FButton,
  FDrawer,
}

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

export default { install }

// Or we can import separated components
export { default as FButton } from '@/components/FButton'
export { default as FDrawer } from '@/components/FDrawer'
