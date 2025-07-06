<template>
  <section
    class="relative min-h-[110vh] pt-20 md:pt-32 pb-10 bg-gradient-to-br from-pink-50 via-blue-50 to-teal-50 px-2 sm:px-4 font-sans"
  >
    <!-- Background déco -->
    <div
      class="absolute -top-24 -right-20 w-60 h-60 sm:w-72 sm:h-72 bg-teal-100 rounded-full opacity-30 blur-2xl z-0"
    ></div>
    <div
      class="absolute -bottom-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-pink-100 rounded-full opacity-40 blur-2xl z-0"
    ></div>

    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Header contextualisé -->
      <div class="flex flex-col md:flex-row items-center gap-6 mb-8 sm:mb-10">
        <div class="flex-1 text-center md:text-left">
          <span
            class="inline-block px-3 py-1 bg-pink-500 text-white rounded-full font-semibold text-xs mb-2 uppercase shadow"
          >
            Guide local
          </span>
          <h1
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
          >
            Comment vendre sur TikTok Live à {{ city }} ?
          </h1>
          <p
            class="text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0"
          >
            Gagne du temps sur chaque commande TikTok Live. Découvre la méthode
            pour automatiser ton process, du commentaire à la caisse, même sans
            boutique en ligne.
          </p>
        </div>
        <!-- Image illustration -->
        <img
          src=""
          alt="TikTok à la ville"
          class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg border border-white"
        />
      </div>

      <!-- Mini-guide steps -->
      <ol
        class="bg-white/80 shadow rounded-2xl px-4 sm:px-6 py-6 sm:py-8 grid gap-6 mb-7"
      >
        <li class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
          <div class="flex-shrink-0">
            <span
              class="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold text-lg shadow"
              >1</span
            >
          </div>
          <div>
            <h2 class="font-semibold text-lg text-gray-900 mb-1">
              Anime ton live et repère les intentions d’achat
            </h2>
            <p class="text-gray-700 text-sm">
              SpyLive détecte automatiquement les commentaires « je veux »,
              « commande », etc. sur ton live TikTok à {{ city }}.
            </p>
          </div>
        </li>
        <li class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
          <div class="flex-shrink-0">
            <span
              class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold text-lg shadow"
              >2</span
            >
          </div>
          <div>
            <h2 class="font-semibold text-lg text-gray-900 mb-1">
              Un panier préparé en direct
            </h2>
            <p class="text-gray-700 text-sm">
              À chaque commentaire d’achat, SpyLive crée le panier sur Shopify,
              ou prépare un paiement Stripe si tu n’as pas de site.
            </p>
          </div>
        </li>
        <li class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
          <div class="flex-shrink-0">
            <span
              class="w-8 h-8 flex items-center justify-center rounded-full bg-teal-400 text-white font-bold text-lg shadow"
              >3</span
            >
          </div>
          <div>
            <h2 class="font-semibold text-lg text-gray-900 mb-1">
              Les clients retrouvent leur panier en autonomie
            </h2>
            <p class="text-gray-700 text-sm">
              Tu n’as plus à gérer de DMs : tu annonces en live « Cliquez sur le
              lien en bio, tapez votre pseudo TikTok et payez votre panier. »
            </p>
          </div>
        </li>
      </ol>

      <!-- Section bonus valeur locale -->
      <div
        class="bg-blue-50 rounded-xl p-4 sm:p-6 mb-7 flex flex-col md:flex-row gap-4 sm:gap-5 items-center"
      >
        <svg
          class="w-8 h-8 sm:w-10 sm:h-10 text-pink-400"
          fill="none"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="#f43f5e"
            stroke-width="4"
            fill="#f9fafb"
          />
          <path
            d="M16 28L24 36L32 28"
            stroke="#f43f5e"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M24 14V34"
            stroke="#f43f5e"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <div>
          <h3 class="font-bold text-gray-800 mb-1">
            Pourquoi ça marche à {{ city }} ?
          </h3>
          <p class="text-gray-600 text-sm">
            Les lives TikTok cartonnent ici : gagne un avantage sur tes
            concurrents locaux avec un checkout simplifié pour tes viewers.
          </p>
        </div>
      </div>

      <!-- CTA encadré, distinct du reste -->
      <div
        class="flex flex-col items-center bg-gradient-to-r from-pink-400 via-blue-400 to-teal-400 rounded-2xl shadow-lg p-5 sm:p-7"
      >
        <div class="text-white text-lg sm:text-xl font-bold mb-2 text-center">
          Prêt à booster tes ventes TikTok Live à {{ city }} ?
        </div>
        <NuxtLink
          to="/#waitlist"
          class="bg-white text-pink-500 hover:text-white hover:bg-pink-600 transition rounded-xl px-7 py-3 font-semibold text-base sm:text-lg shadow active:scale-95 text-center"
        >
          🎟️ Rejoindre la beta
        </NuxtLink>
        <p class="mt-2 text-white/80 text-xs text-center">
          Zéro engagement • Fonctionne avec ou sans boutique
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { cities } from "~/utils/dataset";
import { usePageSeo } from "~/composables/usePageSeo";

const route = useRoute();
const router = useRouter();
const citySlug = route.params.city as string;
const cityData = cities.find((c) => c.slug === citySlug);

if (!cityData) {
  if (process.client) router.replace("/404");
}
const { city, province, locale } = cityData || {
  city: "",
  province: "",
  locale: "en-CA",
};

usePageSeo(
  `Vendre sur TikTok Live à ${city} (${province}) | SpyLive`,
  `Guide pratique pour automatiser la vente TikTok Live à ${city}. Créez des paniers instantanés pour vos clients, que vous utilisiez Shopify ou Stripe.`,
  locale
);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
