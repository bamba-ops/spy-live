<template>
  <header
    class="w-full bg-white/80 backdrop-blur-lg shadow-sm fixed top-0 left-0 z-50 border-b border-pink-100/40"
  >
    <nav
      class="max-w-6xl mx-auto flex items-center justify-between px-4 py-2 md:py-3"
    >
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 shrink-0 select-none">
        <img
          src="/icon.png"
          alt="SpyLive Logo"
          class="w-9 h-9 md:w-10 md:h-10 rounded-lg shadow-sm object-contain"
        />
        <span
          class="font-bold text-lg md:text-xl text-gray-700 tracking-tight ml-1"
        >
          <span class="text-pink-500">Spy</span
          ><span class="text-gray-700">Live</span>
        </span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex gap-6 items-center font-medium text-gray-700">
        <li>
          <a href="#features" class="hover:text-pink-500 transition"
            >Fonctionnalités</a
          >
        </li>
        <li>
          <a href="#faq" class="hover:text-pink-500 transition">FAQ</a>
        </li>
        <li>
          <a href="#leads" class="hover:text-pink-500 transition">Accès beta</a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:block">
        <a
          href="#leads"
          class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition active:scale-95 text-base"
        >
          Rejoindre la beta
        </a>
      </div>

      <!-- Mobile burger -->
      <button
        class="md:hidden flex items-center justify-center rounded-lg p-2 border border-pink-100 shadow-sm text-pink-500 hover:bg-pink-50/80 focus:ring-2 focus:ring-pink-300 transition"
        @click="menuOpen = true"
        aria-label="Ouvrir le menu"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Mobile popover menu -->
    <transition name="fadein-scale">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-start justify-end"
      >
        <div
          class="w-4/5 max-w-xs bg-white rounded-l-3xl shadow-2xl p-7 pt-6 flex flex-col gap-6 h-full"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="flex items-center gap-2">
              <img src="/icon.png" class="w-7 h-7 rounded object-contain" />
              <span class="font-bold text-lg text-gray-700">
                <span class="text-pink-500">Spy</span
                ><span class="text-gray-700">Live</span>
              </span>
            </span>
            <button
              @click="menuOpen = false"
              class="text-gray-400 hover:text-pink-500 text-2xl ml-4 p-1 rounded transition"
              aria-label="Fermer le menu"
            >
              ×
            </button>
          </div>
          <nav class="flex flex-col gap-4 text-lg font-medium">
            <a
              href="#features"
              @click="closeMenu"
              class="py-1 hover:text-pink-500 transition"
              >Fonctionnalités</a
            >
            <a
              href="#faq"
              @click="closeMenu"
              class="py-1 hover:text-pink-500 transition"
              >FAQ</a
            >
            <a
              href="#leads"
              @click="closeMenu"
              class="py-1 hover:text-pink-500 transition"
              >Accès beta</a
            >
          </nav>
          <a
            href="#leads"
            @click="closeMenu"
            class="mt-4 bg-pink-500 hover:bg-pink-600 text-white text-center font-semibold px-5 py-3 rounded-xl shadow-md transition active:scale-95 text-base"
          >
            🚀 Rejoindre la beta
          </a>
        </div>
        <!-- Fermer sur click overlay -->
        <div class="flex-1" @click="menuOpen = false"></div>
      </div>
    </transition>
  </header>
</template>

<script setup>
const menuOpen = ref(false);
const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
.fadein-scale-enter-active,
.fadein-scale-leave-active {
  transition: all 0.33s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fadein-scale-enter-from,
.fadein-scale-leave-to {
  opacity: 0;
  transform: scale(0.97) translateY(10px);
}
</style>
