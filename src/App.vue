<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// Importamos iconos de Lucide (ya los tienes en tu package.json)
import { Briefcase, User, Mail } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-white">
    <header class="border-b p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="font-bold text-xl tracking-tight">ALBA CARDONA</h1>
        
        <div class="flex gap-6">
          <RouterLink to="/" class="flex items-center gap-1 hover:text-gray-500 transition">
            <Briefcase :size="18" /> <span>Trabajos</span>
          </RouterLink>
          <RouterLink to="/sobre-mi" class="flex items-center gap-1 hover:text-gray-500 transition">
            <User :size="18" /> <span>Sobre mí</span>
          </RouterLink>
          <RouterLink to="/contacto" class="flex items-center gap-1 hover:text-gray-500 transition">
            <Mail :size="18" /> <span>Contacto</span>
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="container mx-auto p-6">
      <RouterView />
    </main>

    <footer class="border-t mt-12 p-6 text-center text-sm text-gray-400">
      © 2026 - Alba Cardona Cardona
    </footer>
  </div>
</template>

<style scoped>
/* Cambiamos @apply por CSS normal para que no te salga el aviso amarillo */
.router-link-active {
  color: #2563eb; /* Este es el azul de Tailwind */
  font-weight: 700;
}
</style>
