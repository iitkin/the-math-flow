import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you're deploying to GitHub Pages at https://<user>.github.io/the-math-flow/
export default defineConfig({
  base: '/the-math-flow/',
  plugins: [react()],
})
