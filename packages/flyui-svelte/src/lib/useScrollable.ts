import {FScrollable} from './FScrollable'

export function scrollable(node: HTMLElement) {
  Object.defineProperty(node, 'data-f-scrollable', { value: new FScrollable(node), configurable: true });
  return {
    destroy() {

    }
  }
}