<template>
  <header class="app-header">
    <div class="header-container">
      
      <NuxtLink :to="localePath('/')" class="logo-link">
        <img src="/logo.jpg" alt="VNP-WEB Logo" class="logo-img" />
      </NuxtLink>

      <nav class="main-nav">
        <NuxtLink :to="localePath('/')" exact-active-class="active">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/services')" exact-active-class="active">{{ $t('nav.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/portfolio')" exact-active-class="active">{{ $t('nav.portfolio') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')" exact-active-class="active">{{ $t('nav.blog') }}</NuxtLink>
        <NuxtLink :to="localePath('/planning')" exact-active-class="active">{{ $t('nav.planning') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" exact-active-class="active">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" exact-active-class="active">{{ $t('nav.contact') }}</NuxtLink>
      </nav>

      <div class="header-actions">
        
        <div class="language-selector">
          <span class="globe-icon">🌐</span>
          <select :value="locale" @change="setLocale($event.target.value)">
            <option v-for="l in locales" :key="l.code" :value="l.code">
              {{ l.name }}
            </option>
          </select>
        </div>

        <NuxtLink :to="localePath('/contact')" class="btn-quote">{{ $t('nav.quote') }}</NuxtLink>
      </div>

    </div>
  </header>
</template>

<script setup>
// On importe les fonctions natives de Nuxt i18n
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
.app-header {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 50px;
  object-fit: contain;
}

.main-nav {
  display: flex;
  gap: 30px;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.main-nav a:hover, .main-nav a.active {
  color: #0052D4;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Design du sélecteur de langue */
.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8fafc;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.globe-icon {
  font-size: 1.1rem;
}

.language-selector select {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  color: #333;
  cursor: pointer;
}

.btn-quote {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #0f172a;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none; /* Ajouté pour éviter le soulignement du lien */
  display: inline-block;
}

.btn-quote:hover {
  background-color: #334155;
}
</style>