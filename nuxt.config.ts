// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Test-task',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
    },
  },
  imports: {
    autoImport: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite',
    '@pinia/nuxt',
  ],

  components: {
    dirs: [],
  },

  svgSprite: {
    input: '~/components/base/base-icon/icons',
  },

  pinia: {
    autoImports: ['defineStore'],
  },
});
