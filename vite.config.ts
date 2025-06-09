import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Personagens-Rick-And-Morty/',
  plugins: [
    react(),
  ],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})
