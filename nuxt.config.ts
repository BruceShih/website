// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
    "@anu-vue/nuxt",
    "@unocss/nuxt",
  ],
  anu: {
    initialTheme: "dark",
  },
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
});
