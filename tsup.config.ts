import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/vite.ts'],
  format: ['esm', 'cjs'],
  shims: true,
  dts: true,
  clean: true,
});
