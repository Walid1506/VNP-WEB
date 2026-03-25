<template>
  <section class="newsletter-section">
    <div class="newsletter-container">
      <div class="newsletter-content">
        
        <div class="newsletter-text">
          <h2>{{ $t('newsletter.title') }}</h2>
          <p>{{ $t('newsletter.subtitle') }}</p>
        </div>

        <form @submit.prevent="handleSubscribe" class="newsletter-form">
          <input 
            v-model="email" 
            type="email" 
            :placeholder="$t('newsletter.placeholder')" 
            required 
            :disabled="isLoading || isSuccess"
            class="newsletter-input"
          />
          <button 
            type="submit" 
            :disabled="isLoading || isSuccess" 
            class="newsletter-btn"
            :class="{ 'btn-success': isSuccess }"
          >
            <span v-if="isLoading">⏳ {{ $t('newsletter.loading') }}</span>
            <span v-else-if="isSuccess">✅ {{ $t('newsletter.success') }}</span>
            <span v-else>✉️ {{ $t('newsletter.button') }}</span>
          </button>
        </form>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isLoading = ref(false)
const isSuccess = ref(false)

const handleSubscribe = async () => {
  isLoading.value = true

  try {
    // APPEL RÉEL À TON API NUXT
    const { data, error } = await useFetch('/api/subscribe', {
      method: 'POST',
      body: { email: email.value }
    })

    if (error.value) throw new Error('Erreur API')

    // Si ça marche
    isSuccess.value = true
    email.value = ''
    
    // Reset du bouton après 4 secondes
    setTimeout(() => {
      isSuccess.value = false
    }, 4000)

  } catch (err) {
    alert("Désolé, une erreur est survenue lors de l'inscription.")
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Garde ton CSS actuel, il est parfait */
.newsletter-section {
  padding: 60px 20px;
  background-color: #f9fafb;
}
.newsletter-container {
  max-width: 1200px;
  margin: 0 auto;
}
.newsletter-content {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
}
.newsletter-text {
  flex: 1;
  color: white;
}
.newsletter-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: white;
}
.newsletter-text p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
}
.newsletter-form {
  flex: 1;
  display: flex;
  gap: 15px;
  max-width: 500px;
  width: 100%;
}
.newsletter-input {
  flex: 1;
  padding: 15px 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;
}
.newsletter-input:focus {
  border-color: #00b4ff;
  box-shadow: 0 0 0 3px rgba(0, 180, 255, 0.2);
}
.newsletter-input:disabled {
  background-color: #f1f5f9;
  cursor: not-allowed;
}
.newsletter-btn {
  background-color: #0047ff;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  white-space: nowrap;
}
.newsletter-btn:hover:not(:disabled) {
  background-color: #0030cc;
  transform: translateY(-2px);
}
.newsletter-btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}
.newsletter-btn.btn-success {
  background-color: #10b981;
}
@media (max-width: 900px) {
  .newsletter-content {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }
  .newsletter-form {
    flex-direction: column;
    width: 100%;
  }
  .newsletter-btn {
    width: 100%;
  }
}
</style>