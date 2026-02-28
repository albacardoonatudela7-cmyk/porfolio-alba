<script setup lang="ts">

const education = [
  {
    title: "Grado en Diseño y Tecnologías Creativas",
    institution: "UPV Valencia",
    date: "Segundo curso (Actualidad)"
  }
]
</script>

<template>
  <div class="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div 
      v-for="item in education" 
      :key="item.title"
      class="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-default"
    >
      <div class="flex flex-col gap-3">
        <h3 class="font-light text-xl tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors duration-500">
          {{ item.title }}
        </h3>
        
        <div class="flex items-center gap-4">
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400">
            {{ item.institution }}
          </span>
          <span class="text-gray-200">|</span>
          <span class="text-xs font-medium uppercase tracking-widest text-blue-500">
            {{ item.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>