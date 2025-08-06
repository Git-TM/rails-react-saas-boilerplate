import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react()
  ],
  resolve: {
    alias: {
      '@': '/app/frontend',
    },
  },
  server: {
    hmr: {
      host: 'localhost',
      port: 3036
    }
  }
}) 