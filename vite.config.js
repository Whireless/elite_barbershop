import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  base: '/elite_barbershop', // На Github
  // base: '/', // На хостинг
  server: {
    open: true,
  },
  build: {
    outDir: './build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/variables";`,
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 70,
      },
      webp: {
        quality: 75,
      },
    }),
    // simpleHtmlPlugin({
    //   minify: true,
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
