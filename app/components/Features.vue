<template>
  <!-- SECTION FONCTIONNALITÉS -->
  <section id="features" class="py-16 md:py-24 bg-white/80 font-sans">
    <div class="max-w-3xl mx-auto px-4">
      <!-- Heading principal -->
      <div class="mb-12 text-center">
        <h2
          class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
        >
          <span class="text-pink-500">3 actions</span> pour transformer ton
          live<br class="hidden md:inline" />
          en <span class="text-blue-500">caisse instantanée</span>
        </h2>
        <p
          class="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto"
        >
          Clique pour voir chaque étape… ça va aller très vite.
        </p>
      </div>

      <div class="space-y-6">
        <!-- Feature 1 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition border border-gray-100"
        >
          <button
            @click="activeIndex = activeIndex === 0 ? null : 0"
            class="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
          >
            <span
              class="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-900"
            >
              💬 Commentaire ➜ panier prêt
            </span>
            <svg
              :class="{
                'rotate-180': activeIndex === 0,
                'text-pink-500': activeIndex === 0,
              }"
              class="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <transition name="fade">
            <div v-if="activeIndex === 0" class="px-6 pb-6">
              <p class="text-gray-700 text-base md:text-lg font-medium mb-4">
                Le viewer tape : “Noir M”.<br />
                <span class="text-pink-500"
                  >SpyLive reconnaît produit & taille,</span
                >
                génère un lien Stripe en 1 seconde.<br />
                <span class="text-gray-500">Fini les copier-coller.</span>
              </p>
              <img
                src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//PRaliseavecClipchamp-ezgif.com-crop.gif"
                alt="Achat instantané en live TikTok"
                class="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </transition>
        </div>

        <!-- Feature 2 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition border border-gray-100"
        >
          <button
            @click="activeIndex = activeIndex === 1 ? null : 1"
            class="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
          >
            <span
              class="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-900"
            >
              🔗 Lien bio : paiement en 1 clic
            </span>
            <svg
              :class="{
                'rotate-180': activeIndex === 1,
                'text-pink-500': activeIndex === 1,
              }"
              class="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <transition name="fade">
            <div v-if="activeIndex === 1" class="px-6 pb-6">
              <p class="text-gray-700 text-base md:text-lg font-medium mb-4">
                Pas trouvé le message ?
                <span class="text-blue-500">Le client ouvre ton lien bio,</span>
                tape son pseudo → son panier magique l’attend.<br />
                <span class="text-gray-500">Un seul clic pour encaisser.</span>
              </p>
              <img
                src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//ScreenRecording_06-23-2025%2020-43-25_1.gif"
                alt="Lien paiement rapide en bio"
                class="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </transition>
        </div>

        <!-- Feature 3 -->
        <div
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition border border-gray-100"
        >
          <button
            @click="activeIndex = activeIndex === 2 ? null : 2"
            class="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
          >
            <span
              class="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-900"
            >
              📈 Cash direct sur Stripe
            </span>
            <svg
              :class="{
                'rotate-180': activeIndex === 2,
                'text-pink-500': activeIndex === 2,
              }"
              class="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <transition name="fade">
            <div v-if="activeIndex === 2" class="px-6 pb-6">
              <p class="text-gray-700 text-base md:text-lg font-medium mb-4">
                Chaque paiement s’affiche en live sur ton
                <span class="text-pink-500">dashboard Stripe</span>.<br />
                <span class="text-gray-500"
                  >Tu regardes ton CA grimper, sans lever le doigt.</span
                >
              </p>
              <img
                src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//stripe.png"
                alt="Dashboard Stripe, ventes en temps réel"
                class="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeIndex = ref(null);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
