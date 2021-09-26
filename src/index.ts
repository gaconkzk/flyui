import FButton from '@/components/FButton'

const components = {
  FButton,
}

import './styles/index.scss'
import { App } from 'vue'

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

export { default as FButton } from '@/components/FButton'
