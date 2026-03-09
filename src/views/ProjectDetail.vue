<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { usePortfolio } from '@/composables/usePortfolio' 
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const { getProjectById } = usePortfolio()


const projectId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const project = getProjectById(projectId as string)


const combinedMedia = computed(() => {
  if (!project) return []
  const images = (project.images || []).map((src: string) => ({ type: 'image', src }))
  const videos = (project.shortVideos || []).map((src: string) => ({ type: 'video', src }))
  return [...images, ...videos]
})


const emblaApi = ref<any>(null)
const setApi = (api: any) => { emblaApi.value = api }

const scrollPrev = () => { if (emblaApi.value) emblaApi.value.scrollPrev() }
const scrollNext = () => { if (emblaApi.value) emblaApi.value.scrollNext() }


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
  <div v-if="project" class="min-h-screen bg-white text-black font-sans pb-20">
    
    <header class="pt-24 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
      <h1 class="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-[0.8] tracking-tighter mb-8 italic">
        {{ project.title }}
      </h1>
      <p class="text-[1.1rem] text-gray-800 max-w-xl mb-6 font-light">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" 
              class="px-4 py-1.5 border border-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          {{ tag }}
        </span>
      </div>
    </header>

    <main class="px-6 md:px-12 py-4">
      <div class="mx-auto relative group w-fit max-w-full mb-32">
        <Carousel @init="setApi" :opts="{ loop: true, align: 'center' }">
          <CarouselContent>
            <CarouselItem v-for="(item, index) in combinedMedia" :key="index" class="basis-auto">
              <div class="flex justify-center items-center p-2 h-[60vh] md:h-[75vh]">
                <img v-if="item.type === 'image'" :src="item.src" class="h-full w-auto object-contain rounded-[24px] shadow-2xl" />
                <div v-else class="video-container shadow-2xl bg-black">
                  <video :key="item.src" autoplay muted loop playsinline class="h-full w-auto max-full object-contain overflow-hidden">
                    <source :src="item.src" type="video/mp4">
                  </video>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <button @click="scrollPrev" class="nav-btn btn-prev" type="button"><ChevronLeft class="w-8 h-8" /></button>
          <button @click="scrollNext" class="nav-btn btn-next" type="button"><ChevronRight class="w-8 h-8" /></button>
        </Carousel>
      </div>

      <div v-if="project.influencers" class="mt-32 max-w-[1400px] mx-auto space-y-12">
        <h2 class="text-4xl font-black uppercase tracking-tighter italic border-b pb-6">Galería de Intros</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="influencer in project.influencers" :key="influencer.name" class="group cursor-pointer" @click="openVideo(influencer.videoUrl)">
            <div class="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl border border-gray-100">
              <img :src="influencer.cover" :alt="influencer.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-white p-4 rounded-full shadow-xl"><Play :size="30" class="text-black fill-black ml-1" /></div>
              </div>
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-sm font-black uppercase tracking-[0.2em]">{{ influencer.name }}</h3>
              <p class="text-[9px] font-bold text-blue-500 uppercase mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ver Vídeo</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="py-32 text-center">
      <RouterLink to="/trabajos" class="back-link">VOLVER A TRABAJOS</RouterLink>
    </footer>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4" @click.self="closeModal">
      <div class="relative w-full max-w-5xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
        <button @click="closeModal" class="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all duration-300">
          <X :size="24" />
        </button>
        <iframe v-if="selectedVideo" :src="`${selectedVideo}?autoplay=1`" frameborder="0" allow="autoplay; fullscreen" class="w-full h-full"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative; height: 100%; width: auto; border-radius: 24px; overflow: hidden;
  mask-image: radial-gradient(white, black); -webkit-mask-image: -webkit-radial-gradient(white, black);
  isolation: isolate; display: flex; align-items: center; justify-content: center;
}
.nav-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: black; color: white; width: 4.5rem; height: 4.5rem; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; z-index: 50;
  cursor: pointer; border: none; transition: all 0.4s ease;
}
.nav-btn:hover { background: #2563eb; transform: translateY(-50%) scale(1.1); }
.btn-prev { left: -90px; } .btn-next { right: -90px; }
@media (max-width: 1300px) { .btn-prev { left: 20px; } .btn-next { right: 20px; } .nav-btn { background: rgba(0,0,0,0.6); width: 3.5rem; height: 3.5rem; } }
.back-link { display: inline-block; padding: 1.5rem 4rem; border: 2px solid black; font-weight: 900; text-transform: uppercase; font-size: 11px; letter-spacing: 0.4em; text-decoration: none; color: black; border-radius: 100px; transition: all 0.4s ease; }
.back-link:hover { background: black; color: white; }
:deep(.overflow-hidden) { overflow: visible !important; }
</style>