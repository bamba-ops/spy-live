<script setup></script>

<template>
  <!-- SECTION pleine hauteur -->
  <section
    class="relative min-h-screen bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 font-sans"
  >
    <!-- Barre top (logo discret) -->
    <header class="absolute top-6 left-6 flex items-center gap-2 select-none">
      <span
        class="inline-flex items-center justify-center bg-pink-100 rounded-full w-8 h-8"
      >
        <svg
          class="w-4 h-4 text-pink-500"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" />
          <path
            d="M21 21l-4.35-4.35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span class="text-sm font-semibold text-gray-600">SpyLive</span>
    </header>

    <!-- HERO container -->
    <div
      class="w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center pt-32 pb-20"
    >
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight"
      >
        Vends en live&nbsp;<br class="hidden md:block" />
        <span class="text-pink-500">en&nbsp;2 minutes</span>&nbsp;– sans site
        web
      </h1>

      <p
        class="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10 font-medium"
      >
        On automatise tes paiements TikTok Live.<br />
        Zéro friction, plus de ventes.
      </p>

      <button
        class="bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-xl font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
      >
        🚀 Automatiser mes paiements (Accès bêta)
      </button>

      <div
        class="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm"
      >
        <svg
          class="w-4 h-4 text-pink-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"
          />
        </svg>
        <span>+150 créateurs nous font déjà confiance</span>
      </div>
    </div>

    <!-- Bulles décoratives -->
    <div
      class="absolute -top-10 -left-24 w-72 h-72 bg-pink-100 rounded-full opacity-40 blur-2xl"
    ></div>
    <div
      class="absolute -bottom-20 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-2xl"
    ></div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
