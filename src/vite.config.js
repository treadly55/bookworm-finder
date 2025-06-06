// vite.config.js

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      // This tells the plugin to automatically update the PWA when you deploy new versions.
      registerType: 'autoUpdate',
      
      // This enables PWA features for testing in your local development environment.
      devOptions: {
        enabled: true
      },

      // This is the manifest configuration, the heart of your PWA.
      manifest: {
        name: "The Bookworm's Companion", // The full name of your app
        short_name: 'Bookworm', // A shorter name for the home screen icon label
        description: "Your AI companion for book recommendations based on writing style.", // A brief description
        
        // These colours help theme the browser UI and splash screen
        theme_color: '#C7AD7F', // A main color from your app (e.g., button color)
        background_color: '#522D20', // The background color of the splash screen

        // This tells the browser to open the app in its own window, without the browser URL bar.
        display: 'standalone',
        scope: '/',
        start_url: '/',

        // This section links to the icons you created previously.
        // Make sure the paths match where you put them (in public/icons/)
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});