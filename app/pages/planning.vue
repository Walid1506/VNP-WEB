<template>
  <div>
    <section class="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Planning des Consultations</h1>
          <p class="text-lg md:text-xl text-blue-100">
            Sélectionnez un créneau disponible pour votre rendez-vous
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          
          <div class="p-6 border-b flex items-center justify-between bg-white">
            <h2 class="text-2xl font-bold text-gray-800 capitalize">
              {{ formattedMonth }}
            </h2>
            
            <div class="flex items-center gap-2">
              <button @click="previousWeek" class="p-2 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button @click="resetToToday" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 font-medium text-gray-700 transition h-10">
                Aujourd'hui
              </button>
              <button @click="nextWeek" class="p-2 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center justify-center w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <div class="min-w-[800px]">
              
              <div class="grid grid-cols-6 border-b bg-gray-50">
                <div class="p-4 border-r border-gray-200"></div> 
                <div v-for="day in calendarDays" :key="day.dateStr" class="p-4 text-center border-r border-gray-200">
                  <div class="text-xs text-gray-600 font-medium uppercase mb-1">{{ day.name }}</div>
                  <div :class="['text-2xl font-bold', day.isToday ? 'text-blue-600' : 'text-gray-900']">
                    {{ day.dayNumber }}
                  </div>
                </div>
              </div>

              <div v-for="time in timeSlots" :key="time" class="grid grid-cols-6 border-b border-gray-100 hover:bg-gray-50/50 transition">
                
                <div class="p-4 border-r border-gray-200 bg-gray-50 font-medium text-sm text-gray-600 flex items-center justify-center">
                  {{ time }}
                </div>
                
                <div v-for="day in calendarDays" :key="day.dateStr + time" class="p-2 border-r border-gray-200 min-h-[80px]">
                  
                  <div v-if="checkIfBooked(day.dateStr, time)" class="h-full w-full rounded-lg bg-gray-100 border border-gray-200 flex flex-col items-center justify-center cursor-not-allowed opacity-70">
                    <span class="text-xs font-semibold text-gray-500 mb-1">Indisponible</span>
                    <div class="w-8 h-1 bg-gray-300 rounded-full"></div>
                  </div>

                  <button v-else @click="openModal(day, time)" class="h-full w-full rounded-lg bg-white border-2 border-dashed border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center group cursor-pointer relative overflow-hidden">
                    <span class="text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-200">
                      Réserver
                    </span>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div v-if="showModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
        <div class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-100 transform transition-all">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Nouveau Rendez-vous</h3>
            <button @click="showModal = false" class="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <div class="bg-blue-50 text-blue-800 p-4 rounded-lg mb-6 flex items-center gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span class="font-medium">Le {{ selectedDateDisplay }} à {{ selectedTime }}</span>
          </div>

          <form @submit.prevent="submitBooking" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Votre Nom complet *</label>
              <input v-model="formData.name" type="text" required placeholder="Jean Dupont" class="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Votre Email *</label>
              <input v-model="formData.email" type="email" required placeholder="jean@exemple.com" class="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Motif du rendez-vous *</label>
              <input v-model="formData.reason" type="text" required placeholder="Ex: Devis création site vitrine" class="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition">
            </div>

            <div class="flex gap-3 mt-8 pt-4 border-t border-gray-100">
              <button type="button" @click="showModal = false" class="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">Annuler</button>
              <button type="submit" :disabled="isLoading" class="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2">
                <span v-if="isLoading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                {{ isLoading ? 'Enregistrement...' : 'Confirmer' }}
              </button>
            </div>
          </form>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// --- CONNEXION BASE DE DONNÉES ---
const supabase = useSupabaseClient()

// --- VARIABLES D'ÉTAT ---
const currentDate = ref(new Date())
const bookedSlots = ref([])
const showModal = ref(false)
const selectedDayObj = ref(null)
const selectedTime = ref('')
const isLoading = ref(false)
const formData = ref({ name: '', email: '', reason: '' })

// Horaires de 9h à 17h
const timeSlots = Array.from({ length: 9 }, (_, i) => `${(9 + i).toString().padStart(2, '0')}:00`)

// --- LOGIQUE DU CALENDRIER ---
const formattedMonth = computed(() => {
  return currentDate.value.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
})

const calendarDays = computed(() => {
  const week = []
  const todayStr = new Date().toDateString()
  const currentDay = new Date(currentDate.value)
  
  const dayOfWeek = currentDay.getDay()
  const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek
  currentDay.setDate(currentDay.getDate() + distanceToMonday)
  
  for (let i = 0; i < 5; i++) {
    const d = new Date(currentDay)
    week.push({
      dateObj: d,
      name: d.toLocaleDateString('fr-FR', { weekday: 'short' }),
      dayNumber: d.getDate(),
      isToday: d.toDateString() === todayStr,
      dateStr: d.toISOString().split('T')[0]
    })
    currentDay.setDate(currentDay.getDate() + 1)
  }
  return week
})

const previousWeek = () => {
  currentDate.value = new Date(currentDate.value.setDate(currentDate.value.getDate() - 7))
}
const nextWeek = () => {
  currentDate.value = new Date(currentDate.value.setDate(currentDate.value.getDate() + 7))
}
const resetToToday = () => {
  currentDate.value = new Date()
}

const checkIfBooked = (dateStr, time) => {
  return bookedSlots.value.includes(`${dateStr}_${time}`)
}

const selectedDateDisplay = computed(() => {
  return selectedDayObj.value ? selectedDayObj.value.dateObj.toLocaleDateString('fr-FR') : ''
})

const openModal = (dayObj, time) => {
  selectedDayObj.value = dayObj
  selectedTime.value = time
  formData.value = { name: '', email: '', reason: '' }
  showModal.value = true
}

// --- ACTIONS BASE DE DONNÉES ET EMAIL ---
const fetchAppointments = async () => {
  try {
    const { data, error } = await supabase.from('appointments').select('date_string, time_string')
    if (!error && data) {
      bookedSlots.value = data.map(app => `${app.date_string}_${app.time_string}`)
    }
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchAppointments()
})

const submitBooking = async () => {
  isLoading.value = true
  try {
    // 1. Sauvegarde dans Supabase
    const { error } = await supabase.from('appointments').insert([{
      date_string: selectedDayObj.value.dateStr,
      time_string: selectedTime.value,
      client_name: formData.value.name,
      client_email: formData.value.email,
      service_reason: formData.value.reason
    }])

    if (error) throw error

    // 2. Appel de l'API pour t'envoyer l'e-mail
    await $fetch('/api/notify-booking', {
      method: 'POST',
      body: {
        name: formData.value.name,
        email: formData.value.email,
        date: selectedDayObj.value.dateStr,
        time: selectedTime.value,
        reason: formData.value.reason
      }
    })

    // 3. Fermeture et mise à jour
    showModal.value = false
    await fetchAppointments()
    alert("Votre rendez-vous a bien été enregistré !")
  } catch (error) {
    alert("Un problème est survenu lors de la réservation.")
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>