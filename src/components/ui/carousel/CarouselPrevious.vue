<script setup lang="ts">
import { inject } from 'vue'
import { ChevronLeft } from 'lucide-vue-next'

const emblaApi = inject<any>('emblaApi')

function scrollPrev() {
  if (emblaApi?.value) emblaApi.value.scrollPrev()
}
</script>

<template>
  <button 
    @click="scrollPrev"
    class="nav-btn btn-prev" 
    type="button"
  >
    <ChevronLeft class="w-8 h-8" />
  </button>
</template>