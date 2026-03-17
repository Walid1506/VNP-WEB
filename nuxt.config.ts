export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  // LA LIGNE MAGIQUE : Empêche le serveur de crasher et délègue l'affichage au navigateur
  ssr: false, 

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/i18n'],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    // On pointe bien vers ton dossier à la racine
    langDir: '../i18n/locales/', 
    locales: [
      { code: 'fr', file: 'fr.json', name: '🇫🇷 FR' },
      { code: 'en', file: 'en.json', name: '🇬🇧 EN' },
      { code: 'nl', file: 'nl.json', name: '🇧🇪 NL' }
    ],
    detectBrowserLanguage: false
  },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit']
    }
  }
})