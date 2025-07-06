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
  title: "TikTok Live ➜ Shopify en 1 s",
  description: "SpyLive crée le panier Shopify dès que ton viewer commente buy",
  canonical: `https://spylive.shop${useRoute().path}`,
  hreflang: "fr",
});

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
