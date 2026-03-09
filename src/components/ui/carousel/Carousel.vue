<script setup lang="ts">
import { provide, watch, ref } from 'vue'
import useEmblaCarousel from 'embla-carousel-vue'

const props = defineProps<{
  opts?: any
  plugins?: any
}>()

const emit = defineEmits(['init'])

// Inicializamos el carrusel con las opciones
const [emblaRef, emblaApi] = useEmblaCarousel(props.opts, props.plugins)

// Compartimos la referencia con los hijos (Content e Item)
provide('emblaRef', emblaRef)

// Vigilamos cuando la API esté lista para avisar al componente padre
watch(() => emblaApi.value, (api) => {
  if (api) {
    emit('init', api)
  }
}, { immediate: true })

// Exponemos la API por si acaso
defineExpose({
  canScrollPrev: emblaApi.value?.canScrollPrev(),
  canScrollNext: emblaApi.value?.canScrollNext(),
  scrollPrev: () => emblaApi.value?.scrollPrev(),
  scrollNext: () => emblaApi.value?.scrollNext(),
})
</script>

<template>
  <div class="relative w-full" role="region" aria-roledescription="carousel">
    <slot />
  </div>
</template>