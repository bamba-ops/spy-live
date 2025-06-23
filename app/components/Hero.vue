<template>
  <section
    class="relative flex flex-col justify-center items-center w-full min-h-[70vh] bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans"
  >
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Légers effets/flous ambiance airbnb -->
      <div
        class="absolute left-1/2 top-0 -translate-x-1/2 w-[320px] h-[120px] md:w-[500px] md:h-[180px] bg-pink-100 opacity-40 rounded-full blur-2xl"
      ></div>
      <div
        class="absolute right-6 bottom-10 w-[160px] h-[70px] bg-teal-100 opacity-30 rounded-full blur-2xl"
      ></div>
    </div>
    <div
      class="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl w-full py-20"
    >
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight mb-6 leading-tight drop-shadow-sm"
      >
        Vends en live avant même d’avoir un site.
      </h1>
      <p
        class="text-lg md:text-2xl text-gray-600 mb-10 max-w-lg mx-auto font-medium"
      >
        Accélère tes ventes : SpyLive te permet de monétiser ton audience TikTok
        <span class="bg-pink-100 px-1 rounded">en quelques clics</span> et sans
        aucune tech.
        <span class="hidden md:inline"
          >ShipFast, pas d’excuse : lance-toi aujourd’hui.</span
        >
      </p>
      <button
        @click="onJoin"
        class="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
      >
        🚀 Rejoindre la liste
      </button>
    </div>
  </section>
</template>

<script setup>
const onJoin = () => {
  // À personnaliser : ouvrir ta modale, redirect, etc.
  alert("À brancher : rejoindre la liste 🚀");
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
