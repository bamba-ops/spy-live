<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-pink-100/40"
  >
    <nav
      class="max-w-5xl mx-auto flex items-center justify-between px-4 py-2 md:py-3"
    >
      <!-- LOGO -->
      <a
        href="/"
        class="flex items-center gap-3 shrink-0 select-none py-1 md:py-0"
      >
        <img
          src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//spylive_logo.png"
          alt="SpyLive Logo"
          class="h-9 w-auto md:h-12 transition-all drop-shadow"
          style="max-width: 180px"
        />
      </a>

      <!-- Links (desktop only) -->
      <ul
        class="hidden md:flex gap-7 items-center text-base font-medium text-gray-700"
      >
        <li>
          <a href="#features" class="hover:text-pink-500 transition"
            >Fonctionnalités</a
          >
        </li>
        <li><a href="#faq" class="hover:text-pink-500 transition">FAQ</a></li>
        <li>
          <a href="#leads" class="hover:text-pink-500 transition">Accès beta</a>
        </li>
      </ul>

      <!-- CTA (desktop only) -->
      <div class="hidden md:block">
        <a
          href="#leads"
          class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md transition active:scale-95 text-base"
        >
          Rejoindre la beta
        </a>
      </div>

      <!-- Burger (mobile only) -->
      <button
        class="md:hidden flex items-center justify-center rounded-lg p-2 border border-pink-100 shadow text-pink-500 hover:bg-pink-50 focus:ring-2 focus:ring-pink-300 transition"
        @click="openMenu"
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

    <!-- FULLSCREEN MOBILE MENU -->
    <transition name="fadein-scale">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-[100] flex flex-col bg-white/95 backdrop-blur-xl transition-all"
      >
        <div
          class="flex items-center justify-between px-5 pt-4 pb-2 border-b border-pink-100"
        >
          <img
            src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//spylive_logo.png"
            alt="SpyLive Logo"
            class="h-10 w-auto"
            style="max-width: 150px"
          />
          <button
            @click="closeMenu"
            class="text-gray-400 hover:text-pink-500 text-3xl px-1 py-1 rounded transition"
            aria-label="Fermer le menu"
          >
            &times;
          </button>
        </div>
        <nav
          class="flex-1 flex flex-col items-center justify-center gap-6 text-lg font-semibold"
        >
          <a
            href="#features"
            @click="closeMenu"
            class="block py-2 px-6 rounded-xl hover:bg-pink-50 hover:text-pink-500 transition w-full text-center"
            >Fonctionnalités</a
          >
          <a
            href="#faq"
            @click="closeMenu"
            class="block py-2 px-6 rounded-xl hover:bg-pink-50 hover:text-pink-500 transition w-full text-center"
            >FAQ</a
          >
          <a
            href="#leads"
            @click="closeMenu"
            class="block py-2 px-6 rounded-xl hover:bg-pink-50 hover:text-pink-500 transition w-full text-center"
            >Accès beta</a
          >
        </nav>
        <div class="p-6 pb-8">
          <a
            href="#leads"
            @click="closeMenu"
            class="block w-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 rounded-2xl text-center shadow-md transition active:scale-95"
          >
            🚀 Rejoindre la beta
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
const openMenu = () => {
  menuOpen.value = true;
};
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
  transform: scale(1.03) translateY(-12px);
}
</style>
