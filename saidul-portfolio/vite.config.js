import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration — React plugin only, no extra magic needed.
export default defineConfig({
  plugins: [react()],
});
