import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react()
  ],
  server: {
    host: true, // ⬅️ permet à tous les appareils du réseau local d’accéder à ton app
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ⬅️ Ici on définit @ comme alias vers /src
    },
  },
})
