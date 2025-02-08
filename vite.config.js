import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
export default defineConfig({
  plugins: [
    tailwindcss(), react(),
  ],
})