<template>
  <transition name="fade-modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      @click.self="close"
    >
      <div
        class="bg-white/90 rounded-3xl shadow-2xl w-full max-w-lg mx-4 p-0 relative animate-fadein flex flex-col max-h-[85vh] md:max-h-[90vh] ring-2 ring-pink-100/40 backdrop-blur-sm"
      >
        <!-- Header -->
        <div
          class="flex-shrink-0 relative px-6 pt-7 pb-3 bg-white rounded-t-3xl shadow-md"
        >
          <button
            @click="close"
            class="absolute top-4 right-4 text-gray-400 hover:text-pink-500 transition text-3xl font-bold"
          >
            ×
          </button>
          <h2
            class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 text-center tracking-tight"
          >
            🙌 Quelques questions pour toi
          </h2>
          <p class="text-gray-500 text-base mb-2 text-center">
            On te prépare l’outil parfait, aide-nous à le personnaliser.
          </p>
        </div>
        <!-- Scrollable form -->
        <div class="overflow-y-auto px-6 pt-2 pb-6 flex-1 min-h-0">
          <form class="flex flex-col gap-6" @submit.prevent="submit">
            <!-- Rôle -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Quel est ton rôle&nbsp;?</label
              >
              <div class="flex flex-col gap-2">
                <label
                  v-for="option in roles"
                  :key="option"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.role"
                    :value="option"
                    class="accent-pink-500"
                  />
                  {{ option }}
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-model="form.role"
                    value="Autre"
                    class="accent-pink-500"
                  />
                  Autre
                  <transition name="fadein-scale">
                    <input
                      v-if="form.role === 'Autre'"
                      v-model="form.roleOther"
                      type="text"
                      maxlength="32"
                      placeholder="Précise ton rôle"
                      class="ml-2 px-3 py-1 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-200 bg-pink-50 text-base shadow transition placeholder-pink-300 w-full max-w-[200px]"
                      required
                    />
                  </transition>
                </label>
              </div>
            </div>
            <!-- Secteur -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Catégorie principale que tu vends&nbsp;?</label
              >
              <div class="flex flex-col gap-2">
                <label
                  v-for="option in sectors"
                  :key="option"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.sector"
                    :value="option"
                    class="accent-blue-500"
                  />
                  {{ option }}
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-model="form.sector"
                    value="Autre"
                    class="accent-blue-500"
                  />
                  Autre
                  <transition name="fadein-scale">
                    <input
                      v-if="form.sector === 'Autre'"
                      v-model="form.sectorOther"
                      type="text"
                      maxlength="32"
                      placeholder="Précise ton secteur"
                      class="ml-2 px-3 py-1 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-200 bg-blue-50 text-base shadow transition placeholder-blue-300 w-full max-w-[200px]"
                      required
                    />
                  </transition>
                </label>
              </div>
            </div>
            <!-- Audience -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Audience moyenne par live&nbsp;?</label
              >
              <div class="flex flex-col sm:flex-row gap-2">
                <label
                  v-for="option in audiences"
                  :key="option"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.audience"
                    :value="option"
                    class="accent-teal-500"
                  />
                  {{ option }}
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-model="form.audience"
                    value="Autre"
                    class="accent-teal-500"
                  />
                  Autre
                  <transition name="fadein-scale">
                    <input
                      v-if="form.audience === 'Autre'"
                      v-model="form.audienceOther"
                      type="text"
                      maxlength="24"
                      placeholder="Précise ton audience"
                      class="ml-2 px-3 py-1 rounded-lg border border-teal-100 focus:ring-2 focus:ring-teal-200 bg-teal-50 text-base shadow transition placeholder-teal-300 w-full max-w-[140px]"
                      required
                    />
                  </transition>
                </label>
              </div>
            </div>
            <!-- CA par live -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Chiffre d’affaires moyen par live&nbsp;?</label
              >
              <div class="flex flex-col sm:flex-row gap-2">
                <label
                  v-for="option in revenues"
                  :key="option"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.revenue"
                    :value="option"
                    class="accent-pink-500"
                  />
                  {{ option }}
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-model="form.revenue"
                    value="Autre"
                    class="accent-pink-500"
                  />
                  Autre
                  <transition name="fadein-scale">
                    <input
                      v-if="form.revenue === 'Autre'"
                      v-model="form.revenueOther"
                      type="text"
                      maxlength="16"
                      placeholder="Ex : 3500€/live"
                      class="ml-2 px-3 py-1 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-200 bg-pink-50 text-base shadow transition placeholder-pink-300 w-full max-w-[110px]"
                      required
                    />
                  </transition>
                </label>
              </div>
            </div>
            <!-- Paiement actuel -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Comment tu encaisses tes clients aujourd’hui&nbsp;?</label
              >
              <div class="flex flex-col gap-2">
                <label
                  v-for="option in processList"
                  :key="option"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.process"
                    :value="option"
                    class="accent-pink-500"
                  />
                  {{ option }}
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-model="form.process"
                    value="Autre"
                    class="accent-pink-500"
                  />
                  Autre
                  <transition name="fadein-scale">
                    <input
                      v-if="form.process === 'Autre'"
                      v-model="form.processOther"
                      type="text"
                      maxlength="32"
                      placeholder="Précise ta méthode"
                      class="ml-2 px-3 py-1 rounded-lg border border-pink-100 focus:ring-2 focus:ring-pink-200 bg-pink-50 text-base shadow transition placeholder-pink-300 w-full max-w-[180px]"
                      required
                    />
                  </transition>
                </label>
              </div>
            </div>
            <!-- Découverte -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Où as-tu entendu parler de nous&nbsp;?</label
              >
              <div class="flex flex-col gap-2">
                <label
                  v-for="option in discoveryList"
                  :key="option"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.discovery"
                    :value="option"
                    class="accent-blue-500"
                  />
                  {{ option }}
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    v-model="form.discovery"
                    value="Autre"
                    class="accent-blue-500"
                  />
                  Autre
                  <transition name="fadein-scale">
                    <input
                      v-if="form.discovery === 'Autre'"
                      v-model="form.discoveryOther"
                      type="text"
                      maxlength="40"
                      placeholder="Où ?"
                      class="ml-2 px-3 py-1 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-200 bg-blue-50 text-base shadow transition placeholder-blue-300 w-full max-w-[180px]"
                      required
                    />
                  </transition>
                </label>
              </div>
            </div>
            <!-- Challenge -->
            <div>
              <label class="block font-semibold mb-2 text-gray-700"
                >Ton plus gros blocage aujourd’hui&nbsp;?</label
              >
              <input
                v-model="form.challenge"
                type="text"
                maxlength="120"
                placeholder="Ex : Gérer le flux des commandes en live"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300 bg-gray-50 text-base placeholder-gray-400 shadow-sm transition"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="loading"
              class="mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-blue-400 to-pink-400 hover:from-pink-600 hover:to-blue-400 active:scale-95 text-white text-lg font-semibold py-3 rounded-xl shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed relative animate-bounceonce"
            >
              <span v-if="loading" class="absolute left-5 flex items-center">
                <svg
                  class="animate-spin h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              </span>
              <span :class="loading ? 'opacity-40' : ''">
                {{
                  loading ? "Envoi..." : "Envoyer et finaliser mon inscription"
                }}
              </span>
            </button>
          </form>

          <!-- Feedback (toujours visible sans scroll auto) -->
          <transition name="fadein-scale">
            <div
              v-if="done"
              ref="feedback"
              class="flex flex-col items-center justify-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-base font-medium shadow mt-6 text-center"
              tabindex="-1"
            >
              <svg
                class="w-7 h-7 mx-auto"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Merci pour tes réponses ! Tu recevras un accès prioritaire 🚀
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { createClient } from "@supabase/supabase-js";
import { data } from "autoprefixer";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey
);
const feedback = ref(null);

