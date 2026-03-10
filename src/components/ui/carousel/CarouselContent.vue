<script setup lang="ts">
import { inject } from 'vue' // Esto es lo que borramos
import { cn } from '@/lib/utils'

const emblaRef = inject<any>('emblaRef') // Y esto también
</script>

<template>
  <div ref="emblaRef" class="overflow-hidden">
    <div
      :class="cn(
        'flex',
        'active:cursor-grabbing',
        $attrs.class as string,
      )"
    >
      <slot />
    </div>
  </div>
</template>