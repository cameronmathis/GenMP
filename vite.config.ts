import react from '@vitejs/plugin-react'; // Plugin to enable React fast refresh and JSX support
import path from 'path'; // Node.js module for working with file and directory paths
import { defineConfig } from 'vite'; // Vite's configuration helper

export default defineConfig({
    // Base URL for the app (useful for deploying to GitHub Pages or subdirectories)
    base: '/GenX/',
    server: {
        host: true, // Makes the server accessible over the network (e.g., for testing on other devices)
        port: 80, // Port where the dev server runs
        watch: {
            usePolling: true, // Use polling for file changes (useful for certain environments like Docker)
            followSymlinks: true, // Allow Vite to follow symbolic links (needed for monorepos or linked packages)
        },
        fs: {
            // Specify directories that Vite is allowed to serve files from
            allow: [
                path.resolve(__dirname), // Root directory of the project
                path.resolve(__dirname, 'packages'), // Include 'packages' directory for external components
            ],
        },
    },
    plugins: [
        react(), // React plugin for Vite (includes support for JSX and React Fast Refresh)
    ],
    resolve: {
        alias: {
            // Define aliases to simplify imports
            '@packages': path.resolve(__dirname, 'packages'), // Alias '@packages' to the 'packages' directory
        },
        preserveSymlinks: true, // Ensures Vite correctly resolves symlinked dependencies (useful for monorepos)
    },
    optimizeDeps: {
        // Ensure critical dependencies like React are bundled correctly
        include: ['react', 'react-dom'],
        // Exclude specific packages from Vite's dependency pre-bundling
        exclude: ['/node_modules/'], // Prevents the component package from being pre-bundled
    },
    build: {
        // Ensure Vite resolves all assets correctly
        outDir: 'dist', // This should be your build directory
        rollupOptions: {
            // Keep node_modules as external during the build process
            external: [/node_modules/],
        },
    },
});
