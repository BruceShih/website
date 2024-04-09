// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    '@nuxtjs/eslint-module',
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
    '@nuxt/ui'
  ],
  ui: {
    icons: ['lucide']
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  }
})
