import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows ngrok (and other tunnels) to serve the app
    allowedHosts: true,
  }
})