<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { projectsData } from '@/data/portfolio'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const project = projectsData.find(p => String(p.id) === String(route.params.id))


const isIntrosProject = computed(() => {
  return project?.title.toLowerCase().includes('intros')
})

const combinedMedia = computed(() => {
  if (!project) return []
  const images = (project.images || []).map(src => ({ type: 'image', src }))
  const videos = (project.shortVideos || []).map(src => ({ type: 'video', src }))
  return [...images, ...videos]
})

const emblaApi = ref<any>(null)
const setApi = (api: any) => { emblaApi.value = api }
const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()

const selectedVideo = ref<string | null>(null)
const isModalOpen = ref(false)
const openVideo = (videoUrl: string) => { selectedVideo.value = videoUrl; isModalOpen.value = true }
const closeModal = () => { isModalOpen.value = false; setTimeout(() => { selectedVideo.value = null }, 300) }
</script>

<template>
  <div v-if="project" class="min-h-screen bg-white text-black font-sans pb-20">
    
    <header class="pt-24 pb-12 px-6 md:px-12 max-w-400 mx-auto">
      <h1 class="text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-[0.8] tracking-tighter mb-8 italic">
        {{ project.title }}
      </h1>
      <p class="text-[1.1rem] text-gray-800 max-w-xl mb-6 font-light opacity-80 italic">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="tag-pill">{{ tag }}</span>
      </div>
    </header>

    <main class="px-6 md:px-12 py-4">
      
      <div v-if="!isIntrosProject" class="mx-auto relative group w-fit max-w-full mb-32">
        <Carousel @init="setApi" :opts="{ loop: true, align: 'center' }">
          <CarouselContent>
            <CarouselItem v-for="(item, index) in combinedMedia" :key="index" class="basis-auto">
              <div class="carousel-media-wrapper">
                <img v-if="item.type === 'image'" :src="item.src" class="main-img" />
                <div v-else class="video-container">
                  <video :key="item.src" autoplay muted loop playsinline class="main-video">
                    <source :src="item.src" type="video/mp4">
                  </video>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <button @click="scrollPrev" class="nav-btn btn-prev" type="button"><ChevronLeft /></button>
          <button @click="scrollNext" class="nav-btn btn-next" type="button"><ChevronRight /></button>
        </Carousel>
      </div>

      <div v-if="project.influencers && project.influencers.length > 0" class="max-w-350 mx-auto mt-10">
        
        <h2 v-if="!isIntrosProject" class="text-4xl font-black uppercase tracking-tighter italic border-b-2 border-black pb-6 mb-12">
          Galería de Intros
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div v-for="influencer in project.influencers" :key="influencer.name" class="influencer-card" @click="openVideo(influencer.videoUrl)">
            <div class="influencer-img-container">
              <img :src="influencer.cover" :alt="influencer.name" class="influencer-img" />
              <div class="play-overlay">
                <div class="play-button-circle"><Play :size="24" class="play-icon" /></div>
              </div>
            </div>
            <div class="mt-6 text-center">
              <h3 class="influencer-name">{{ influencer.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="py-32 text-center">
      <RouterLink to="/trabajos" class="back-link">VOLVER A TRABAJOS</RouterLink>
    </footer>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button @click="closeModal" class="close-btn"><X :size="24" /></button>
        <iframe v-if="selectedVideo" :src="`${selectedVideo}?autoplay=1`" frameborder="0" allow="autoplay; fullscreen" class="w-full h-full"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>

.influencer-img-container { position: relative; aspect-ratio: 3/4; overflow: hidden; border-radius: 60px; background-color: #f3f4f6; cursor: pointer; }
.influencer-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.play-overlay { position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s ease; }
.influencer-card:hover .play-overlay { opacity: 1; }
.play-button-circle { background-color: white; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
.play-icon { color: black; fill: black; margin-left: 4px; }
.influencer-name { font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em; }
.tag-pill { padding: 6px 16px; border: 1px solid black; border-radius: 9999px; font-size: 10px; font-weight: 700; text-transform: uppercase; }
.carousel-media-wrapper { display: flex; justify-content: center; align-items: center; padding: 8px; height: 60vh; }
@media (min-width: 768px) { .carousel-media-wrapper { height: 75vh; } }
.main-img, .video-container { height: 100%; width: auto; border-radius: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
.main-video { height: 100%; width: 100%; object-fit: contain; border-radius: 40px; }
.nav-btn { position: absolute; top: 50%; transform: translateY(-50%); background: black; color: white; width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 50; border: none; cursor: pointer; }
.btn-prev { left: -80px; } .btn-next { right: -80px; }
@media (max-width: 1200px) { .btn-prev { left: 10px; } .btn-next { right: 10px; } .nav-btn { width: 48px; height: 48px; background: rgba(0,0,0,0.7); } }
.back-link { display: inline-block; padding: 1.2rem 3.5rem; border: 2px solid black; border-radius: 100px; font-weight: 900; text-transform: uppercase; font-size: 11px; letter-spacing: 0.3em; text-decoration: none; color: black; }
.back-link:hover { background: black; color: white; }
.modal-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.95); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-content { position: relative; width: 100%; max-width: 1024px; aspect-ratio: 16/9; background: black; border-radius: 50px; overflow: hidden; }
.close-btn { position: absolute; top: 24px; right: 24px; z-index: 10; background: rgba(255,255,255,0.2); color: white; padding: 12px; border-radius: 50%; border: none; cursor: pointer; }
:deep(.overflow-hidden) { overflow: visible !important; }
</style>