<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans"
  >
    <div
      class="w-full max-w-xl bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-14 flex flex-col items-center"
    >
      <!-- Logo style Airbnb, simple -->
      <div class="mb-7 select-none">
        <span
          class="inline-flex items-center justify-center bg-pink-100 rounded-full w-14 h-14"
        >
          <svg
            class="h-8 w-8 text-pink-500"
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
      <!-- Punchline style ShipFast / Marc Lou -->
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center tracking-tight leading-tight"
      >
        Vends en live avant même d’avoir un site
      </h1>
      <p
        class="text-gray-500 text-base md:text-lg mb-8 text-center max-w-xs mx-auto"
      >
        Automatise tes paiements TikTok Live. Ne perds plus de ventes à cause de
        la paperasse.
      </p>
      <!-- CTA Button -->
      <button
        class="w-full sm:w-auto px-8 py-4 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-lg font-semibold rounded-xl shadow-md transition"
      >
        Rejoindre l'accès beta
      </button>
      <div class="mt-8 text-center text-gray-300 text-xs select-none w-full">
        <span>
          Made by
          <span class="font-semibold text-pink-400">SpyLive</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
