<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-text">
        <h1>Créons ensemble votre <span class="highlight">site web parfait</span></h1>
        <p>Des solutions web performantes, modernes et optimisées pour faire grandir votre entreprise.</p>
        <div class="hero-buttons">
          <button class="btn-primary">Demander un devis &rarr;</button>
          <button class="btn-secondary"></button>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <div class="image-placeholder">Image de présentation</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
</style>