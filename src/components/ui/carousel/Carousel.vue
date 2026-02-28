<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  images: string[]
}>()

const currentIndex = ref(0)
const next = () => currentIndex.value = (currentIndex.value + 1) % props.images.length
const prev = () => currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
</script>

<template>
  <div class="relative w-fit h-fit mx-auto lg:ml-auto group">
    <div class="overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-white">
      <div 
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="index" class="min-w-full flex items-center justify-center">
          <img 
            :src="image" 
            class="h-auto max-h-450px w-auto block object-contain" 
            alt="Project image"
          />
        </div>
      </div>
    </div>

    <div v-if="images.length > 1" class="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <button @click="prev" class="pointer-events-auto p-2 rounded-full bg-white/90 shadow-md hover:bg-black hover:text-white transition-all">
        <ChevronLeft :size="20" />
      </button>
      <button @click="next" class="pointer-events-auto p-2 rounded-full bg-white/90 shadow-md hover:bg-black hover:text-white transition-all">
        <ChevronRight :size="20" />
      </button>
    </div>
  </div>
</template>