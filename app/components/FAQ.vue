<template>
  <section class="max-w-2xl mx-auto w-full px-4 py-12">
    <h2
      class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight"
    >
      Questions fréquentes
    </h2>
    <div class="space-y-4">
      <div
        v-for="(item, i) in faqs"
        :key="i"
        class="bg-white/90 rounded-2xl shadow-md transition"
      >
        <button
          class="w-full flex justify-between items-center px-5 py-4 focus:outline-none select-none text-left rounded-2xl"
          :class="
            opened === i ? 'bg-pink-50/80' : 'bg-white/90 hover:bg-pink-50/60'
          "
          @click="opened = opened === i ? null : i"
          aria-expanded="opened === i"
        >
          <span class="font-semibold text-gray-800 text-lg">
            {{ item.q }}
          </span>
          <span
            class="ml-4 flex-shrink-0 transition-transform duration-300"
            :class="
              opened === i
                ? 'rotate-45 text-pink-500'
                : 'rotate-0 text-gray-400'
            "
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
        <transition name="fadein-scale">
          <div
            v-if="opened === i"
            class="px-5 pb-5 text-gray-600 text-base leading-relaxed border-t border-pink-100"
          >
            {{ item.a }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
// Questions/réponses fictives adaptées à une landing SaaS TikTok Live :
const faqs = [
  {
    q: "Ai-je besoin d’un site pour vendre en live avec SpyLive ?",
    a: "Non, SpyLive te permet de vendre directement en live sur TikTok, sans site e-commerce ni intégration technique. Tout se passe dans un seul dashboard, simple et rapide.",
  },
  {
    q: "Comment mes clients accèdent-ils à leur panier pendant le live ?",
    a: "Il suffit de leur demander de cliquer sur le lien dans ta bio TikTok. Ils entrent simplement leur pseudo TikTok, et retrouvent instantanément leur panier prêt à payer.",
  },
  {
    q: "SpyLive fonctionne-t-il avec d’autres plateformes que TikTok ?",
    a: "Aujourd’hui, SpyLive est optimisé pour TikTok Live. Nous prévoyons prochainement l’ouverture à Instagram Live et YouTube.",
  },
  {
    q: "Est-ce que je peux personnaliser le panier ou le lien pour mes clients ?",
    a: "Oui, tu contrôles à tout moment le contenu du panier pour chaque acheteur depuis ton dashboard. Le lien en bio ne change pas : c’est l’expérience la plus simple possible pour tes viewers.",
  },
  {
    q: "Mes ventes sont-elles instantanément créditées ?",
    a: "Oui, tu vois tes ventes en temps réel dans ton dashboard, et chaque transaction s’affiche dès que le paiement est validé.",
  },
  {
    q: "SpyLive est-il compatible avec Shopify ou d’autres CMS ?",
    a: "Prochainement, tu pourras connecter ton CMS (Shopify, WooCommerce, etc.) à SpyLive pour une synchronisation totale. Pour l’instant, SpyLive fonctionne en autonomie, sans boutique nécessaire.",
  },
  {
    q: "Comment rejoindre la bêta ?",
    a: "Il suffit de laisser ton email sur la page d’accueil. Tu recevras un accès prioritaire dès l’ouverture officielle !",
  },
];

const opened = ref(null);
</script>

<style scoped>
.fadein-scale-enter-active,
.fadein-scale-leave-active {
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fadein-scale-enter-from,
.fadein-scale-leave-to {
  opacity: 0;
  transform: scale(0.97) translateY(8px);
}
</style>
