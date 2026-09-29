import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Assignment-5/',
})
// export default defineConfig({
//   plugins: [react()],
//   base: '/Assignment-5/',
// })