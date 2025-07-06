<script setup lang="ts">
import {
  useSchemaOrg,
  defineWebPage,
  defineQuestion,
} from "@unhead/schema-org/vue";
import { useRoute } from "#imports";
import { useSeoMeta } from "@unhead/vue";

// Meta SEO classique
useSeoMeta({
  /* ---- Métas génériques ---- */
  title:       'TikTok Live → Shopify en 1 clic | SpyLive',
  description: 'SpyLive crée le panier Shopify de ton viewer TikTok Live en temps réel. Découvre le plugin gratuit !',

  /* ---- Open Graph ---- */
  ogTitle:       'TikTok Live → Shopify en 1 clic',
  ogDescription: 'Crée automatiquement le panier Shopify quand un viewer commente 🛒',
  ogImage:       'https://spylive.shop/og.webp',
  ogUrl:         'https://spylive.shop/',
  ogType:        'website',

  /* ---- Twitter Card ---- */
  twitterCard:        'summary_large_image',
  twitterSite:        '@bambalerequin',
  twitterCreator:     '@tonCompte',
  twitterTitle:       'TikTok Live → Shopify en 1 clic',
  twitterDescription: 'SpyLive transforme les commentaires en paniers Shopify.',
  twitterImage:       'https://ton-domaine.com/og.webp',
})

// Schema.org pour un FAQPage
useSchemaOrg([
  // on force le type FAQPage sur la page
  defineWebPage({ "@type": "FAQPage" }),

  // chaque defineQuestion génère un Question → sera ajouté au mainEntity
  defineQuestion({
    name: "Ai-je besoin de Shopify ?",
    acceptedAnswer: "Non : Stripe suffit si tu n’as pas de site.",
  }),
]);
</script>

<template>
  <main>
    <Hero />
    <Problem />
    <Features />
    <Leads />
    <FAQ />
  </main>
</template>
