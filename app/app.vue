<script setup>
/* Meta “site-wide” si une page oublie d’en définir */
useSeoMeta({
  titleTemplate: "%s · SpyLive",
  ogSiteName: "SpyLive",
  twitterSite: "@spylive_app",
  robots: "index,follow",
});
</script>

<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>
