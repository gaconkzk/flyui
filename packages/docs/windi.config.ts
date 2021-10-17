import { defineConfig } from 'vite-plugin-windicss'

import animations from '@windicss/plugin-animations'
import {theme} from '@gaconkzk/flyui'

module.exports = defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  theme: {
    extend: theme,
  },
  plugins: [
    animations({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
})
