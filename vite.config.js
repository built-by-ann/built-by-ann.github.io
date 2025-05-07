// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/built-by-ann.github.io/', // ✅ required for GitHub Pages
  plugins: [react()],
});
