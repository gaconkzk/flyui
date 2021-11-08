import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'

const __dirname = path.resolve()

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
    ],
  },
  plugins: [
    WindiCSS(),
    svelte(),
  ],
})
