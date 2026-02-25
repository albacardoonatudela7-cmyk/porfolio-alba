<script setup lang="ts">
import { educationData } from '@/data/porfolio';
</script>
<template>
  <div class="mt-8 p-6 bg-blue-50 rounded-2xl">
    <h4 class="font-bold text-lg mb-2">Formación Académica</h4>
    <p class="font-bold">{{ educationData.degree }}</p>
    <p class="text-gray-600">{{ educationData.institution }}</p>
    <p class="text-blue-600 text-sm">{{ educationData.year }}</p>
  </div>
</template>