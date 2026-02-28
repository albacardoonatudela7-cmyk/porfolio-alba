<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Briefcase, User, Mail } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <header class="border-b p-6">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="font-bold text-2xl tracking-tighter">ALBA CARDONA</h1>
        
        <div class="flex gap-6">
          <RouterLink to="/" class="flex items-center gap-2 hover:text-blue-600 transition">
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

    <main class="container mx-auto p-6">
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