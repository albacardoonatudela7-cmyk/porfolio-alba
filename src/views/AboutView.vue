<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { educationData } from '@/data/portfolio';
</script>

<template>
  <div class="max-w-4xl mx-auto py-10">
    <h2 class="text-5xl font-black uppercase mb-6 tracking-tighter">Sobre Mí</h2>
    <p class="text-xl text-gray-600 mb-10">Tengo {{ educationData.age }} años y estudio en la UPV.</p>

    <div class="flex gap-4 border-b mb-6">
      <RouterLink to="/sobre-mi/estudios" class="pb-2 px-4 font-bold" active-class="border-b-2 border-black">Estudios</RouterLink>
      <RouterLink to="/sobre-mi/habilidades" class="pb-2 px-4 font-bold" active-class="border-b-2 border-black">Habilidades</RouterLink>
    </div>

    <RouterView />
  </div>
</template>