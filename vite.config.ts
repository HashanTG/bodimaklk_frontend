import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true,            // Listen on all addresses
    port: 5173,            // Or your preferred port
    watch: {
      usePolling: true,    // Needed for Docker file change detection
    },
    strictPort: true,      // Fail if port is taken
  },
})

