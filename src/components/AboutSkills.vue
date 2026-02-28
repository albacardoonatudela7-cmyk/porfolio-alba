<script setup lang="ts">
import { skillsSoftware } from '@/data/portfolio';
</script>
<template>
  <div class="mt-8 p-6 bg-purple-50 rounded-2xl">
    <h4 class="font-bold text-lg mb-4">Software & Herramientas</h4>
    <div class="flex flex-wrap gap-2">
      <span v-for="skill in skillsSoftware" :key="skill" class="bg-white border px-3 py-1 rounded-full text-sm font-medium">
        {{ skill }}
      </span>
    </div>
  </div>
</template>