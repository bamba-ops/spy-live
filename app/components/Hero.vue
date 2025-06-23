<template>
  <section
    class="relative w-full flex items-center justify-center min-h-[450px] md:min-h-[600px] px-4 bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 font-sans"
  >
    <div
      class="w-full max-w-2xl mx-auto flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-14 text-center transition-all"
    >
      <!-- Logo style Airbnb/SpyLive -->
      <div class="mb-7 flex items-center gap-2 select-none">
        <span
          class="inline-flex items-center justify-center bg-pink-100 rounded-full w-14 h-14 shadow"
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
      <h1
        class="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight mb-4 leading-tight"
      >
        Vends en live avant même d’avoir un site
      </h1>
      <p class="text-base md:text-lg text-gray-500 max-w-md mx-auto mb-10">
        La plateforme la plus rapide pour monétiser ton audience TikTok et
        vendre en live, sans coder, sans site.
      </p>
      <button
        @click="onJoin"
        class="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-lg font-semibold py-3 px-10 rounded-xl shadow-md transition disabled:opacity-60"
      >
        Rejoindre la liste
      </button>
      <div class="mt-10 text-gray-300 text-xs select-none">
        <span
          >Made by
          <span class="font-semibold text-pink-400">SpyLive</span></span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
// Action quand on clique (ouvre un formulaire, modal, waitlist, etc)
const onJoin = () => {
  // À personnaliser : modale, redirection, etc.
  alert("Fonction Rejoindre la liste à brancher ici 🚀");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
