import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      services: '/src/services',
      components: '/src/components',
      store: '/src/store',
      selectors: '/src/store/selectors',
      reducers: '/src/store/reducers',
      sagas: '/src/store/sagas',
      models: '/src/models',
      helpers: '/src/helpers',
      data: '/src/data',
      assets: '/src/assets',
    },
  },
});
