<template>
  <section
    class="relative min-h-[100vh] pt-20 md:pt-32 pb-14 bg-gradient-to-br from-pink-50 via-blue-50 to-teal-50 px-2 sm:px-4 font-sans"
  >
    <!-- Déco -->
    <div
      class="absolute -top-16 left-0 w-56 h-56 bg-pink-100 rounded-full opacity-40 blur-2xl z-0"
    ></div>
    <div
      class="absolute -bottom-24 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-2xl z-0"
    ></div>

    <div class="max-w-2xl mx-auto relative z-10">
      <!-- Hero -->
      <div class="flex flex-col items-center text-center mb-7">
        <div class="flex items-center justify-center mb-4">
          <span
            class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-blue-400 to-teal-400 shadow-lg"
          >
            <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
        <span
          class="uppercase tracking-widest text-xs font-bold text-pink-500 mb-2"
          >Guide TikTok Live</span
        >
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight"
        >
          {{ guide.title }}
        </h1>
        <p class="text-gray-600 text-base sm:text-lg mb-3 max-w-md mx-auto">
          {{ guide.meta_description }}
        </p>
      </div>

      <!-- Badges mots-clés -->
      <div class="flex flex-wrap gap-2 mb-7 justify-center">
        <span
          v-for="kw in allKeywords"
          :key="kw"
          class="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-100"
          >#{{ kw }}</span
        >
      </div>

      <!-- Steps -->
      <div class="flex flex-col gap-5 mb-10">
        <div
          v-for="(step, i) in guide.steps || []"
          :key="i"
          class="bg-white/95 rounded-xl shadow-md px-5 py-6 flex flex-col sm:flex-row items-start gap-4 border border-pink-50"
        >
          <div
            class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-teal-300 text-white font-extrabold text-lg shadow-md border-2 border-white"
          >
            {{ i + 1 }}
          </div>
          <div>
            <h2
              v-if="step.title"
              class="font-bold text-gray-900 mb-1 text-base sm:text-lg"
            >
              {{ step.title }}
            </h2>
            <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
              {{ step.content }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA card -->
      <div
        class="mt-7 bg-gradient-to-br from-pink-500 via-blue-400 to-teal-400 rounded-2xl px-6 py-7 shadow-2xl flex flex-col items-center border border-pink-200"
      >
        <div
          class="text-white font-bold text-lg sm:text-xl mb-2 text-center drop-shadow"
        >
          Prêt à passer à l'action ?
        </div>
        <NuxtLink
          to="/"
          class="mt-2 inline-block bg-white hover:bg-pink-600 hover:text-white text-pink-500 font-bold text-base sm:text-lg px-8 py-3 rounded-xl shadow-lg transition active:scale-95 border-2 border-white"
        >
          🎟️ Rejoindre la beta
        </NuxtLink>
        <p class="mt-3 text-white/80 text-xs text-center">
          Accès gratuit & immédiat — Communauté SpyLive
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { guides } from "~/utils/guides";
import { usePageSeo } from "~/composables/usePageSeo";

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
const guide = guides.find((g) => g.slug === slug) || {};

if (!guide.slug) {
  if (process.client) router.replace("/404");
}

// Keywords pour badges
const allKeywords = [
  guide.primary_keyword,
  ...(guide.secondary_keywords || []),
].filter(Boolean);

usePageSeo(
  guide.meta_title || guide.title || "",
  guide.meta_description || "",
  guide.locale || "fr-CA"
);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
