<script setup lang="ts">
import { Mail, Instagram, Send, Video } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20 px-6 animate-in fade-in duration-700">
    <div class="space-y-12">
      <div class="space-y-4">
        <h2 class="text-6xl font-black uppercase tracking-tighter text-black">Contacto</h2>
        <p class="text-gray-500 text-lg max-w-xl font-light tracking-wide">
          ¿Tienes un proyecto en mente? Me encantaría ayudarte a darle vida a través del diseño y la edición.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-12">
        <form class="space-y-6" @submit.prevent>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Nombre</label>
              <input type="text" placeholder="Tu nombre" class="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-sm">
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
              <input type="email" placeholder="hola@tuemail.com" class="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-sm">
            </div>
          </div>
          
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Mensaje</label>
            <textarea rows="5" placeholder="Cuéntame sobre tu proyecto..." class="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-sm resize-none"></textarea>
          </div>

          <button class="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all duration-300 group">
            Enviar Mensaje
            <Send :size="16" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>

        <div class="space-y-8">
          <div class="p-8 bg-gray-50 rounded-3xl space-y-6 border border-gray-100">
            <h3 class="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Directo</h3>
            
            <div class="space-y-4">
              <a href="mailto:albacardoonatudela7@gmail.com" class="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group">
                <div class="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  <Mail :size="20" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest">Email</span>
              </a>
              
              <a href="https://www.instagram.com/albacardoona" target="_blank" class="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group">
                <div class="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  <Instagram :size="20" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest">Instagram</span>
              </a>

              <a href="https://www.tiktok.com/@albaacardoona" target="_blank" class="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group">
                <div class="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  <Video :size="20" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>