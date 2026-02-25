<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { projectsData } from '@/data/porfolio';
import { ArrowLeft, Tag, User, Sparkles } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// Buscamos el proyecto por el ID que viene en la URL
const project = projectsData.find(p => p.id === Number(route.params.id))

// Si no existe, mandamos al usuario a la Home
if (!project) {
  router.push('/')
}
</script>

<template>
  <div v-if="project" class="max-w-5xl mx-auto py-10">
    <button @click="router.back()" class="flex items-center gap-2 text-gray-400 hover:text-black transition mb-10 group">
      <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" /> 
      <span class="font-bold uppercase text-sm tracking-widest">Volver</span>
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
      </div>

      <div class="flex flex-col justify-center">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.2em] mb-4 block">
          {{ project.category }}
        </span>
        <h1 class="text-5xl font-black mb-8 leading-none uppercase tracking-tighter">
          {{ project.title }}
        </h1>
        
        <p class="text-gray-600 text-lg leading-relaxed mb-10">
          {{ project.description }}
        </p>

        <div class="space-y-6 border-t pt-8">
          <div v-if="project.client" class="flex items-start gap-4">
            <div class="p-2 bg-blue-50 rounded-lg text-blue-600">
              <User :size="20" />
            </div>
            <div>
              <h4 class="text-sm font-black uppercase tracking-wider text-gray-400">Colaboración</h4>
              <p class="text-gray-900 font-medium">{{ project.client }}</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="p-2 bg-purple-50 rounded-lg text-purple-600">
              <Sparkles :size="20" />
            </div>
            <div>
              <h4 class="text-sm font-black uppercase tracking-wider text-gray-400">Herramientas</h4>
              <div class="flex flex-wrap gap-2 mt-2">
                <span v-for="tag in project.tags" :key="tag" class="text-xs font-bold border px-3 py-1 rounded-full uppercase">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>