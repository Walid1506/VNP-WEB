<template>
  <div class="legal-page">
    
    <section class="legal-hero">
      <div class="hero-content">
        <h1>{{ $t('legal.title') }}</h1>
        <p>{{ $t('legal.subtitle') }}</p>
      </div>
    </section>

    <div class="legal-container">
      <div class="legal-card">
        
        <section class="legal-section">
          <div class="section-title">
            <span class="icon-box">🏢</span>
            <h2>{{ $t('legal.publisher.title') }}</h2>
          </div>
          <div class="section-content">
            <p><strong>{{ $t('legal.publisher.company') }} :</strong> VNP-WEB</p>
            <p><strong>{{ $t('legal.publisher.form') }} :</strong> {{ $t('legal.publisher.formValue') }}</p>
            <p><strong>{{ $t('legal.publisher.director') }} :</strong> Guillaume PRUVOST</p>
            
            <p><span class="icon">📧</span> <strong>{{ $t('legal.publisher.email') }} :</strong> <a href="mailto:sio.pruvost@gmail.com">sio.pruvost@gmail.com</a></p>
            <p><span class="icon">📞</span> <strong>{{ $t('legal.publisher.phone') }} :</strong> +33 6 45 87 70 74</p>
          </div>
        </section>

        <section class="legal-section">
          <div class="section-title">
            <span class="icon-box">🌍</span>
            <h2>{{ $t('legal.hosting.title') }}</h2>
          </div>
          <div class="section-content">
            <p><strong>{{ $t('legal.hosting.provider') }} :</strong> Vercel Inc.</p>
            <p><strong>{{ $t('legal.hosting.address') }} :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          </div>
        </section>

        <section class="legal-section">
          <div class="section-title">
            <span class="icon-box">🛡️</span>
            <h2>{{ $t('legal.intellectual.title') }}</h2>
          </div>
          <div class="section-content">
            <p>{{ $t('legal.intellectual.content1') }}</p>
            <p>{{ $t('legal.intellectual.content2') }}</p>
            <p>{{ $t('legal.intellectual.content3') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.privacy.title') }}</h2>
          
          <div class="subsection">
            <h3>{{ $t('legal.privacy.collection.title') }}</h3>
            <p>{{ $t('legal.privacy.collection.content') }}</p>
            <ul>
              <li>{{ $t('legal.privacy.collection.item1') }}</li>
              <li>{{ $t('legal.privacy.collection.item2') }}</li>
              <li>{{ $t('legal.privacy.collection.item3') }}</li>
              <li>{{ $t('legal.privacy.collection.item4') }}</li>
            </ul>
          </div>

          <div class="subsection">
            <h3>{{ $t('legal.privacy.usage.title') }}</h3>
            <p>{{ $t('legal.privacy.usage.content') }}</p>
            <ul>
              <li>{{ $t('legal.privacy.usage.item1') }}</li>
              <li>{{ $t('legal.privacy.usage.item2') }}</li>
              <li>{{ $t('legal.privacy.usage.item3') }}</li>
              <li>{{ $t('legal.privacy.usage.item4') }}</li>
            </ul>
          </div>

          <div class="subsection">
            <h3>{{ $t('legal.privacy.rights.title') }}</h3>
            <p>{{ $t('legal.privacy.rights.content') }}</p>
            <ul>
              <li>{{ $t('legal.privacy.rights.item1') }}</li>
              <li>{{ $t('legal.privacy.rights.item2') }}</li>
              <li>{{ $t('legal.privacy.rights.item3') }}</li>
              <li>{{ $t('legal.privacy.rights.item4') }}</li>
            </ul>
          </div>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.cookies.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('legal.cookies.content1') }}</p>
            <p>{{ $t('legal.cookies.content2') }}</p>
            <div class="info-box">
              <p><strong>{{ $t('legal.cookies.note') }} :</strong> {{ $t('legal.cookies.noteContent') }}</p>
            </div>
          </div>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.liability.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('legal.liability.content1') }}</p>
            <p>{{ $t('legal.liability.content2') }}</p>
            <p>{{ $t('legal.liability.content3') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.links.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('legal.links.content1') }}</p>
            <p>{{ $t('legal.links.content2') }}</p>
          </div>
        </section>

        <section class="legal-section">
          <h2>{{ $t('legal.law.title') }}</h2>
          <div class="section-content">
            <p>{{ $t('legal.law.content') }}</p>
          </div>
        </section>

        <section class="legal-contact">
          <h2>{{ $t('legal.contact.title') }}</h2>
          <div class="contact-box">
            <p>{{ $t('legal.contact.content') }}</p>
            <div class="contact-details">
              <p><span class="icon">📧</span> <a href="mailto:sio.pruvost@gmail.com">sio.pruvost@gmail.com</a></p>
              <p><span class="icon">📞</span> +33 6 45 87 70 74</p>
            </div>
          </div>
        </section>

        <div class="updated-date">
          <p>{{ $t('legal.updated') }} : {{ currentDate }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Date actuelle formatée
const currentDate = computed(() => {
  return new Date().toLocaleDateString('fr-FR')
})

// Meta tags SEO
useHead({
  title: 'Mentions Légales - VNP-WEB',
  meta: [
    { name: 'description', content: 'Mentions légales, politique de confidentialité et conditions d\'utilisation du site VNP-WEB.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.legal-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
  padding-bottom: 60px;
}

.legal-hero {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  color: white;
  padding: 80px 20px 100px;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.2rem;
  color: #e0f2fe;
}

.legal-container {
  max-width: 900px;
  margin: -60px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.legal-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  padding: 40px;
}

@media (max-width: 768px) {
  .legal-card {
    padding: 25px;
  }
}

.legal-section {
  margin-bottom: 45px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.icon-box {
  background: #f0f9ff;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.4rem;
}

.legal-section h2 {
  font-size: 1.5rem;
  color: #0f172a;
  margin: 0;
}

.section-content p, .subsection p {
  color: #475569;
  line-height: 1.7;
  margin-bottom: 12px;
}

.section-content strong {
  color: #1e293b;
}

.contact-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 15px;
}

.icon {
  margin-right: 8px;
}

a {
  color: #0047ff;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.subsection {
  margin-top: 25px;
  margin-bottom: 25px;
}

.subsection h3 {
  font-size: 1.1rem;
  color: #1e293b;
  margin-bottom: 12px;
  font-weight: bold;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #475569;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.info-box {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  padding: 15px 20px;
  border-radius: 10px;
  margin-top: 15px;
  color: #0369a1;
  font-size: 0.95rem;
}

.legal-contact {
  border-top: 1px solid #e2e8f0;
  padding-top: 40px;
}

.legal-contact h2 {
  font-size: 1.5rem;
  color: #0f172a;
  margin-bottom: 20px;
}

.contact-box {
  background: linear-gradient(to bottom right, #f0f9ff, #cffafe);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #bae6fd;
}

.contact-details {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.updated-date {
  text-align: center;
  color: #94a3b8;
  border-top: 1px solid #e2e8f0;
  padding-top: 20px;
  margin-top: 40px;
  font-size: 0.9rem;
}
</style>