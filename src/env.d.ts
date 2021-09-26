/// <reference types="vite/client" />

declare module '*.vue' {
  import { defineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: ReturnType<typeof defineComponent>
  export default component
}
