<template>
  <footer class="app-footer">
    <div class="footer-container">
      
      <div class="footer-col brand-col">
        <h3>VNP-WEB</h3>
        <p>{{ $t('footer.description') }}</p>
        <div class="social-links">
          <a href="#">Fb</a>
          <a href="#">Tw</a>
          <a href="#">In</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>{{ $t('footer.quick_links') }}</h4>
        <nav>
          <NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink to="/services">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink to="/portfolio">{{ $t('nav.portfolio') }}</NuxtLink>
          <NuxtLink to="/blog">{{ $t('nav.blog') }}</NuxtLink>
          <NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink>
        </nav>
      </div>

      <div class="footer-col">
        <h4>{{ $t('footer.our_services') }}</h4>
        <nav>
          <a href="#">{{ $t('footer.services_list.web_writing') }}</a>
          <a href="#">{{ $t('footer.services_list.seo') }}</a>
          <a href="#">{{ $t('footer.services_list.wordpress') }}</a>
          <a href="#">{{ $t('footer.services_list.translation') }}</a>
          <a href="#">{{ $t('footer.services_list.site_creation') }}</a>
        </nav>
      </div>

      <div class="footer-col">
        <h4>{{ $t('footer.contact_title') }}</h4>
        <div class="contact-info">
          <p>📧 sio.pruvost@gmail.com</p>
          <p>📞 +33 6 45 87 70 74</p>
        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <p>
        &copy; 2026 VNP-WEB. {{ $t('footer.rights') }} | 
        <NuxtLink to="/legale" class="legal-link">{{ $t('footer.legal') }}</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #0f172a;
  color: #cbd5e1;
  padding: 60px 20px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.footer-col h4 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.footer-col p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.footer-col nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col nav a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col nav a:hover {
  color: #00b4ff;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.contact-info p {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #334155;
  padding-top: 20px;
  font-size: 0.9rem;
}

/* Nouveau style pour le lien des mentions légales */
.legal-link {
  color: #cbd5e1;
  text-decoration: none;
  margin-left: 5px;
  transition: color 0.2s;
}
.legal-link:hover {
  color: #00b4ff;
  text-decoration: underline;
}
</style>