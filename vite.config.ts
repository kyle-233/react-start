/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
    extensions: ['tsx', '.ts', '.jsx', '.js', '.json'],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    // setupFiles: '.vitest/setup',
    coverage: {
      provider: 'istanbul',
    },
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
  },
})
