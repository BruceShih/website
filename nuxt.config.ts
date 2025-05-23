// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  // opt-in to nuxt 4 features
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-08-20',
  experimental: {
    viewTransition: true
  },
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  devServer: {
    https: true
  },
  // extends: 'content-wind',
  modules: [
    '@nuxt/content',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@nuxthq/studio'
  ],
  css: ['~/main.css'],
  content: {
    documentDriven: true
  },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon-light.png',
          media: '(prefers-color-scheme: light)'
        },
        {
          rel: 'icon',
          href: '/favicon-dark.png',
          media: '(prefers-color-scheme: dark)'
        }
      ],
      templateParams: {
        separator: '-'
      },
      titleTemplate: '%pageTitle %separator %siteName'
    }
  },
  site: {
    url: 'https://bruceshih.me',
    name: 'Website of Bruce Shih',
    description: 'I\'m Bruce, I make websites'
  }
})
