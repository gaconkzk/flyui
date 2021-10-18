import { defineConfig } from 'vite-plugin-windicss'
import animations from '@windicss/plugin-animations'
import scrollbar from '@windicss/plugin-scrollbar'

import neumorphism from './tailwindcss-neumorphism'
import { theme } from './src/utils/theme'

// testing debug
// import { Processor } from 'windicss/lib'
// const processor = new Processor({
//   plugins: [neumorphism],
// })
// const result = processor.interpret('nm-flat-$f-primary')
// console.log('result', result.styleSheet, result.styleSheet.children[0].property)

module.exports = defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  theme: {
    extend: theme,
  },
  plugins: [
    neumorphism,
    // scrollbar,
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
