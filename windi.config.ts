import colors from 'windicss/colors'
import { defineConfig } from 'vite-plugin-windicss'
import neumorphism from './tailwindcss-neumorphism'

import animations from '@windicss/plugin-animations'
module.exports = defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  theme: {
    extend: {
      colors: {
        prim: {
          1: colors.blue[500],
          2: colors.warmGray[800],
        },
      },
    },
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
