import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: { alias: { '@': resolve(__dirname) } },
  test: {
    environment: 'jsdom',
    include: ['**/*.test.ts'],
    exclude: ['node_modules/**', '.output/**', '.wxt/**'],
  },
});
