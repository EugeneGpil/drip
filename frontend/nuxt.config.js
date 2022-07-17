const title = 'DRIP hydration calculator'
const description = 'This drip calculator shows the fastest interval you can hydrate with, without wasting money on gas fees.'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: description},
      {hid: 'og:description', name: 'og:description', content: description},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'theme-color', content: '#F1CCE4'},
      {hid: 'author', name: 'author', content: 'gpilligrim@gmail.com'},
      {hid: 'og:url', name: 'og:url', content: process.env.SITE_URL},
      {hid: 'og:title', name: 'og:title', content: title},
      {name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    'assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv',
  ],

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

  fontawesome: {
    icons: {
      solid: [
        'faArrowUpLong',
        'faWallet',
        'faYinYang',
        'faCircleCheck',
      ],
    },
  },
}
