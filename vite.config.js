import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    postcss: './postcss.config.cjs'
  },
  server: {
    port: 3000,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'react-icons', '@heroicons/react']
        }
      }
    }
  }
})