const props = defineProps({
  modelValue: Boolean,
  email: String,
});
const emit = defineEmits(["update:modelValue", "submitted"]);

const close = () => emit("update:modelValue", false);

const roles = [
  "Entrepreneur/e-com (marque propre)",
  "Revendeur/dropshipping",
  "Créateur de contenu (influenceur)",
  "Hobby / Loisir",
];

const sectors = [
  "Beauté & soins",
  "Mode & accessoires",
  "Maison/déco",
  "Tech/gadgets",
  "Produits digitaux",
];

const audiences = ["< 50", "50-200", "200-1 000", "1 000+"];

const revenues = ["0–50$", "50–200$", "200–1 000$", "1 000$+"];

const processList = [
  "Lien Stripe manuel",
  "DM client",
  "Shopify Live",
  "Aucun pour l’instant",
];

const discoveryList = [
  "TikTok",
  "Instagram",
  "Google",
  "Bouche à oreille",
  "Ami/Collègue",
];

const form = ref({
  role: "",
  roleOther: "",
  sector: "",
  sectorOther: "",
  audience: "",
  audienceOther: "",
  revenue: "",
  revenueOther: "",
  process: "",
  processOther: "",
  discovery: "",
  discoveryOther: "",
  challenge: "",
});

const loading = ref(false);
const done = ref(false);

