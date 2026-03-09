<script setup lang="ts">
import { inject } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

const emblaApi = inject<any>('emblaApi')

function scrollNext() {
  if (emblaApi?.value) emblaApi.value.scrollNext()
}
</script>

<template>
  <button 
    @click="scrollNext"
    class="nav-btn btn-next" 
    type="button"
  >
    <ChevronRight class="w-8 h-8" />
  </button>
</template>