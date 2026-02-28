<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { educationData } from '@/data/portfolio';
</script>

<template>
  <div class="max-w-4xl mx-auto py-10 px-6">
    <div class="flex flex-col md:flex-row gap-12 items-start mb-10">
      
      <div 
        class="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:scale-125 hover:shadow-2xl cursor-pointer"
      >
        <img 
          src="/img/yo.jpg" 
          alt="Alba Cardona" 
          class="w-full h-full object-cover"
        />
      </div>

      <div class="space-y-4">
        <h2 class="text-5xl md:text-5x font-black uppercase tracking-tighter text-black">Sobre Mí</h2>
        <div class="text-gray-700 leading-relaxed">
          <p class="text-xl font-medium text-black mb-2">
            Me defino como una persona <span class="text-blue-600">creativa, ambiciosa y trabajadora</span>. 
          </p>
          <p class="text-lg">
           Tengo 19 años y compagino mis estudios con mi trabajo actual como editora de vídeo para influencers, aportando una visión dinámica y técnica a cada proyecto.
          </p>
        </div>
      </div>
    </div>

    <div class="flex gap-4 border-b mb-6">
      <RouterLink to="/sobre-mi/estudios" class="pb-2 px-4 font-bold" active-class="border-b-2 border-black">Estudios</RouterLink>
      <RouterLink to="/sobre-mi/habilidades" class="pb-2 px-4 font-bold" active-class="border-b-2 border-black">Habilidades</RouterLink>
    </div>

    <RouterView />
  </div>
</template>