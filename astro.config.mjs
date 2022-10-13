import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        about: 'storyblok/About',
        article: 'storyblok/Article',
        hero: 'storyblok/Hero',
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
