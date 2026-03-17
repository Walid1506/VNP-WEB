<template>
  <div class="service-card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>
    <div class="card-footer">
      <span class="price">{{ price }} €</span>
      <button class="book-btn" @click="$emit('book', id)">Réserver</button>
    </div>
  </div>
</template>

<script setup>
// On définit les propriétés (props) que la carte va recevoir de la base de données
defineProps({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, default: 'Description à venir...' },
  price: { type: Number, required: true }
});

// On déclare l'événement 'book' pour le système de réservation futur
defineEmits(['book']);
</script>

<style scoped>
.service-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-header h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.25rem;
}

.card-body {
  flex-grow: 1;
}

.card-body p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #f1f5f9;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #0f172a;
}

.book-btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.book-btn:hover {
  background-color: #2563eb;
}
</style>