export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DRIP calculator',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'theme-color', content: '#F1CCE4'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {},

  axios: {
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest',
        'Host': 'localhost',
      },
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: `${process.env.BROWSER_API_URL}${process.env.API_PREFIX}`,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: `${process.env.SERVER_API_URL}${process.env.API_PREFIX}`,
    },
  },
}
