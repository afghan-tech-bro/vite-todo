import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig ({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { 
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "./src/assets/variables";` 
     },
    },
  },
});

// https://vitejs.dev/config/