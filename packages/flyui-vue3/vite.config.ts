import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgicon from 'vite-plugin-svgicon'

import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'

import libInjectCss from './lib/libInjectCss'

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
      output: [
        {
          format: 'esm',
          esModule: true,
          globals: {
            vue: 'Vue',
          },
          exports: 'named',
        },
        // This umd config not tested and must be put after esm - when put before - the code splitting not work anymore
        {
          format: 'umd',
          interop: 'esModule',
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
          // For dynamic import code (svg icons for now)
          inlineDynamicImports: true,
          exports: 'named',
        },
      ],
    },
  },
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '$lib',
        replacement: path.resolve(__dirname, 'lib'),
      },
    ],
  },
  server: {
    port: 3001,
  },
  plugins: [
    WindiCSS(),
    vue(),
    svgicon({
      include: ['**/assets/icons/svg/**/*.svg'],
    }),
    libInjectCss(),
  ],
})
