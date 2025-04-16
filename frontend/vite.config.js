import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  server: {
    allowedHosts: [/\.ngrok-free\.app$/,
    '208a-196-115-50-249.ngrok-free.app'
    ]
  }
})
