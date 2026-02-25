<script setup lang="ts">
import { educationData, skillsSoftware, servicesData } from '@/data/porfolio';
import { GraduationCap, Trophy, Laptop, CheckCircle2 } from 'lucide-vue-next'
</script>

<template>
  <div class="max-w-4xl mx-auto py-10">
    <section class="mb-16">
      <h2 class="text-5xl font-black uppercase mb-6 tracking-tighter">Sobre Mí</h2>
      <p class="text-xl text-gray-600 leading-relaxed">
        Tengo {{ educationData.age }} años y soy estudiante de segundo de **{{ educationData.degree }}** en la **{{ educationData.institution }}**.
        Combino mi formación académica con mi trabajo profesional como editora creativa para grandes creadoras de contenido.
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div>
        <h3 class="flex items-center gap-2 font-bold text-2xl mb-6">
          <GraduationCap class="text-blue-600" /> Estudios
        </h3>
        <div class="border-l-2 border-gray-100 pl-6 space-y-4">
          <div>
            <p class="font-bold text-lg">{{ educationData.degree }}</p>
            <p class="text-gray-500">{{ educationData.institution }}</p>
            <p class="text-sm text-blue-600 font-medium">{{ educationData.year }}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="flex items-center gap-2 font-bold text-2xl mb-6">
          <Laptop class="text-blue-600" /> Software
        </h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in skillsSoftware" :key="skill" class="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <section class="bg-gray-50 p-8 rounded-3xl">
      <h3 class="font-bold text-2xl mb-8 text-center uppercase">Lo que puedo aportar</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="service in servicesData" :key="service.title" class="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
          <CheckCircle2 class="text-green-500 shrink-0" :size="24" />
          <div>
            <h4 class="font-bold mb-1">{{ service.title }}</h4>
            <p class="text-sm text-gray-500 leading-snug">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>