<script setup lang="ts">
import { inject } from 'vue'
const emblaRef = inject<any>('emblaRef')
</script>

<template>
  <div ref="emblaRef" class="overflow-hidden">
    <div class="flex -ml-4">
      <slot />
    </div>
  </div>
</template>