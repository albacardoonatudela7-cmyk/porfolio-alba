<script setup lang="ts">
import { ref } from 'vue'
import AboutEducation from '@/components/AboutEducation.vue'
import AboutSkills from '@/components/AboutSkills.vue'

const activeTab = ref('estudios')
</script>

<template>
  <div class="max-w-4xl mx-auto py-10 px-6 animate-in fade-in duration-700">
    <div class="flex flex-col md:flex-row gap-12 items-center mb-16 text-left">
      <img src="/img/yo.jpg" alt="Alba Cardona" class="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-2xl" />
      <div class="space-y-4">
        <h2 class="text-5xl font-black uppercase tracking-tighter">SOBRE MÍ</h2>
        <p class="text-xl font-bold">Me defino como una persona <span class="text-blue-600">creativa, ambiciosa y trabajadora</span>.</p>
        <p class="text-gray-500 font-light leading-relaxed">
          Tengo 19 años y compagino mis estudios con mi trabajo actual como editora de vídeo para influencers, aportando una visión dinámica y técnica a cada proyecto.
        </p>
      </div>
    </div>

    <div class="flex gap-8 border-b border-gray-100 mb-10">
      <button 
        @click="activeTab = 'estudios'"
        class="pb-4 text-sm font-black uppercase tracking-widest transition-all"
        :class="activeTab === 'estudios' ? 'border-b-2 border-black text-black' : 'text-gray-300'"
      >
        Estudios
      </button>
      <button 
        @click="activeTab = 'habilidades'"
        class="pb-4 text-sm font-black uppercase tracking-widest transition-all"
        :class="activeTab === 'habilidades' ? 'border-b-2 border-black text-black' : 'text-gray-300'"
      >
        Habilidades
      </button>
    </div>

    <div class="min-h-200px">
      <AboutEducation v-if="activeTab === 'estudios'" />
      <AboutSkills v-if="activeTab === 'habilidades'" />
    </div>
  </div>
</template>