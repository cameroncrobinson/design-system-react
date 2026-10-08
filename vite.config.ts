import { defineConfig } from 'vite';

export default defineConfig({
  css: { postcss: { plugins: [] } },
  build: { outDir: 'demo-dist' }
});
