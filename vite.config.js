import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'tip-kai-react-dev',
        short_name: 'tip-2',
        description: 'Tip Kai Time',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        orientation: 'landscape',
        display: 'fullscreen',
        start_url: '/tip-kai-react?fullscreen=true',
        icons: [
          {
            src: '/tip-kai-react/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/tip-kai-react/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: '/tip-kai-react/screenshot_desktop.png',
            sizes: '2048x1536',
            type: 'image/png',
            form_factor: 'wide',
            label: 'App in landscape orientation.'
          },
          {
            src: '/tip-kai-react/screenshot_narrow.png',
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
    outDir: 'docs',
  },
  base: '/tip-kai-react/',
});
