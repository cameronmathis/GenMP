import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/GenMP/',
    server: {
        host: true,
        port: 80,
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@packages': path.resolve(__dirname, 'packages'),
        },
    },
    optimizeDeps: {
        exclude: ['/node_modules/'],
    },
    build: {
        rollupOptions: {
            external: [/node_modules/],
        },
    },
});
