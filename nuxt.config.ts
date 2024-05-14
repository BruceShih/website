// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  experimental: {
    viewTransition: true
  },
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
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      templateParams: {
        separator: '-'
      },
      titleTemplate: '%pageTitle %separator %siteName'
    }
  },
  ui: {
    icons: ['lucide']
  },
  site: {
    url: 'https://bruceshih.me',
    name: 'Website of Bruce Shih',
    description: 'I\'m Bruce SpeechSynthesis, I make websites'
  }
})
