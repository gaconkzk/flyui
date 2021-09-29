import { defineConfig } from 'vite-plugin-windicss'
import neumorphism from './tailwindcss-neumorphism'

import animations from '@windicss/plugin-animations'

module.exports = defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  theme: {},
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
