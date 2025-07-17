import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'tip-kai-react-dev',
        short_name: 'tip-2',
        description: 'Tip Kai Time',
        orientation: 'landscape',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: 'screenshot_desktop.png',
            sizes: '2048x1536',
            type: 'image/png',
            form_factor: 'wide',
            label: 'App in landscape orientation.'
          },
          {
            src: 'screenshot_narrow.png',
            sizes: '1536x2048',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'App in portrait orientation.'
          },
        ]
      }
    })
  ],
  server: {
    port: 9001,
  },
  build: {
    outDir: 'build',
  },
});
