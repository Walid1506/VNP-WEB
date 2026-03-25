<template>
  <div class="services-page">
    
    <section class="services-hero">
      <div class="hero-container">
        <h1>{{ $t('services.title') }}</h1>
        <p>{{ $t('services.subtitle') }}</p>
      </div>
    </section>

    <section class="main-services">
      <div class="section-header">
        <h2>{{ $t('services.mainOffers') }}</h2>
        <p>{{ $t('services.mainOffersSubtitle') }}</p>
      </div>
      
      <div class="services-grid">
        <div v-for="service in servicesList" :key="service.id" class="service-card">
          <div v-if="service.popular" class="popular-badge">
            {{ $t('services.popular') }}
          </div>

          <div class="service-image">
            <img :src="service.image" :alt="service.name" />
          </div>

          <div class="service-content">
            <h3>{{ service.name }}</h3>
            <p class="service-desc">{{ service.description }}</p>

            <ul class="features-list">
              <li v-for="(feature, idx) in service.features.slice(0, 5)" :key="idx">
                <span class="check-icon">✅</span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <NuxtLink :to="{ path: '/contact', query: { service: service.id } }" class="btn-primary">
              {{ $t('services.bookConsultation') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="additional-services">
      <div class="section-header">
        <h2>{{ $t('services.additionalServices') }}</h2>
        <p>{{ $t('services.additionalServicesSubtitle') }}</p>
      </div>
      
      <div class="additional-grid">
        <div v-for="(service, index) in additionalServices" :key="index" class="additional-card">
          <div class="icon-wrapper">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="section-header">
        <h2>{{ $t('services.workProcess') }}</h2>
        <p>{{ $t('services.workProcessSubtitle') }}</p>
      </div>
      
      <div class="process-grid">
        <div v-for="(item, index) in process" :key="index" class="process-step">
          <div class="step-number">{{ item.step }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <section class="bottom-cta">
      <div class="cta-content">
        <h2>{{ $t('services.question') }}</h2>
        <p>{{ $t('services.questionSubtitle') }}</p>
        <NuxtLink to="/contact" class="btn-white">
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
// Données des services (L'image WordPress a été remplacée par une image fiable)
const servicesList = [
  {
    id: 'redaction-web',
    name: 'Rédaction web',
    description: 'Rédaction de contenus optimisés pour le web et le référencement',
    duration: 60,
    features: ['Rédaction optimisée SEO', 'Articles de blog', 'Fiches produits', 'Pages de vente', 'Recherche mots-clés'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    popular: true,
  },
  {
    id: 'seo',
    name: 'SEO',
    description: 'Optimisation pour les moteurs de recherche et amélioration du référencement naturel',
    duration: 90,
    features: ['Audit SEO complet', 'Optimisation technique', 'Mots-clés stratégiques', 'Analyse concurrence', 'Rapports mensuels'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
    popular: true,
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Création et personnalisation de sites WordPress professionnels',
    duration: 120,
    features: ['Installation WordPress', 'Thème sur-mesure', 'Design responsive', 'Optimisation vitesse', 'Formation incluse'],
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80',
    popular: true,
  },
  {
    id: 'integration',
    name: 'Intégration',
    description: 'Intégration web HTML/CSS/JS de vos maquettes et designs',
    duration: 90,
    features: ['Intégration HTML5/CSS3', 'JavaScript', '100% responsive', 'Compatible navigateurs', 'Code propre'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    popular: false,
  },
  {
    id: 'creation-sites',
    name: 'Création de sites',
    description: 'Création de sites web professionnels sur-mesure',
    duration: 120,
    features: ['Design moderne', 'Sur-mesure', 'Optimisation SEO', 'Interface intuitive', 'Garantie satisfaction'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    popular: false,
  },
  {
    id: 'smo',
    name: 'SMO (Réseaux Sociaux)',
    description: 'Optimisation et gestion de vos réseaux sociaux Facebook et LinkedIn',
    duration: 60,
    features: ['Gestion Facebook/LinkedIn', 'Création de contenu', 'Multilingue (FR/EN/NL)', 'Planification', 'Rapports'],
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    popular: false,
  }
]

// Services additionnels
const additionalServices = [
  { icon: '🔍', title: 'SEO & Référencement', description: 'Améliorez votre visibilité sur les moteurs de recherche et attirez plus de trafic.' },
  { icon: '🔧', title: 'Maintenance & Support', description: 'Assurez la pérennité de votre site avec notre service de maintenance technique.' },
  { icon: '🎨', title: 'Refonte de site', description: 'Modernisez votre site existant avec un design actuel et des fonctionnalités améliorées.' },
  { icon: '⚡', title: 'Optimisation performance', description: 'Accélérez votre site pour une meilleure expérience utilisateur.' },
  { icon: '🛡️', title: 'Sécurité & SSL', description: 'Protégez votre site et vos données avec nos solutions de sécurité avancées.' }
]

// Processus
const process = [
  { step: '01', title: 'Analyse', description: 'Nous étudions votre projet en détail.' },
  { step: '02', title: 'Conception', description: 'Création et validation des maquettes.' },
  { step: '03', title: 'Développement', description: 'Programmation avec les dernières technos.' },
  { step: '04', title: 'Tests', description: 'Vérification sur tous les appareils.' },
  { step: '05', title: 'Mise en ligne', description: 'Déploiement et formation.' }
]

useHead({
  title: 'Nos Services - VNP-WEB'
})
</script>

<style scoped>
.services-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
}

/* Hero Section */
.services-hero {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}
.hero-container h1 { font-size: 3rem; margin-bottom: 15px; }
.hero-container p { font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }

/* Sections globales */
.main-services, .additional-services, .process-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.additional-services { background-color: #f9fafb; max-width: 100%; }
.additional-grid { max-width: 1200px; margin: 0 auto; }

.section-header { text-align: center; margin-bottom: 50px; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 10px; }
.section-header p { color: #64748b; font-size: 1.1rem; }

/* Grid Services Principaux */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  overflow: hidden;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
}
.service-card:hover { border-color: #0047ff; transform: translateY(-5px); }

.popular-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #0047ff;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 2;
}

.service-image { height: 200px; overflow: hidden; }
.service-image img { width: 100%; height: 100%; object-fit: cover; }

.service-content { 
  padding: 25px; 
  display: flex; 
  flex-direction: column; 
  flex-grow: 1; 
}
.service-content h3 { font-size: 1.5rem; margin-bottom: 10px; }
.service-desc { color: #64748b; margin-bottom: 20px; line-height: 1.5; min-height: 50px; }

.features-list { 
  list-style: none; 
  padding: 0; 
  margin-bottom: 25px; 
  flex-grow: 1; 
}
.features-list li { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.9rem; color: #475569; }
.check-icon { font-size: 0.9rem; }

/* Grid Services Additionnels */
.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}
.additional-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}
.icon-wrapper {
  background: #e0f2fe;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

/* Processus */
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  text-align: center;
}
.step-number {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 15px;
}
.process-step p { color: #64748b; font-size: 0.9rem; }

/* CTA Bottom */
.bottom-cta {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}
.cta-content h2 { font-size: 2.5rem; margin-bottom: 15px; }
.cta-content p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 30px; }

/* Boutons modifiés pour NuxtLink */
.btn-primary {
  background: #0047ff;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  transition: background 0.3s;
  margin-top: auto; /* Pousse le bouton toujours en bas de la carte */
}
.btn-primary:hover { background: #0030cc; }

.btn-white {
  background: white;
  color: #0047ff;
  padding: 15px 35px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s;
}
.btn-white:hover { transform: translateY(-2px); }
</style>