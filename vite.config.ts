import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@features': '/src/features',
      '@utils': '/src/utils',
    }
  },
  build: {
    outDir: 'dist'
  }
})
