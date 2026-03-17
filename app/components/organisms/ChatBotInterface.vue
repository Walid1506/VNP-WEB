<template>
  <div class="chatbot-container">
    
    <button 
      v-if="!isOpen" 
      class="chat-bubble-button"
      @click="openChat"
    >
      <svg class="message-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    </button>

    <div 
      v-if="isOpen" 
      class="chat-window"
    >
      <div class="chat-header">
        <div class="header-info">
          <div class="bot-avatar-header">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1V10a3 3 0 0 1 3-3h1V5.73A2 2 0 1 1 12 2zm0 2a.5.5 0 0 0-.5.5c0 .28.22.5.5.5s.5-.22.5-.5A.5.5 0 0 0 12 4zm3 5H9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-4.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
            </svg>
          </div>
          <div>
            <h3>{{ t('chatbot.title') }}</h3>
            <span class="status">{{ t('chatbot.status') }}</span>
          </div>
        </div>
        <button class="close-btn" @click="isOpen = false">✕</button>
      </div>

      <div class="chat-body" ref="chatBodyRef">
        <div class="chat-messages">
          
          <div 
            v-for="msg in messages" 
            :key="msg.id" 
            :class="['message', msg.sender === 'bot' ? 'bot-message' : 'user-message']"
          >
            <div :class="msg.sender === 'bot' ? 'bot-logo' : 'user-logo'">
              <svg v-if="msg.sender === 'bot'" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1V10a3 3 0 0 1 3-3h1V5.73A2 2 0 1 1 12 2zm0 2a.5.5 0 0 0-.5.5c0 .28.22.5.5.5s.5-.22.5-.5A.5.5 0 0 0 12 4zm3 5H9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-4.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
              <span v-else>👤</span>
            </div>
            
            <div class="message-content">
              <p v-if="msg.isTranslation">{{ t(msg.textKey) }}</p>
              <p v-else>{{ msg.text }}</p>
              
              <span class="timestamp">{{ msg.time }}</span>
            </div>
          </div>

        </div>
      </div>

      <div class="chat-input">
        <input 
          type="text" 
          v-model="newMessage" 
          :placeholder="t('chatbot.placeholder')" 
          @keyup.enter="sendMessage"
        />
        <button class="send-btn" @click="sendMessage">
          <svg class="plane-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isOpen = ref(false);
const newMessage = ref('');
const chatBodyRef = ref(null);
const messages = ref([]);

const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatBodyRef.value) {
    chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight;
  }
};

const openChat = () => {
  isOpen.value = true;
  if (messages.value.length === 0) {
    messages.value.push({
      id: Date.now(),
      textKey: 'chatbot.welcome_msg', // On stocke la CLÉ au lieu du texte traduit
      isTranslation: true,            // On signale au HTML qu'il faut traduire ceci
      sender: 'bot',
      time: getCurrentTime()
    });
  }
};

const sendMessage = () => {
  if (newMessage.value.trim() !== '') {
    // 1. Message de l'utilisateur
    messages.value.push({
      id: Date.now(),
      text: newMessage.value,         // Texte brut de l'utilisateur
      isTranslation: false,           // Ce n'est pas une clé de traduction
      sender: 'user',
      time: getCurrentTime()
    });
    
    newMessage.value = '';
    scrollToBottom();

    // 2. Réponse automatique du bot
    setTimeout(() => {
      messages.value.push({
        id: Date.now(),
        textKey: 'chatbot.wait_msg',  // On stocke la CLÉ de la réponse
        isTranslation: true,          // On signale qu'il faut traduire
        sender: 'bot',
        time: getCurrentTime()
      });
      scrollToBottom();
    }, 1000);
  }
};
</script>

<style scoped>
/* Conserve 100% de ton CSS ici, aucune modification n'est requise ! */
.chatbot-container { font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif; position: fixed; bottom: 20px; right: 20px; z-index: 1000; display: flex; flex-direction: column; align-items: flex-end; }
.chat-bubble-button { background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); color: white; border: none; width: 60px; height: 60px; border-radius: 50%; box-shadow: 0 5px 20px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }
.chat-bubble-button:hover { transform: scale(1.05); }
.message-icon { width: 28px; height: 28px; fill: white; }
.chat-window { width: 380px; max-width: 90vw; background-color: #ffffff; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column; height: 550px; max-height: 80vh; }
.chat-header { background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
.header-info { display: flex; align-items: center; gap: 15px; }
.bot-avatar-header { background: rgba(255, 255, 255, 0.2); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
.chat-header h3 { margin: 0; font-size: 1.1rem; font-weight: bold; }
.status { font-size: 0.85rem; opacity: 0.8; }
.close-btn { background: none; border: none; color: white; font-size: 1.3rem; cursor: pointer; opacity: 0.7; }
.close-btn:hover { opacity: 1; }
.chat-body { flex-grow: 1; padding: 20px; overflow-y: auto; background-color: #f9fafb; scroll-behavior: smooth; }
.chat-messages { display: flex; flex-direction: column; gap: 15px; }
.message { display: flex; gap: 10px; align-items: flex-start; }
.bot-logo, .user-logo { font-size: 1.2rem; background-color: #f0f0f0; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #0047ff; }
.message-content { background-color: white; padding: 15px; border-radius: 10px 10px 10px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 80%; }
.user-message { flex-direction: row-reverse; align-self: flex-end; }
.user-message .message-content { background-color: #0047ff; color: white; border-radius: 10px 10px 0 10px; }
.message p { margin: 0; font-size: 0.95rem; line-height: 1.5; word-wrap: break-word; }
.timestamp { font-size: 0.75rem; color: #a0aec0; margin-top: 5px; display: block; text-align: right; }
.user-message .timestamp { color: rgba(255,255,255,0.7); }
.chat-input { display: flex; padding: 15px 20px; background-color: white; border-top: 1px solid #edf2f7; gap: 10px; align-items: center; }
.chat-input input { flex-grow: 1; border: 1px solid #e2e8f0; padding: 10px 15px; border-radius: 20px; outline: none; }
.chat-input input:focus { border-color: #0047ff; }
.send-btn { background-color: #0f172a; color: white; border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 0.2s; flex-shrink: 0; }
.send-btn:hover { background-color: #1e293b; }
.plane-icon { width: 18px; height: 18px; fill: currentColor; margin-left: -2px; }
</style>

