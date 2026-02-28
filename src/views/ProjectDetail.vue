<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projectsData } from '@/data/portfolio'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// Buscamos el proyecto por la ID de la URL
const project = computed(() => 
  projectsData.find(p => p.id === Number(route.params.id))
)

// Lógica del Carrusel
const currentIndex = ref(0)

const next = () => {
  if (project.value) {
    currentIndex.value = (currentIndex.value + 1) % project.value.images.length
  }
}

const prev = () => {
  if (project.value) {
    currentIndex.value = (currentIndex.value - 1 + project.value.images.length) % project.value.images.length
  }
}
</script>

<template>
  <div v-if="project" class="max-w-5xl mx-auto py-10">
    <button @click="router.back()" class="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition">
      <ArrowLeft :size="20" /> VOLVER
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="relative group overflow-hidden rounded-3xl bg-black aspect-video shadow-2xl">
        <div 
          class="flex h-full transition-transform duration-500 ease-out" 
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img 
            v-for="(img, index) in project.images" 
            :key="index" 
            :src="img" 
            class="w-full h-full object-cover flex-shrink-0"
          />
        </div>

        <div v-if="project.images.length > 1">
          <button 
            @click="prev" 
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/90 hover:text-black p-3 rounded-full text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft :size="24" />
          </button>
          <button 
            @click="next" 
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/90 hover:text-black p-3 rounded-full text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight :size="24" />
          </button>
        </div>
      </div>

      <div class="space-y-6">
        <span class="text-blue-600 font-bold uppercase tracking-widest text-sm">{{ project.category }}</span>
        <h2 class="text-5xl font-black uppercase tracking-tighter">{{ project.title }}</h2>
        <p class="text-gray-600 text-lg leading-relaxed">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 pt-4">
          <span v-for="tag in project.tags" :key="tag" class="px-4 py-1 border rounded-full text-xs font-medium">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>