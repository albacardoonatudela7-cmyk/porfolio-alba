<script setup lang="ts">
import { provide, watch,ref} from 'vue'
import useEmblaCarousel from 'embla-carousel-vue'

const props = defineProps<{
  opts?: any
  plugins?: any
}>()

const emit = defineEmits(['init'])


const [emblaRef, emblaApi] = useEmblaCarousel(props.opts, props.plugins)


provide('emblaRef', emblaRef)


watch(() => emblaApi.value, (api) => {
  if (api) {
    emit('init', api)
  }
}, { immediate: true })


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