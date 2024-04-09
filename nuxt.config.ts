// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  routeRules: {
    // prerender index route by default otherwise vercel will give you 500
    '/': { prerender: true }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.NUXT_STORYBLOK_TOKEN,
        apiOptions: {
          version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
        }
      }
    ],
    '@nuxt/ui'
  ],
  ui: {
    icons: ['lucide']
  }
})
