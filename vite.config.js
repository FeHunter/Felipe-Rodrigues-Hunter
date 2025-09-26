import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Felipe-Rodrigues-Hunter",
  server: {
    historyApiFallback: true,
    proxy: {
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
