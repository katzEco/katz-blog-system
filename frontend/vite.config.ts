import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			"/list_post": {
				target: "http://localhost:4201/be/",
        changeOrigin: true,
        secure: false,
			},
			"/rss" : {
				target: "http://localhost:4201/",
				changeOrigin: true,
				secure: false
			}
		}
	}
});
