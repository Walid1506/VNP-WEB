<template>
  <div class="home-page">
    
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <h1>{{ $t('home.hero.title_start') }} <span class="highlight">{{ $t('home.hero.title_highlight') }}</span></h1>
          <p>{{ $t('home.hero.subtitle') }}</p>
          <div class="hero-buttons">
            <button class="btn-primary">{{ $t('home.hero.btn') }}</button>
            <button class="btn-secondary"></button>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="image-placeholder">Image de présentation</div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <h2 class="stat-number">150+</h2>
          <p class="stat-label">{{ $t('home.stats.projects') }}</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">98%</h2>
          <p class="stat-label">{{ $t('home.stats.satisfaction') }}</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">5 ans</h2>
          <p class="stat-label">{{ $t('home.stats.experience') }}</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">24/7</h2>
          <p class="stat-label">{{ $t('home.stats.support') }}</p>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="section-header">
        <h2>{{ $t('home.services.title') }}</h2>
        <p>{{ $t('home.services.subtitle') }}</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="icon-wrapper">💻</div>
          <h3>{{ $t('home.services.web_writing') }}</h3>
          <p>{{ $t('home.services.web_writing_desc') }}</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">📈</div>
          <h3>{{ $t('home.services.seo') }}</h3>
          <p>{{ $t('home.services.seo_desc') }}</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">📱</div>
          <h3>{{ $t('home.services.wp') }}</h3>
          <p>{{ $t('home.services.wp_desc') }}</p>
        </div>
      </div>
      <div class="text-center">
        <button class="btn-outline">{{ $t('home.services.btn') }}</button>
      </div>
    </section>

    <section class="features-section">
      <div class="section-header">
        <h2>{{ $t('home.features.title') }}</h2>
        <p>{{ $t('home.features.subtitle') }}</p>
      </div>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon blue-circle">📅</div>
          <h3>{{ $t('home.features.booking') }}</h3>
          <p>{{ $t('home.features.booking_desc') }}</p>
          <a href="#" class="feature-link">{{ $t('home.features.learn_more') }}</a>
        </div>
        <div class="feature-item">
          <div class="feature-icon blue-circle">💬</div>
          <h3>{{ $t('home.features.chat') }}</h3>
          <p>{{ $t('home.features.chat_desc') }}</p>
          <a href="#" class="feature-link">{{ $t('home.features.learn_more') }}</a>
        </div>
        <div class="feature-item">
          <div class="feature-icon blue-circle">🛡️</div>
          <h3>{{ $t('home.features.payment') }}</h3>
          <p>{{ $t('home.features.payment_desc') }}</p>
          <a href="#" class="feature-link">{{ $t('home.features.learn_more') }}</a>
        </div>
      </div>
    </section>

    <section class="why-us-section">
      <div class="section-header">
        <h2>{{ $t('home.why_us.title') }}</h2>
        <p>{{ $t('home.why_us.subtitle') }}</p>
      </div>
      <div class="why-us-grid">
        <div class="why-item">
          <div class="feature-icon blue-circle">👥</div>
          <h3>{{ $t('home.why_us.team') }}</h3>
          <p>{{ $t('home.why_us.team_desc') }}</p>
        </div>
        <div class="why-item">
          <div class="feature-icon blue-circle">🏅</div>
          <h3>{{ $t('home.why_us.quality') }}</h3>
          <p>{{ $t('home.why_us.quality_desc') }}</p>
        </div>
        <div class="why-item">
          <div class="feature-icon blue-circle">⚡</div>
          <h3>{{ $t('home.why_us.speed') }}</h3>
          <p>{{ $t('home.why_us.speed_desc') }}</p>
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="section-header">
        <h2>{{ $t('home.testimonials.title') }}</h2>
        <p>{{ $t('home.testimonials.subtitle') }}</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👩</div>
            <div>
              <h4>{{ $t('home.testimonials.t1_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t1_role') }}</span>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t1_quote') }}</p>
        </div>
        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👨‍🦲</div>
            <div>
              <h4>{{ $t('home.testimonials.t2_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t2_role') }}</span>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t2_quote') }}</p>
        </div>
        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👩‍🦰</div>
            <div>
              <h4>{{ $t('home.testimonials.t3_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t3_role') }}</span>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t3_quote') }}</p>
        </div>
      </div>
    </section>

    <section class="bottom-cta-section">
      <div class="cta-content">
        <h2>{{ $t('home.cta.title') }}</h2>
        <p>{{ $t('home.cta.subtitle') }}</p>
        <button class="btn-primary">{{ $t('home.cta.btn') }}</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.section-header p {
  font-size: 1.1rem;
  color: #666;
}
.text-center { text-align: center; }

.hero-section {
  background: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  background-size: 40px 40px, 40px 40px, 100% 100%;
  padding: 80px 20px;
  color: white;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
}
.hero-text { flex: 1; }
.hero-text h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
}
.highlight { color: #00ffff; }
.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}
.hero-buttons {
  display: flex;
  gap: 15px;
}
.btn-primary {
  background-color: white;
  color: #0047ff;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn-primary:hover { transform: translateY(-2px); }
.btn-secondary {
  background-color: white;
  border: none;
  width: 100px;
  border-radius: 8px;
  opacity: 0.9;
}
.hero-image-wrapper { flex: 1; }
.image-placeholder {
  width: 100%;
  height: 350px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.stats-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.stats-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;
}
.stat-number {
  font-size: 3rem;
  color: #0047ff;
  margin: 0 0 10px 0;
}
.stat-label {
  color: #666;
  font-weight: 500;
  margin: 0;
}

.services-section {
  padding: 80px 20px;
  background-color: #fafafa;
}
.services-grid {
  max-width: 1200px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.service-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.service-card:hover { transform: translateY(-5px); }
.icon-wrapper {
  background: #f0f4ff;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #0047ff;
}
.btn-outline {
  background: transparent;
  border: 1px solid #ddd;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline:hover {
  border-color: #0047ff;
  color: #0047ff;
}

.features-section, .why-us-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.features-grid, .why-us-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  text-align: center;
}
.blue-circle {
  background-color: #0047ff;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 20px;
}
.feature-item p, .why-item p { color: #666; }
.feature-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 15px;
  border: 1px solid #eee;
  padding: 8px 15px;
  border-radius: 20px;
}

.testimonials-section {
  padding: 80px 20px;
  background-color: #fafafa;
}
.testimonials-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.testimonial-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.client-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}
.client-avatar {
  font-size: 2.5rem;
  background: #f0f0f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.client-info h4 { margin: 0; }
.client-role { color: #888; font-size: 0.9rem; }
.quote { font-style: italic; color: #555; }

.bottom-cta-section {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
}
.cta-content h2 { font-size: 2.5rem; margin-bottom: 15px; }
.cta-content p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
</style>