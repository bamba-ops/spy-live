<template>
  <header
    class="w-full bg-white/90 shadow-sm fixed top-0 left-0 z-40 font-sans"
  >
    <nav
      class="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20"
    >
      <!-- Logo seul, agrandi -->
      <a href="/" class="flex items-center select-none">
        <img
          src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//spylive_logo.png"
          alt="SpyLive Logo"
          class="w-26 h-26 md:w-20 md:h-20 object-contain"
        />
      </a>

      <!-- Center Nav Links -->
      <ul
        class="hidden md:flex items-center gap-8 text-gray-700 font-semibold text-base"
      >
        <li>
          <a href="#features" class="hover:text-pink-500 transition"
            >Fonctionnalités</a
          >
        </li>
        <li>
          <a href="#tarifs" class="hover:text-pink-500 transition">Tarifs</a>
        </li>
        <li><a href="#faq" class="hover:text-pink-500 transition">FAQ</a></li>
      </ul>

      <!-- CTA desktop -->
      <div class="hidden md:flex">
        <a
          href="#waitlist"
          class="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-2.5 rounded-xl shadow transition active:scale-95 text-base"
        >
          Accès beta
        </a>
      </div>

      <!-- Burger (mobile) -->
      <button
        class="md:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-gray-100 transition"
        @click="open = !open"
        aria-label="Ouvrir le menu"
      >
        <svg
          v-if="!open"
          class="w-7 h-7 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
        <svg
          v-else
          class="w-7 h-7 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="fadein-scale">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/40 z-50 flex md:hidden"
        @click.self="open = false"
      >
        <div
          class="ml-auto w-5/6 max-w-xs h-full bg-white shadow-xl rounded-l-3xl p-6 flex flex-col gap-6 animate-fadein"
        >
          <button
            class="self-end text-gray-400 hover:text-pink-500 transition text-2xl mb-4"
            @click="open = false"
            aria-label="Fermer le menu"
          >
            ×
          </button>
          <ul class="flex flex-col gap-5 text-lg font-semibold text-gray-700">
            <li>
              <a
                href="#features"
                @click="open = false"
                class="hover:text-pink-500 transition"
                >Fonctionnalités</a
              >
            </li>
            <li>
              <a
                href="#tarifs"
                @click="open = false"
                class="hover:text-pink-500 transition"
                >Tarifs</a
              >
            </li>
            <li>
              <a
                href="#faq"
                @click="open = false"
                class="hover:text-pink-500 transition"
                >FAQ</a
              >
            </li>
          </ul>
          <a
            href="#waitlist"
            class="mt-7 bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl shadow transition active:scale-95 text-center"
            @click="open = false"
          >
            Accès beta
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}

.fadein-scale-enter-active,
.fadein-scale-leave-active {
  transition: all 0.33s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fadein-scale-enter-from,
.fadein-scale-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(-16px);
}
.animate-fadein {
  animation: fadein 0.36s cubic-bezier(0.48, 1.64, 0.38, 0.97) both;
}
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(-22px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
