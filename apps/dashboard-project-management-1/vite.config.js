import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      Inspect()
  ]
});
