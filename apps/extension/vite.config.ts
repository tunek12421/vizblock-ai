import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  // Aseguramos que Vite trate la carpeta de la extensión como root
  root: resolve(__dirname),

  plugins: [react()],

  build: {
    // Ponemos outDir relativo a la raíz del monorepo:
    outDir: resolve(__dirname, '../../dist/apps/extension'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup/index.html'),
        background: resolve(__dirname, 'background.ts'),
        'content-script': resolve(__dirname, 'content-script.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
