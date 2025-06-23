<script setup></script>

<template>
  <section class="bg-white py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto text-center flex flex-col items-center">
      <span
        class="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-semibold mb-4 tracking-wide"
      >
        🚀 Pour créateurs TikTok Live
      </span>
      <h1
        class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight"
      >
        Vends en live avant même d’avoir un site
      </h1>
      <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        Automatise ton processus de paiement sur TikTok Live et concentre-toi
        sur tes ventes. Plus besoin de gérer les commandes à la main, on
        s’occupe de tout.
      </p>
      <form
        @submit.prevent
        class="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-md mx-auto"
      >
        <input
          type="email"
          required
          placeholder="Ton email"
          class="flex-1 w-full rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black px-4 py-3 text-base placeholder-gray-400 transition"
        />
        <button
          type="submit"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-black hover:bg-gray-800 transition"
        >
          Rejoindre la liste
        </button>
      </form>
      <div class="mt-6 text-xs text-gray-400">
        ⚡️ Déjà +150 créateurs inscrits
      </div>
    </div>
  </section>
</template>
