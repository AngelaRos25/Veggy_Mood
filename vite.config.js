import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/veggy_mood/",
  define: {
    // eslint-disable-next-line no-undef
    'process.env.VITE_APP_API_KEY':JSON.stringify(process.env.VITE_APP_API_KEY)
  }
})
