import { defineConfig } from 'vite';
import { watch } from 'node:fs';
import { resolve } from 'node:path';
import { buildStyles } from './scripts/build-styles.mjs';

const components = resolve(import.meta.dirname, 'src/components');

function componentStyles() {
  return {
    name: 'component-styles',
    async configureServer(server: any) {
      await buildStyles();
      let timer:any;
      let building = false;
      let rebuildPending = false;

      const rebuild = async () => {
        if (building) {
          rebuildPending = true;
          return;
        }
        building = true;
        try {
          await buildStyles();
          server.config.logger.info('Component styles rebuilt');
        } catch (error) {
          server.config.logger.error(`Component style build failed: ${error.message}`);
        } finally {
          building = false;
          if (rebuildPending) {
            rebuildPending = false;
            void rebuild();
          }
        }
      };

      const watcher = watch(components, { recursive: true }, (_event, filename) => {
        if (!filename?.endsWith('.scss')) return;
        clearTimeout(timer);
        timer = setTimeout(() => void rebuild(), 100);
      });
      server.httpServer?.once('close', () => {
        clearTimeout(timer);
        watcher.close();
      });
    }
  };
}

export default defineConfig({
  plugins: [componentStyles()],
  css: { postcss: { plugins: [] } },
  build: { outDir: 'demo-dist' }
});
