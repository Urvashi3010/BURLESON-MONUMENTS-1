import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// appType 'spa' makes the dev server AND `vite preview` answer every unknown path
// (e.g. /about, /memorials/memorial-benches) with index.html, so refresh and direct
// URLs work. `base: '/'` keeps asset URLs absolute so deep links never break.
export default defineConfig({
  base: '/',
  appType: 'spa',
  plugins: [react()],
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
});
