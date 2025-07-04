<script setup lang="ts">
useSeoMeta({
  title: 'SpyLive : Vendre sur TikTok Live et encaisser en 1 clic',
  description:
    'Augmentez vos revenus sur TikTok Live grâce à SpyLive. Génération automatique de liens Stripe pour un paiement instantané.',
  ogTitle: 'SpyLive : Vendre sur TikTok Live et encaisser en 1 clic',
  ogDescription:
    'Avec SpyLive, transformez chaque commentaire en vente sans panier et encaissez directement via Stripe.',
  ogImage:
    'https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//spylive_logo.png',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  meta: [
    {
      name: 'keywords',
      content:
        'spylive, vendre sur tiktok live, gagner argent tiktok, lien paiement automatique, stripe, tiktok live shopping'
    }
  ]
})
</script>

<template>
  <div>
    <Hero />
    <Problem />
    <Features />
    <Leads />
    <FAQ />
  </div>
</template>
