import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'normalize.css',
    '@/assets/css/main.scss',
  ],
  modules: [
    '@pinia/nuxt',
  ],
})