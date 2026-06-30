export default defineNuxtConfig({
  devtools: {enabled: true},

  nitro: {
    compatibilityDate: '2026-06-30',
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'},
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
        {rel: 'shortcut icon', href: '/favicon.ico'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
        {rel: 'manifest', href: '/site.webmanifest'},
      ],
      meta: [
        {name: 'apple-mobile-web-app-title', content: 'Stepan Fedyanov'},
        {name: 'msapplication-TileColor', content: '#9f00a7'},
        {name: 'theme-color', content: '#ffffff'},
        {name: 'yandex-verification', content: 'ec87491170d98059'},
      ],
    },
  },
  modules: ['@artmizu/yandex-metrika-nuxt', '@nuxtjs/i18n', 'nuxt-gtag', '@nuxtjs/sitemap'],

  i18n: {
    strategy: (process.env.NODE_ENV === 'production') ? 'no_prefix' : 'prefix_except_default',
    defaultLocale: 'ru',
    differentDomains: (process.env.NODE_ENV === 'production'),
    locales: [
      { code: 'en', name: 'English', file: 'en.json', domain: 'resume.fedyanov.dev'},
      { code: 'ru', name: 'Русский', file: 'ru.json', domain: 'cv.fedyanov.ru' }
    ],
    detectBrowserLanguage: false,
  },

  yandexMetrika: {
    id: '109412530',
  },

  gtag: {
    id: 'G-E1KCQ28N65',
  },
  
  css: ['normalize.css'],
});