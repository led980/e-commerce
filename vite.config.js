import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

 
// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
  base: '/led980.github.io/', 
  server: {
    proxy: {
      "/api": {
        target: "https://api.redseam.redberryinternship.ge",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
