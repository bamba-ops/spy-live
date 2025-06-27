<template>
  <section
    class="relative min-h-[110vh] flex items-center justify-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans overflow-hidden"
  >
    <div
      class="flex flex-col items-center text-center w-full max-w-2xl mx-auto z-10 pt-10 pb-16"
    >
      <!-- Compteur LIVE TikTok stylisé -->
      <div class="flex flex-col items-center w-full mb-8">
        <div class="flex items-center gap-3 mb-2">
          <!-- Badge LIVE animé -->
          <span class="relative flex items-center">
            <span
              class="absolute inset-0 animate-ping rounded-full bg-pink-500 opacity-50"
            ></span>
            <span
              class="relative flex items-center px-4 py-1 rounded-full bg-pink-500 text-white font-bold tracking-wider shadow-lg text-lg uppercase border-4 border-white select-none z-10"
            >
              <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#fff" opacity="0.16" />
                <circle cx="10" cy="10" r="4" fill="#fff" opacity="0.34" />
                <circle cx="10" cy="10" r="2" fill="#f43f5e" />
              </svg>
              LIVE
            </span>
          </span>
          <!-- compteur viewers animé -->
          <span
            class="flex items-center gap-1 bg-white/90 border border-gray-200 px-3 py-1 rounded-full shadow text-gray-900 font-semibold text-base ml-2"
          >
            <svg
              class="w-5 h-5 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M1.5 12C2.5 7 6.5 4 12 4s9.5 3 10.5 8c-1 5-5 8-10.5 8s-9.5-3-10.5-8z"
              />
              <circle cx="12" cy="12" r="3.2" fill="#f43f5e" />
            </svg>
            <span class="tabular-nums"><CountTo :to="viewerCount" /></span>
          </span>
        </div>
      </div>

      <!-- HEADLINE XXL -->
      <h1
        class="text-3xl md:text-5xl font-bold text-gray-900 leading-snug tracking-tight mb-6"
      >
        Un commentaire → paiement immédiat
      </h1>
      <p
        class="text-base md:text-xl text-gray-600 font-normal mb-10 max-w-lg mx-auto leading-relaxed"
      >
        SpyLive détecte la commande sur ton live TikTok
        <br class="hidden md:inline" />
        et génère le lien de paiement en
        <span class="font-semibold text-gray-800">1 seconde</span>.
        <br class="hidden md:inline" />
        <span class="text-pink-500 font-semibold"
          >Zéro clic pour toi, zéro friction pour lui.</span
        >
      </p>
      <button
        @click="scrollToLeads"
        class="bg-pink-500 hover:bg-pink-600 text-white text-base md:text-lg font-semibold px-7 py-3 rounded-xl transition duration-200 active:scale-95 w-full max-w-xs shadow-none"
      >
        🚀 Rejoins la beta privée
      </button>
      <div
        class="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm"
      >
        <span class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"
          ></span>
        </span>
        <span class="tracking-normal"
          >{{ leadsCount + 7 }} créateurs encaissent déjà sans friction</span
        >
      </div>
    </div>

    <!-- Déco bulle façon airbnb moderne -->
    <div
      class="absolute -top-20 -left-32 w-80 h-80 bg-pink-100 rounded-full opacity-30 blur-2xl"
    ></div>
    <div
      class="absolute -bottom-32 -right-44 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-2xl"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey
);

const viewerCount = ref(0);
const leadsCount = ref(0);
const targetCount = 1497; // valeur initiale pour animation viewers

const scrollToLeads = () => {
  const el = document.getElementById("leads");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.warn("Element #leads introuvable");
  }
};

// Animation compteur viewers (indépendant du nombre leads)
onMounted(() => {
  let step = 0;
  const interval = setInterval(() => {
    if (viewerCount.value < targetCount) {
      step = Math.ceil((targetCount - viewerCount.value) / 10);
      viewerCount.value += step;
    } else {
      viewerCount.value = targetCount;
      clearInterval(interval);
    }
  }, 50);
});

// Récupération du nombre de leads en temps réel
const fetchLeadsCount = async () => {
  const { count, error } = await supabase
    .from("leads")
    .select("email", { count: "exact", head: true });
  if (error) {
    console.error("Erreur récupération leads count:", error);
  } else {
    leadsCount.value = count ?? 0;
  }
};

onMounted(() => {
  fetchLeadsCount();
});

// Compteur animé (component minimal)
const CountTo = {
  props: ["to"],
  data() {
    return { current: 0 };
  },
  watch: {
    to(val) {
      this.animateTo(val);
    },
  },
  mounted() {
    this.animateTo(this.to);
  },
  methods: {
    animateTo(val) {
      const start = this.current;
      const end = val;
      const range = end - start;
      if (range === 0) return;
      let step = 0;
      const steps = 25;
      const increment = range / steps;
      const timer = setInterval(() => {
        step++;
        this.current = Math.round(start + increment * step);
        if (step >= steps) {
          this.current = end;
          clearInterval(timer);
        }
      }, 12);
    },
  },
  render() {
    return this.current;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
