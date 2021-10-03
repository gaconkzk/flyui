# FlyUI Components framework

Trying to make my own component framework.

## Required peer dependencies for windicss classes:
- windicss
- @windicss/plugin-animations

## Typescript missing
- for now please add ```declare module '@gaconkzk/flyui'``` into your typescripton definition file

## installation

```
pnpm add @gaconkzk/flyui
```

Use in your main app:

```
import { createApp } from 'vue'
import App from './App.vue'

import Flyui from '@gaconkzk/flyui'
import '@gaconkzk/flyui/css'


const app = createApp(App)
app.use(Flyui)

app.mount('#app')
```

Note you might need windicss and plugin-windicss-animation for better css control in your project (animation not worked when you don't have them)

#### Flies icons license

```html
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```
