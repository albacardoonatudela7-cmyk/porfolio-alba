<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Briefcase, User, Mail, Home } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <header class="border-b p-4 md:p-6 sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <nav class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h1 class="font-bold text-2xl tracking-tighter">ALBA CARDONA</h1>
        
        <div class="flex gap-4 md:gap-6 text-sm md:text-base flex-wrap justify-center">
          <RouterLink to="/" class="flex items-center gap-2 hover:text-blue-600 transition">
            <Home :size="18" /> <span>Home</span>
          </RouterLink>
          <RouterLink to="/trabajos" class="flex items-center gap-2 hover:text-blue-600 transition">
            <Briefcase :size="18" /> <span>Trabajos</span>
          </RouterLink>
          <RouterLink to="/sobre-mi" class="flex items-center gap-2 hover:text-blue-600 transition">
            <User :size="18" /> <span>Sobre mí</span>
          </RouterLink>
          <RouterLink to="/contacto" class="flex items-center gap-2 hover:text-blue-600 transition">
            <Mail :size="18" /> <span>Contacto</span>
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="container mx-auto p-4 md:p-6">
      <RouterView />
    </main>

    <footer class="border-t mt-12 p-6 text-center text-sm text-gray-400">
      © 2026 - Alba Cardona Cardona
    </footer>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #2563eb;
  font-weight: 700;
}
</style>