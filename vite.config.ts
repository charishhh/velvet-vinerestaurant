import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow LAN/devices to connect
    port: 5173, // default Vite port
    strictPort: false, // fall back if 5173 is busy
  },
  preview: {
    host: true,
    port: 4173,
  },
});
