import { defineConfig } from 'vite-plugin-windicss'
import neumorphism from './tailwindcss-neumorphism'

module.exports = defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  theme: {},
  plugins: [neumorphism],
})
