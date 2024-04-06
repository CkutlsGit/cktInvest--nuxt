// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'CKTInvest',
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind/tailwind.css'
  },
  googleFonts: {
    families: {
      'Roboto Mono': true,
      'Poppins': true,
    },
  },
})