const submit = async () => {
  done.value = false;
  loading.value = true;

  // Replace "Autre" value by input if needed
  const toSend = {
    role: form.value.role === "Autre" ? form.value.roleOther : form.value.role,
    role_other: form.value.role === "Autre" ? form.value.roleOther : "",
    sector:
      form.value.sector === "Autre"
        ? form.value.sectorOther
        : form.value.sector,
    sector_other: form.value.sector === "Autre" ? form.value.sectorOther : "",
    audience:
      form.value.audience === "Autre"
        ? form.value.audienceOther
        : form.value.audience,
    audience_other:
      form.value.audience === "Autre" ? form.value.audienceOther : "",
    revenue:
      form.value.revenue === "Autre"
        ? form.value.revenueOther
        : form.value.revenue,
    revenue_other:
      form.value.revenue === "Autre" ? form.value.revenueOther : "",
    process:
      form.value.process === "Autre"
        ? form.value.processOther
        : form.value.process,
    process_other:
      form.value.process === "Autre" ? form.value.processOther : "",
    discovery:
      form.value.discovery === "Autre"
        ? form.value.discoveryOther
        : form.value.discovery,
    discovery_other:
      form.value.discovery === "Autre" ? form.value.discoveryOther : "",
    challenge: form.value.challenge,
  };

  try {
    // Envoi vers Supabase (table "leads")
    console.log(props.email);
    const { data, error: supaError } = await supabase
      .from("leads")
      .update(toSend)
      .eq("email", props.email)
      .select();
    if (supaError) {
      console.log(supaError.message);
    } else {
      console.log(data);
      done.value = true;
      await nextTick();
      // Scroll vers le feedback
      if (feedback.value) {
        feedback.value.scrollIntoView({ behavior: "smooth", block: "center" });
        feedback.value.focus(); // accessibilité
      }
      emit("submitted", toSend);
      setTimeout(() => {
        close();
        done.value = false;
        form.value = {
          role: "",
          roleOther: "",
          sector: "",
          sectorOther: "",
          audience: "",
          audienceOther: "",
          revenue: "",
          revenueOther: "",
          process: "",
          processOther: "",
          discovery: "",
          discoveryOther: "",
          challenge: "",
        };
      }, 1700);
    }
  } catch (e) {
    console.log(`Erreur réseau ${e}`);
  }
  loading.value = false;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}

@keyframes fadein-modal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fadein {
  animation: fadein-modal 0.65s cubic-bezier(0.51, 1.54, 0.45, 0.98) both;
}

.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}

.fadein-scale-enter-active,
.fadein-scale-leave-active {
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fadein-scale-enter-from,
.fadein-scale-leave-to {
  opacity: 0;
  transform: scale(0.97) translateY(10px);
}

.animate-bounceonce {
  animation: bounceonce 0.7s;
}
@keyframes bounceonce {
  0% {
    transform: scale(1);
  }
  18% {
    transform: scale(1.07);
  }
  43% {
    transform: scale(0.97);
  }
  65% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
</style>
