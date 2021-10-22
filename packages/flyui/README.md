# FlyUI Components framework

Trying to make my own component framework.

## Required peer dependencies for windicss classes:
- windicss
- @windicss/plugin-animations

## Typescript missing
- for now please add ```declare module '@gaconkzk/flyui-vue3'``` into your typescripton definition file

## installation

```
pnpm add @gaconkzk/flyui-vue3
```

Use in your main app:

```
import { createApp } from 'vue'
import App from './App.vue'

import Flyui from '@gaconkzk/flyui-vue3'
import '@gaconkzk/flyui-vue3/css'


const app = createApp(App)
app.use(Flyui)

app.mount('#app')
```

Note you might need windicss and plugin-windicss-animation for better css control in your project (animation not worked when you don't have them)

## Theme primary color
we need prepare 4 colors variables named `f-primary` theme - or you can use 4 default color for theme

Define `global` css variables using 4 colors. You can use any color you want, for example I'm using 4 colors from `windicss` (defined in `windi.config.ts`)
```css
:root {
  --f-primary: theme('colors.prim.2');
  --f-primary-lighter: theme('colors.prim.2-lighter');
  --f-primary-shadow: theme('colors.prim.2-shadow');
  --f-primary-highlight: theme('colors.prim.2-highlight');
  --t-primary: theme('colors.textColor.prim.2');
}
```

#### Flies icons license

```html
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/CS2909">
        <img src="https://avatars.githubusercontent.com/u/34714953?v=4&s=100" width="100px;" alt=""/>
        <br />
        <sub><b>YeuChesen</b></sub>
      </a>
      <br />
      <a href="#question-yeuchensen" title="Answering Questions">💬</a>
      <a href="https://github.com/all-contributors/all-contributors/commits?author=cs2909" title="Documentation">📖</a>
      <a href="https://github.com/all-contributors/all-contributors/pulls?q=is%3Apr+reviewed-by%3Acs2909" title="Reviewed Pull Requests">👀</a>
      <a href="#" title="Talks">📢</a>
      <a href="#" title="Code">💻</a>
      <a href="#" title="Design">🎨</a>
      <a href="#" title="Ideas, Planning & Feedbacks">🤔</a>
    </td>
  </tr>
</table>
