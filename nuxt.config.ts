export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  // LA LIGNE MAGIQUE : Empêche le serveur de crasher et délègue l'affichage au navigateur
  ssr: false, 

  css: ['~/assets/css/main.css'],

  // 1. AJOUT DU MODULE SUPABASE ICI :
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss'
  ],

  // 2. CONFIGURATION SUPABASE : Pour éviter qu'il bloque les visiteurs non connectés
  supabase: {
    redirect: false
  },

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
    // LE NOUVEAU BLOC MAGIQUE POUR LA SAUVEGARDE DE LA LANGUE
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'vnp_lang', // Nuxt va utiliser ce cookie pour se souvenir du choix
      redirectOn: 'root',    // Redirige automatiquement sur la bonne langue depuis l'accueil
      alwaysRedirect: true   // Force la redirection à chaque visite si le cookie existe
    }
  },

  // Configuration pour l'envoi de mails (Nodemailer et Brevo)
  runtimeConfig: {
    // Ces variables ne sont accessibles que côté serveur (dans /server/api)
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
    contactReceiver: process.env.CONTACT_RECEIVER,
    
    // NOUVELLES VARIABLES BREVO
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoListId: process.env.BREVO_LIST_ID
  },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit']
    }
  }
})