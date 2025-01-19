import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate third-party libraries into their own chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Set to a higher limit, e.g., 1000 KB
    
  }
})
