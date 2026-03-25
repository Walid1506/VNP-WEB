<template>
  <div class="contact-page">
    
    <section class="contact-hero">
      <div class="hero-container">
        <h1>{{ $t('contact.title') }}</h1>
        <p>{{ $t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-grid">
        
        <div class="contact-form-side">
          <h2>{{ $t('contact.formTitle') }}</h2>
          <p class="form-subtitle">{{ $t('contact.formSubtitle') }}</p>

          <div v-if="isSubmitted" class="success-message">
            <span>✅</span> {{ $t('contact.form.success') }}
          </div>

          <form @submit.prevent="handleSubmit" class="contact-form">
            
            <div class="form-row">
              <div class="form-group">
                <label for="name">{{ $t('contact.form.name') }} *</label>
                <input id="name" v-model="formData.name" type="text" required placeholder="Jean Dupont" />
              </div>
              <div class="form-group">
                <label for="email">{{ $t('contact.form.email') }} *</label>
                <input id="email" v-model="formData.email" type="email" required placeholder="jean.dupont@exemple.fr" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="phone">{{ $t('contact.form.phone') }}</label>
                <input id="phone" v-model="formData.phone" type="tel" placeholder="+33 6 12 34 56 78" />
              </div>
              <div class="form-group">
                <label for="subject">{{ $t('contact.form.subject') }} *</label>
                <input id="subject" v-model="formData.subject" type="text" required :placeholder="$t('contact.form.subjectPlaceholder')" />
              </div>
            </div>

            <div class="form-group">
              <label for="message">{{ $t('contact.form.message') }} *</label>
              <textarea id="message" v-model="formData.message" required rows="6" :placeholder="$t('contact.form.messagePlaceholder')"></textarea>
            </div>

            <button type="submit" :disabled="isLoading" class="btn-primary">
              <span v-if="!isLoading">📤 </span>
              {{ isLoading ? $t('contact.form.sending') : $t('contact.form.send') }}
            </button>
          </form>
        </div>

        <div class="contact-info-side">
          <h3>{{ $t('contact.info.title') }}</h3>

          <div class="info-list">
            <div class="info-item">
              <div class="icon-circle">📧</div>
              <div>
                <div class="info-label">{{ $t('contact.info.email') }}</div>
                <a href="mailto:sio.pruvost@gmail.com" class="info-link">sio.pruvost@gmail.com</a>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-circle">📞</div>
              <div>
                <div class="info-label">{{ $t('contact.info.phone') }}</div>
                <a href="tel:+33123456789" class="info-link">+33 6 45 87 70 74</a>
              </div>
            </div>

            <div class="info-item">
              <div class="icon-circle">🕒</div>
              <div>
                <div class="info-label">{{ $t('contact.info.hours') }}</div>
                <p class="info-text">{{ $t('contact.info.hoursText') }}<br />{{ $t('contact.info.hoursWeekend') }}</p>
              </div>
            </div>
          </div>

          <div class="social-section">
            <h4>{{ $t('contact.info.follow') }}</h4>
            <div class="social-links">
  
  <a href="https://www.facebook.com/gp.vnp.web.redaction.seo.traduction.wordpress.crea?locale=fr_FR" target="_blank" rel="noopener noreferrer" class="social-btn facebook" aria-label="Facebook">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z"/>
    </svg>
  </a>

  <a href="https://x.com/PruvostSEO" target="_blank" rel="noopener noreferrer" class="social-btn twitter" aria-label="X (Twitter)">
    <span style="font-size: 1.2rem;">𝕏</span>
  </a>

  <a href="https://www.linkedin.com/in/vnp-web-redaction-seo-wordpress-traduction/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>

  <a href="https://www.instagram.com/vnpweb/?hl=fr" target="_blank" rel="noopener noreferrer" class="social-btn instagram" aria-label="Instagram">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>

</div>
          </div>
        </div>
        
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// État du formulaire
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)
const isLoading = ref(false)

// Pré-remplissage automatique si l'utilisateur vient de la page Services
onMounted(() => {
  if (route.query.service) {
    // Formatte le nom du service (ex: "redaction-web" -> "REDACTION WEB")
    const serviceName = route.query.service.replace(/-/g, ' ').toUpperCase()
    formData.value.subject = `Demande de devis : ${serviceName}`
  }
})

// Gestion de l'envoi
const handleSubmit = () => {
  isLoading.value = true

  // Simulation d'un appel API (1 seconde)
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true

    // Réinitialise le formulaire
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }

    // Cache le message de succès après 5 secondes
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  }, 1000)
}

useHead({
  title: 'Contact - VNP-WEB',
  meta: [
    { name: 'description', content: 'Contactez VNP-WEB pour vos projets web, SEO, rédaction et traduction. Notre équipe est à votre écoute.' }
  ]
})
</script>

<style scoped>
.contact-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
  background-color: #f9fafb;
  min-height: 100vh;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}
.hero-container h1 { font-size: 3rem; margin-bottom: 15px; }
.hero-container p { font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }

/* Grid principale */
.contact-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: -40px auto 0;
  position: relative;
  z-index: 10;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  overflow: hidden;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Côté Formulaire */
.contact-form-side {
  padding: 50px;
}
.contact-form-side h2 { font-size: 2rem; margin-bottom: 10px; color: #0f172a; }
.form-subtitle { color: #64748b; margin-bottom: 30px; }

.success-message {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; gap: 0; }
}

.form-group { margin-bottom: 20px; }
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  color: #334155;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.form-group input:focus, .form-group textarea:focus {
  border-color: #0047ff;
  box-shadow: 0 0 0 3px rgba(0, 71, 255, 0.1);
}

.btn-primary {
  background: #0047ff;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.btn-primary:hover { background: #0030cc; }
.btn-primary:disabled { background: #94a3b8; cursor: not-allowed; }

/* Côté Informations */
.contact-info-side {
  background: #f8fafc;
  padding: 50px;
  border-left: 1px solid #f1f5f9;
}
.contact-info-side h3 { font-size: 1.5rem; margin-bottom: 30px; color: #0f172a; }

.info-list { display: flex; flex-direction: column; gap: 30px; }
.info-item { display: flex; gap: 20px; align-items: flex-start; }

.icon-circle {
  background: #e0f2fe;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-label { font-weight: bold; color: #1e293b; margin-bottom: 5px; }
.info-link { color: #475569; text-decoration: none; transition: color 0.2s; }
.info-link:hover { color: #0047ff; }
.info-text { color: #475569; line-height: 1.5; margin: 0; }

.social-section {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid #e2e8f0;
}
.social-section h4 { margin-bottom: 20px; color: #1e293b; }
.social-links { display: flex; gap: 15px; }

.social-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
}
.social-btn:hover { transform: translateY(-3px); }
.facebook { background-color: #1877f2; }
.twitter { background-color: #000000; }
.linkedin { background-color: #0a66c2; }
.instagram { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
</style>