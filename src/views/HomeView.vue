<script setup lang="ts">
import { projectsData } from '@/data/portfolio'
import { ExternalLink } from 'lucide-vue-next'
// Importamos el botón de Shadcn que ya tienes
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <div class="py-10">
    <header class="mb-12">
      <h2 class="text-4xl font-extrabold uppercase tracking-tighter">Mis Trabajos</h2>
      <p class="text-gray-500 mt-2">Diseño, branding y edición creativa para creadores de contenido.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="project in projectsData" 
        :key="project.id"
        class="group border rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
      >
        <div class="aspect-video bg-gray-100 overflow-hidden">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
          />
        </div>
        
        <div class="p-6">
          <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{{ project.category }}</span>
          <h3 class="text-xl font-bold mt-1">{{ project.title }}</h3>
          
          <router-link :to="'/proyecto/' + project.id" class="block mt-6">
            <Button variant="outline" class="w-full flex items-center justify-center gap-2">
              VER DETALLE <ExternalLink :size="14" />
            </Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>