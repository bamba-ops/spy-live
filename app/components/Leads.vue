<template>
  <section
    class="py-14 px-4 bg-white/80 rounded-3xl shadow-xl border border-gray-100 max-w-lg mx-auto font-sans"
  >
    <form
      class="flex flex-col gap-5"
      @submit.prevent="submitForm"
      autocomplete="off"
    >
      <h2
        class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center"
      >
        Rejoins la waitlist
      </h2>
      <p class="text-gray-500 text-base mb-2 text-center">
        Inscris ton email pour être prévenu dès le lancement.
      </p>
      <input
        v-model="email"
        type="email"
        required
        placeholder="Ton e-mail"
        class="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 text-lg placeholder-gray-400 shadow-sm transition"
        :disabled="loading"
      />
      <label
        class="flex items-center gap-2 cursor-pointer select-none text-gray-600"
      >
        <input
          type="checkbox"
          v-model="wantsBeta"
          class="accent-pink-500 h-5 w-5 rounded border-gray-300"
        />
        Je veux tester la <span class="font-semibold text-pink-500">bêta</span>
      </label>
      <button
        type="submit"
        :disabled="loading || !email"
        class="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-lg font-semibold py-3 rounded-xl shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed"
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
      <div
        v-if="success"
        class="text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-base font-medium shadow-sm text-center mt-2"
      >
        🎉 Merci, tu es sur la liste !
      </div>
      <div
        v-if="error"
        class="text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-base font-medium shadow-sm text-center mt-2"
      >
        {{ error }}
      </div>
    </form>
  </section>
</template>

<script setup>
const email = ref("");
const wantsBeta = ref(false);
const loading = ref(false);
const success = ref(false);
const error = ref("");

const submitForm = async () => {
  success.value = false;
  error.value = "";
  if (!email.value) {
    error.value = "L'e-mail est requis";
    return;
  }
  loading.value = true;
  try {
    // 🔴 Ici, plug ton appel API ou service mail (Airtable, Supabase, MailerLite, etc)
    // await sendToBackend(email.value, wantsBeta.value)
    await new Promise((r) => setTimeout(r, 900)); // fake
    success.value = true;
    email.value = "";
    wantsBeta.value = false;
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
</style>
