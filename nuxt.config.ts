// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem'
    }
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
    '@nuxt/ui',
    '@nuxt/image'
  ],
  ui: {
    icons: ['lucide']
  }
})
