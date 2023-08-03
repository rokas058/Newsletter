import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// eslint-disable-next-line import/default
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      stylelint: { lintCommand: 'stylelint ./src/**/*.{ts,tsx}' },
      eslint: {
        lintCommand: 'eslint -c .eslintrc.cjs --cache --ext .ts,.tsx .',
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
