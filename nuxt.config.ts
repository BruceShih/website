// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@unocss/nuxt'
  ],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  }
})
