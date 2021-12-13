import '../core/styles/components/fscrollable.scss'
import { FScrollable } from '../core/utils/FScrollable'

export type Destroyable = {
  destroy(): void
}

export default function scrollable(node: HTMLElement): Destroyable {
  Object.defineProperty(node, 'data-f-scrollable', {
    value: new FScrollable(node),
    configurable: true,
  })
  return {
    destroy() {
      if (!Object.prototype.hasOwnProperty.call(node, 'data-f-scrollable')) return

      const cnode: HTMLElement & { 'data-f-scrollable'?: FScrollable } = node
      cnode['data-f-scrollable']?.unBind()
      delete cnode['data-f-scrollable']
    },
  }
}
