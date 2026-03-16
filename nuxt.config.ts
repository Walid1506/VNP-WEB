export default defineNuxtConfig({
  // Tu as sûrement déjà d'autres options ici, comme compatibilityDate
  compatibilityDate: '2024-04-03', 
  
  // Ajoute le bloc vite ici :
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})