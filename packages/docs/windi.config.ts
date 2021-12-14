import { defineConfig } from 'vite-plugin-windicss'

import animations from '@windicss/plugin-animations'
import { theme } from '@gaconkzk/flyui-vue3/core/utils/theme'
import neumorphism from '@gaconkzk/flyui-vue3/core/tailwindcss-neumorphism'

module.exports = defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  theme: {
    extend: theme,
  },
  plugins: [
    neumorphism,
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
