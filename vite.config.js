
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3c9a-39-45-97-228.ngrok-free.app'], // Allow your ngrok host
  },
})
