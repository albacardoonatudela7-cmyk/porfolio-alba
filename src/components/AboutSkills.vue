<script setup lang="ts">
import { Star } from 'lucide-vue-next'

const skills = [
  { name: 'Premiere Pro', level: 4 },
  { name: 'After Effects', level: 4 },
  { name: 'Photoshop', level: 3 },
  { name: 'Illustrator', level: 4 },
  { name: 'CapCut', level: 5 },
  { name: 'Procreate', level: 4 }
]
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div 
      v-for="skill in skills" 
      :key="skill.name"
      class="group relative h-20 flex items-center justify-center border border-gray-100 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-500 cursor-default shadow-sm hover:shadow-md"
    >
      <span class="font-medium uppercase tracking-widest text-xs text-gray-500 group-hover:opacity-0 group-hover:scale-95 transition-all duration-500">
        {{ skill.name }}
      </span>

      <div class="absolute inset-0 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        <Star 
          v-for="i in 5" 
          :key="i"
          :size="14"
          :stroke-width="2"
          :class="i <= skill.level ? 'text-black fill-black' : 'text-gray-200'"
        />
      </div>
    </div>
  </div>
</template>