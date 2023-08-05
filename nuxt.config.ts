// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    '@vueuse/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: {
          version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
        }
      }
    ],
    '@unocss/nuxt'
  ],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  }
})
