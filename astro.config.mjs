import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      // accessToken: process.env.STORYBLOK_TOKEN,
      apiOptions: {
        region: 'eu'
      },
      components: {
        page: 'storyblok/Page',
        post: 'storyblok/Post',
        blogs: 'storyblok/Blogs'
      }
    }),
    vue(),
    tailwind()
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});
