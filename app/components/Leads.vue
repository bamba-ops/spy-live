<template>
  <section
    id="leads"
    class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans relative overflow-hidden"
  >
    <div
      class="w-full max-w-lg bg-white/95 rounded-3xl shadow-2xl border border-gray-100 px-8 py-12 md:py-16 flex flex-col items-center transition-all animate-fadein"
    >
      <!-- Header -->
      <h2
        class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight text-center"
      >
        Reste informé·e
      </h2>
      <p class="text-gray-500 text-lg mb-6 text-center">
        Inscris ton email pour être prévenu dès la sortie.
        <span class="block text-base text-blue-500 mt-1"
          >Accès en avant-première, sans spam.</span
        >
      </p>

      <!-- Form -->
      <form
        class="flex flex-col gap-5 w-full"
        @submit.prevent="submitForm"
        autocomplete="off"
      >
        <input
          v-model="email"
          type="email"
          required
          placeholder="Ton e-mail"
          class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 text-lg placeholder-gray-400 shadow-sm transition duration-150 ease-in-out transform hover:-translate-y-0.5"
          :disabled="loading"
        />

        <label
          class="flex items-center gap-3 cursor-pointer select-none text-gray-600 text-base"
        >
          <input
            type="checkbox"
            v-model="wantsBeta"
            class="accent-pink-500 h-5 w-5 rounded border-gray-300 transition"
          />
          <span
            >Je veux tester la
            <span class="font-semibold text-pink-500">bêta</span></span
          >
        </label>

        <button
          type="submit"
          :disabled="loading || !email"
          class="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-lg font-semibold py-3 rounded-xl shadow-lg transition duration-150 ease-in-out animate-bounceonce"
        >
          <svg
            v-if="loading"
            class="animate-spin h-5 w-5 text-white"
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
          {{ loading ? "Envoi..." : "Préviens-moi à la sortie" }}
        </button>

        <!-- Feedback animé -->
        <transition name="fadein-scale">
          <div
            v-if="success"
            class="flex items-center justify-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-base font-medium shadow mt-2 animate-bounceonce"
          >
            <svg
              class="w-5 h-5"
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
            Merci, tu es sur la liste !
          </div>
        </transition>
        <transition name="fadein-scale">
          <div
            v-if="error"
            class="flex items-center justify-center gap-2 text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-base font-medium shadow mt-2"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {{ error }}
          </div>
        </transition>
      </form>
    </div>
    <!-- Light floating deco -->
    <div
      class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-2xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none"
    ></div>
  </section>
  <Form @submitted="..." :email="savedEmail" v-model="showModal" />
</template>

<script setup>
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey
);

const email = ref("");
const wantsBeta = ref(false);
const loading = ref(false);
const success = ref(false);
const error = ref("");
const showModal = ref(false);
const savedEmail = ref(""); // Pour garder l'email jusqu'au modal

const submitForm = async () => {
  success.value = false;
  error.value = "";
  if (!email.value) {
    error.value = "L'e-mail est requis";
    return;
  }
  loading.value = true;
  try {
    // 1. Enregistre juste l'email + wantsBeta temporairement, le reste viendra dans le modal
    const { error: supaError } = await supabase
      .from("leads")
      .insert([{ email: email.value, beta: wantsBeta.value }]);
    if (supaError) throw supaError;
    success.value = true;
    savedEmail.value = email.value;
    email.value = "";
    wantsBeta.value = false;
    // 2. Ouvre le modal
    showModal.value = true;
  } catch (e) {
    error.value = "Erreur, réessaie.";
  }
  loading.value = false;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}

/* Animations */
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fadein {
  animation: fadein 0.7s cubic-bezier(0.57, 1.42, 0.43, 0.99) both;
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

@keyframes bounceonce {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.07);
  }
  55% {
    transform: scale(0.97);
  }
  85% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
.animate-bounceonce {
  animation: bounceonce 0.8s;
}
</style>
