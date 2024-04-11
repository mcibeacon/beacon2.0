import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://mcibeacon.github.io/beacon2.0/",
  assetsInclude: ['**/*.md', '**/*.JPG']
})
