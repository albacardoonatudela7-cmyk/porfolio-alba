<script setup lang="ts">
import { ref } from 'vue'
import { Send, Instagram, Youtube, Mail } from 'lucide-vue-next'

// Variables reactivas para el formulario
const nombre = ref('')
const email = ref('')
const mensaje = ref('')

const enviarFormulario = () => {
  // Manejo de eventos: Control de acciones
  alert(`¡Gracias ${nombre.value}! He recibido tu mensaje. (Simulación de envío)`)
  nombre.value = ''
  email.value = ''
  mensaje.value = ''
}
</script>

<template>
  <div class="max-w-2xl mx-auto py-10">
    <h2 class="text-4xl font-black uppercase mb-4 tracking-tighter text-center">Contacto</h2>
    <p class="text-gray-500 text-center mb-10">¿Hablamos de tu próximo proyecto o edición?</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="space-y-6">
        <h3 class="font-bold text-xl mb-4">Mis redes</h3>
        <div class="flex items-center gap-3 text-gray-600">
          <Instagram :size="20" /> <span>@tu_usuario</span>
        </div>
        <div class="flex items-center gap-3 text-gray-600">
          <Youtube :size="20" /> <span>Alba Cardona Edición</span>
        </div>
        <div class="flex items-center gap-3 text-gray-600">
          <Mail :size="20" /> <span>contacto@albacardona.com</span>
        </div>
      </div>

      <form @submit.prevent="enviarFormulario" class="space-y-4">
        <input 
          v-model="nombre" 
          type="text" 
          placeholder="Nombre" 
          required 
          class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-black"
        >
        <input 
          v-model="email" 
          type="email" 
          placeholder="Email" 
          required 
          class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-black"
        >
        <textarea 
          v-model="mensaje" 
          placeholder="¿En qué puedo ayudarte?" 
          rows="4" 
          required 
          class="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-black"
        ></textarea>
        
        <button 
          type="submit" 
          class="w-full bg-black text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          ENVIAR <Send :size="18" />
        </button>
      </form>
    </div>
  </div>
</template>