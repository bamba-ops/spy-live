<template>
  <section
    class="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans overflow-hidden"
  >
    <div
      class="flex flex-col items-center text-center w-full max-w-2xl mx-auto z-10 pt-16 pb-16"
    >
      <!-- Icône LIVE (grosse, fun, évocatrice) -->
      <div class="mb-7 flex items-center justify-center">
        <span
          class="inline-flex items-center justify-center rounded-full w-14 h-14 bg-white/70 shadow"
        >
          <svg viewBox="0 0 56 56" fill="none" class="h-10 w-10">
            <circle cx="28" cy="28" r="10" fill="#f43f5e" />
            <circle
              cx="28"
              cy="28"
              r="19"
              stroke="#f43f5e"
              stroke-width="2"
              opacity="0.4"
            />
            <circle
              cx="28"
              cy="28"
              r="26"
              stroke="#f43f5e"
              stroke-width="2"
              opacity="0.2"
            />
            <circle cx="28" cy="28" r="2.5" fill="#fff" />
          </svg>
        </span>
      </div>
      <!-- HEADLINE XXL style shipfast/marc lou -->
      <h1
        class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6 drop-shadow-lg"
      >
        Vends en live avant même d’avoir un site
      </h1>
      <!-- Petit sous-texte bénéfice -->
      <p
        class="text-lg md:text-2xl text-gray-700 font-medium mb-10 max-w-xl mx-auto"
      >
        Automatise tes paiements sur TikTok Live.<br class="hidden md:inline" />
        <span class="text-pink-500">Gagne du temps, booste tes ventes.</span>
      </p>
      <!-- Bouton principal, gros, responsive -->
      <button
        class="bg-pink-500 hover:bg-pink-600 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-2xl shadow-xl transition active:scale-95 w-full max-w-xs"
      >
        🚀 Rejoindre l'accès beta
      </button>
      <!-- Compteur social proof -->
      <div class="mt-10 flex flex-col items-center gap-2 w-full">
        <div
          class="relative flex items-center gap-3 bg-white/90 border border-gray-100 shadow-lg rounded-2xl px-7 py-5 mx-auto"
        >
          <!-- Pastille live -->
          <span class="relative flex h-4 w-4">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-80"
            ></span>
            <span
              class="relative inline-flex rounded-full h-4 w-4 bg-pink-500 border-2 border-white"
            ></span>
          </span>
          <!-- Chiffre animé -->
          <span
            class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight tabular-nums"
          >
            +<span>{{ animatedCount }}</span>
          </span>
          <!-- Légende -->
          <span class="text-base md:text-lg font-medium text-gray-500"
            >créateurs utilisent déjà la solution</span
          >
        </div>
      </div>
    </div>
    <!-- Déco bulle façon airbnb moderne -->
    <div
      class="absolute -top-20 -left-32 w-80 h-80 bg-pink-100 rounded-full opacity-30 blur-2xl"
    ></div>
    <div
      class="absolute -bottom-32 -right-44 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-2xl"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Compteur animé
const start = 123; // valeur de départ
const end = 153; // valeur de fin (ton social proof)
const duration = 1800; // durée totale en ms (1.8 secondes)
const animatedCount = ref(start);

onMounted(() => {
  let startTime = null;
  function animateCount(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    animatedCount.value = Math.floor(start + (end - start) * progress);
    if (progress < 1) {
      requestAnimationFrame(animateCount);
    } else {
      animatedCount.value = end;
    }
  }
  requestAnimationFrame(animateCount);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
