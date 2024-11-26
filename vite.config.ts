import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/GenX/',
    server: {
        host: true,
        port: 80,
    },
    plugins: [react()],
});
