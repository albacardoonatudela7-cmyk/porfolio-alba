<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio' 
import { ExternalLink } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'


const { projects } = usePortfolio()
</script>

<template>
  <div class="py-10 max-w-[1400px] mx-auto animate-in fade-in duration-1000">
    <header class="mb-12 px-4">
      <h2 class="text-5xl font-black uppercase tracking-tighter italic">Mis Trabajos</h2>
      <p class="text-gray-500 mt-2 font-light tracking-wide">Diseño, branding y edición creativa para creadores de contenido.</p>
      <div class="w-12 h-1 bg-blue-600 mt-4"></div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      <div 
        v-for="project in projects" 
        :key="project.id"
        class="group border-none rounded-[32px] overflow-hidden bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
      >
        <div class="aspect-video bg-gray-50 overflow-hidden relative">
          <img 
            :src="project.images[0]" 
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute top-4 left-4">
             <span class="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
               {{ project.category }}
             </span>
          </div>
        </div>

        <div class="p-8">
          <h3 class="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
            {{ project.title }}
          </h3>
          
          <router-link :to="'/proyecto/' + project.id" class="block">
            <Button variant="outline" class="w-full h-12 rounded-2xl border-2 font-black text-[10px] tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
              EXPLORAR PROYECTO <ExternalLink :size="14" class="ml-2" />
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.group {
  isolation: isolate;
}
</style>