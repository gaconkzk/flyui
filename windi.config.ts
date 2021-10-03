import colors from 'windicss/colors'
import Color from 'color'
import { defineConfig } from 'vite-plugin-windicss'
import neumorphism from './tailwindcss-neumorphism'

import animations from '@windicss/plugin-animations'

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
    extend: {
      colors: {
        prim: {
          1: colors.blue[500],
          2: colors.warmGray[800],
          '2-lighter': Color(colors.warmGray[800]).lighten(0.15).hex(),
          '2-shadow': Color(colors.warmGray[800]).isDark()
            ? Color(colors.warmGray[800]).darken(0.45).hex()
            : Color(colors.warmGray[800]).darken(0.25).hex(),
          '2-highlight': Color(colors.warmGray[800]).isLight()
            ? Color(colors.warmGray[800]).lighten(0.2).hex()
            : Color(colors.warmGray[800]).lighten(0.35).hex(),
        },
      },
      textColor: {
        prim: {
          1: colors.gray[200],
          2: colors.gray[200],
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
