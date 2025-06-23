<template>
  <section
    class="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans"
  >
    <div
      class="max-w-3xl mx-auto w-full text-center py-20 flex flex-col items-center z-10"
    >
      <!-- Logo style icône douce -->
      <div class="flex items-center justify-center mb-8">
        <span
          class="inline-flex items-center justify-center bg-pink-100 rounded-full w-16 h-16 shadow-sm"
        >
          <svg
            class="h-9 w-9 text-pink-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35"
            />
          </svg>
        </span>
      </div>
      <!-- Punchline -->
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight drop-shadow-xl"
      >
        Vends en live avant même d’avoir un site
      </h1>
      <!-- Sub -->
      <p
        class="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10 font-medium"
      >
        Automatise tes paiements TikTok Live, concentre-toi sur l’animation, on
        s’occupe du reste.<br />
        <span class="text-pink-500">Boost tes ventes, zéro friction.</span>
      </p>
      <!-- CTA button -->
      <button
        class="mt-2 inline-block bg-pink-500 hover:bg-pink-600 text-white text-xl font-semibold px-8 py-4 rounded-2xl shadow-lg transition active:scale-95"
      >
        🚀 Rejoindre l'accès beta
      </button>
      <!-- Social proof style Airbnb -->
      <div
        class="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm"
      >
        <svg
          class="w-4 h-4 text-pink-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"
          />
        </svg>
        <span>+150 créateurs nous font confiance</span>
      </div>
    </div>
    <!-- Déco bulle façon Airbnb -->
    <div
      class="absolute -top-10 -left-24 w-72 h-72 bg-pink-100 rounded-full opacity-40 blur-2xl z-0"
    ></div>
    <div
      class="absolute -bottom-20 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-2xl z-0"
    ></div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
