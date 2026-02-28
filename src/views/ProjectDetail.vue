<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projectsData } from '@/data/portfolio'
import { ChevronLeft, ChevronRight, ArrowLeft, Play, X } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const project = computed(() => 
  projectsData.find(p => p.id === Number(route.params.id))
)


const currentIndex = ref(0)

const next = () => {
  if (project.value && project.value.images) {
    currentIndex.value = (currentIndex.value + 1) % project.value.images.length
  }
}

const prev = () => {
  if (project.value && project.value.images) {
    currentIndex.value = (currentIndex.value - 1 + project.value.images.length) % project.value.images.length
  }
}

const selectedVideo = ref<string | null>(null)
const isModalOpen = ref(false)

const openVideo = (videoUrl: string) => {
  selectedVideo.value = videoUrl
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => { selectedVideo.value = null }, 300)
}
</script>

<template>
  <div v-if="project" class="max-w-5xl mx-auto py-10 px-6 animate-in fade-in duration-700">
    <button @click="router.back()" class="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition font-bold text-xs tracking-widest uppercase">
      <ArrowLeft :size="18" /> VOLVER
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      <div class="relative group overflow-hidden rounded-3xl bg-black shadow-2xl h-auto self-start">
        <div 
          class="flex transition-transform duration-500 ease-out" 
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img 
            v-for="(img, index) in project.images" 
            :key="index" 
            :src="img" 
            class="w-full h-auto object-contain shrink-0"
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
        <span class="text-blue-600 font-bold uppercase tracking-widest text-xs">
          {{ project.category }}
        </span>
        <h2 class="text-5xl font-black uppercase tracking-tighter leading-none text-black">
          {{ project.title }}
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed font-light">
          {{ project.description }}
        </p>
        
        <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          <span 
            v-for="tag in project.tags" 
            :key="tag" 
            class="px-4 py-1 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="project.influencers" class="mt-20 pt-20 border-t border-gray-100 space-y-10">
      <h2 class="text-2xl font-black uppercase tracking-tight text-black">Galería de Intros</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="influencer in project.influencers" :key="influencer.name" 
          class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer border border-gray-100"
          @click="openVideo(influencer.videoUrl)"
        >
          <div class="relative aspect-3/4 overflow-hidden">
            <img :src="influencer.cover" :alt="influencer.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="bg-white/20 p-4 rounded-full backdrop-blur-md">
                <Play :size="32" class="text-white fill-white" />
              </div>
            </div>
          </div>
          <div class="p-4 text-center">
            <h3 class="text-sm font-bold uppercase tracking-tight">{{ influencer.name }}</h3>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black/95 z-100 flex items-center justify-center p-4" @click.self="closeModal">
      <div class="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
        <button @click="closeModal" class="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all">
          <X :size="24" />
        </button>
        <iframe v-if="selectedVideo" :src="`${selectedVideo}?autoplay=1&rel=0`" frameborder="0" allowfullscreen class="w-full h-full"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-black {
  min-height: 200px;
}
</style>