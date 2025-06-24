<template>
  <transition name="fade-modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      @click.self="close"
    >
      <div
        class="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-4 p-8 md:p-10 relative animate-fadein flex flex-col"
      >
        <!-- Bouton close -->
        <button
          @click="close"
          class="absolute top-4 right-5 text-gray-400 hover:text-pink-500 transition text-2xl"
        >
          ×
        </button>
        <!-- Titre -->
        <h2
          class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center"
        >
          Quelques questions pour mieux te connaître
        </h2>
        <p class="text-gray-500 text-base mb-8 text-center">
          Merci ! Ça nous aide à construire l’outil parfait pour toi.
        </p>

        <form class="flex flex-col gap-6" @submit.prevent="submit">
          <!-- Rôle -->
          <div>
            <label class="block font-semibold mb-2 text-gray-700"
              >Quel est ton rôle&nbsp;?</label
            >
            <div class="flex flex-col gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.role"
                  value="Entrepreneur/e-com"
                  class="accent-pink-500"
                />
                Entrepreneur/e-com (marque propre)
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.role"
                  value="Revendeur/dropshipping"
                  class="accent-pink-500"
                />
                Revendeur/dropshipping
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.role"
                  value="Créateur de contenu"
                  class="accent-pink-500"
                />
                Créateur de contenu (influenceur)
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.role"
                  value="Hobby"
                  class="accent-pink-500"
                />
                Hobby / Loisir
              </label>
            </div>
          </div>

          <!-- Secteur -->
          <div>
            <label class="block font-semibold mb-2 text-gray-700"
              >Catégorie principale que tu vends&nbsp;?</label
            >
            <div class="flex flex-col gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.sector"
                  value="Beauté & soins"
                  class="accent-blue-500"
                />
                Beauté & soins
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.sector"
                  value="Mode & accessoires"
                  class="accent-blue-500"
                />
                Mode & accessoires
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.sector"
                  value="Maison/déco"
                  class="accent-blue-500"
                />
                Maison/déco
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.sector"
                  value="Tech/gadgets"
                  class="accent-blue-500"
                />
                Tech/gadgets
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.sector"
                  value="Produits digitaux"
                  class="accent-blue-500"
                />
                Produits digitaux
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.sector"
                  value="Autre"
                  class="accent-blue-500"
                />
                Autre
              </label>
            </div>
          </div>

          <!-- Audience -->
          <div>
            <label class="block font-semibold mb-2 text-gray-700"
              >Audience moyenne par live&nbsp;?</label
            >
            <div class="flex flex-col sm:flex-row gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.audience"
                  value="<50"
                  class="accent-teal-500"
                />
                &lt; 50
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.audience"
                  value="50-200"
                  class="accent-teal-500"
                />
                50-200
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.audience"
                  value="200-1000"
                  class="accent-teal-500"
                />
                200-1 000
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.audience"
                  value="1000+"
                  class="accent-teal-500"
                />
                1 000+
              </label>
            </div>
          </div>

          <!-- CA par live -->
          <div>
            <label class="block font-semibold mb-2 text-gray-700"
              >Chiffre d’affaires moyen par live&nbsp;?</label
            >
            <div class="flex flex-col sm:flex-row gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.revenue"
                  value="0–50€"
                  class="accent-pink-500"
                />
                0–50€
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.revenue"
                  value="50–200€"
                  class="accent-pink-500"
                />
                50–200€
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.revenue"
                  value="200–1000€"
                  class="accent-pink-500"
                />
                200–1 000€
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.revenue"
                  value="1000€+"
                  class="accent-pink-500"
                />
                1 000€+
              </label>
            </div>
          </div>

          <!-- Paiement actuel -->
          <div>
            <label class="block font-semibold mb-2 text-gray-700"
              >Comment tu encaisses tes clients aujourd’hui&nbsp;?</label
            >
            <div class="flex flex-col gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.process"
                  value="Lien Stripe manuel"
                  class="accent-pink-500"
                />
                Je mets un lien Stripe manuel
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.process"
                  value="DM client"
                  class="accent-pink-500"
                />
                Je DM chaque client
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.process"
                  value="Shopify Live"
                  class="accent-pink-500"
                />
                J’utilise Shopify Live
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.process"
                  value="Aucun"
                  class="accent-pink-500"
                />
                Aucun pour l’instant
              </label>
            </div>
          </div>

          <!-- Découverte (NEW) -->
          <div>
            <label class="block font-semibold mb-2 text-gray-700"
              >Où as-tu entendu parler de nous&nbsp;?</label
            >
            <div class="flex flex-col gap-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.discovery"
                  value="TikTok"
                  class="accent-blue-500"
                />
                TikTok
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.discovery"
                  value="Instagram"
                  class="accent-blue-500"
                />
                Instagram
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.discovery"
                  value="Google"
                  class="accent-blue-500"
                />
                Google
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.discovery"
                  value="Bouche à oreille"
                  class="accent-blue-500"
                />
                Bouche à oreille
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.discovery"
                  value="Ami/Collègue"
                  class="accent-blue-500"
                />
                Ami/Collègue
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.discovery"
                  value="Autre"
                  class="accent-blue-500"
                />
                Autre
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

          <!-- Beta testeur -->
          <label
            class="flex items-center gap-2 cursor-pointer select-none text-gray-600"
          >
            <input
              type="checkbox"
              v-model="form.beta"
              class="accent-blue-500 h-5 w-5 rounded border-gray-300"
            />
            Je veux être
            <span class="font-semibold text-blue-500">bêta-testeur</span>
          </label>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="mt-2 w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-lg font-semibold py-3 rounded-xl shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed animate-bounceonce"
          >
            {{ loading ? "Envoi..." : "Envoyer et finaliser mon inscription" }}
          </button>
        </form>

        <transition name="fadein-scale">
          <div
            v-if="done"
            class="flex flex-col items-center justify-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-base font-medium shadow mt-6 text-center"
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
  </transition>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue", "submitted"]);

const close = () => emit("update:modelValue", false);

const form = ref({
  role: "",
  sector: "",
  audience: "",
  revenue: "",
  process: "",
  discovery: "",
  challenge: "",
  beta: false,
});

const loading = ref(false);
const done = ref(false);

const submit = async () => {
  done.value = false;
  loading.value = true;
  // 🔴 API call ici si besoin
  await new Promise((r) => setTimeout(r, 900));
  done.value = true;
  loading.value = false;
  emit("submitted", { ...form.value });
  setTimeout(() => {
    close();
    done.value = false;
    form.value = {
      role: "",
      sector: "",
      audience: "",
      revenue: "",
      process: "",
      discovery: "",
      challenge: "",
      beta: false,
    };
  }, 1700);
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
