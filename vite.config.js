import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://github.com/diego-monfort-landolt/shopingcard
export default defineConfig({
  base: './',
  plugins: [react()],
})
