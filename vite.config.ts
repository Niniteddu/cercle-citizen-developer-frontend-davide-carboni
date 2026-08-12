import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? '/cercle-citizen-developer-frontend-davide-carboni/'
    : '/',
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Docker on Windows doesn't forward inotify events — polling is required
      usePolling: true,
      interval: 300,
    },
    host: true,
    port: 5173,
  },
})
