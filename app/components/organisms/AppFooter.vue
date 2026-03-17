<template>
  <footer class="app-footer">
    <div class="footer-container">
      
      <div class="footer-col brand-col">
        <h3>VNP-WEB</h3>
        <p>Développement web professionnel, SEO et rédaction de contenu pour votre réussite en ligne.</p>
        <div class="social-links">
          <a href="#">Fb</a>
          <a href="#">Tw</a>
          <a href="#">In</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Liens rapides</h4>
        <nav>
          <NuxtLink to="/">Accueil</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
      </div>

      <div class="footer-col">
        <h4>Nos Services</h4>
        <nav>
          <a href="#">Rédaction web</a>
          <a href="#">SEO</a>
          <a href="#">WordPress</a>
          <a href="#">Traduction EN-FR</a>
          <a href="#">Création de sites</a>
        </nav>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <div class="contact-info">
          <p>📧 sio.pruvost@gmail.com</p>
          <p>📞 +33 1 23 45 67 89</p>
          <p>📍 123 Avenue de la République<br>75011 Paris, France</p>
        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 VNP-WEB. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  /* On force l'application de la police sur tout le footer */
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
</style>