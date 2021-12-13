import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

const __dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'flyui',
    },
    rollupOptions: {
      output: [
        {
          format: 'esm',
          esModule: true,
          exports: 'named',
        },
        // This umd config not tested and must be put after esm - when put before - the code splitting not work anymore
        {
          format: 'umd',
          interop: 'esModule',
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
    svelte({
      experimental: {
        prebundleSvelteLibraries: false,
      }
    }),
  ],
})
