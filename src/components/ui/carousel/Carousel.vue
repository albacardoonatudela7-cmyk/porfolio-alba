<script setup lang="ts">
import { provide, ref } from 'vue'
const currentIndex = ref(0)
provide('carousel', { currentIndex })
</script>
<template>
  <div class="relative w-full overflow-hidden group">
    <slot />
  </div>
</template>