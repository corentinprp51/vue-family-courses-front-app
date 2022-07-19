import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
          registerType: 'autoUpdate',
          manifest: {
              name: 'Family Courses',
              short_name: 'Family Courses',
              theme_color: '#FC7900',
          },
          devOptions: {
              enabled: true
          }
      })
  ],
  resolve: {
      alias: {
          '@': path.resolve(__dirname, './src')
      }
  }
})
