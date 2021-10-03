import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'

import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'

import libInjectCss from './libs/libInjectCss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'flyui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[name]',
    }),
    vue(),
    WindiCSS(),
    libInjectCss(),
  ],
})
