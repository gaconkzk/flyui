import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import PurgeIcons from 'vite-plugin-purge-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/flyui/',
  build: {
    outDir: '../../docs',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: null,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [IconResolver({ componentPrefix: '' })],
    }),
    Icons({ defaultStyle: '', autoInstall: true }),
    PurgeIcons({
      /* PurgeIcons Options */
    }),
    WindiCSS(),
  ],
})
