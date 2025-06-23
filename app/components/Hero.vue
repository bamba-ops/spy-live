<script setup></script>

<template>
  <div
    class="max-w-md mx-auto rounded-2xl bg-white shadow-lg p-6 my-8 flex flex-col gap-5"
  >
    <!-- Logo & Title -->
    <div class="flex items-center gap-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/09/TikTok_logo.svg"
        alt="TikTok Live Logo"
        class="w-12 h-12 rounded-lg shadow"
      />
      <div>
        <h2 class="font-bold text-xl text-gray-900">
          Automatise les paiements TikTok Live
        </h2>
        <p class="text-sm text-gray-500">
          Par <span class="font-medium text-indigo-600">[Nom de ton SaaS]</span>
        </p>
      </div>
    </div>
    <!-- Main Feature -->
    <div>
      <p class="text-gray-700 leading-relaxed">
        Simplifie ton processus de paiement pendant tes lives TikTok ! Connecte
        ton compte, active l’automatisation, et laisse notre outil s’occuper du
        reste : notifications, suivi, confirmations en temps réel.
      </p>
    </div>
    <!-- Features List -->
    <ul class="flex flex-col gap-2 mt-2">
      <li class="flex items-center gap-2">
        <span class="w-3 h-3 bg-green-400 rounded-full"></span>
        Paiement instantané & sécurisé
      </li>
      <li class="flex items-center gap-2">
        <span class="w-3 h-3 bg-blue-400 rounded-full"></span>
        Notifications automatiques pendant le live
      </li>
      <li class="flex items-center gap-2">
        <span class="w-3 h-3 bg-pink-400 rounded-full"></span>
        Statistiques et dashboard intuitif
      </li>
    </ul>
    <!-- CTA Button -->
    <div>
      <button
        class="w-full py-3 px-4 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
      >
        Essayer gratuitement
      </button>
    </div>
    <!-- Trust Badge (facultatif, type Airbnb) -->
    <div
      class="flex items-center justify-center mt-2 gap-1 text-gray-400 text-xs"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>Satisfait ou remboursé sous 14 jours</span>
    </div>
  </div>
</template>
