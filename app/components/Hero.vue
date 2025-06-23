<template>
  <section
    class="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 px-4 font-sans"
  >
    <div
      class="max-w-3xl mx-auto w-full text-center py-16 flex flex-col items-center z-10"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center mb-8">
        <span
          class="inline-flex items-center justify-center bg-pink-100 rounded-full w-16 h-16 shadow-sm"
        >
          <svg
            class="h-9 w-9 text-pink-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35"
            />
          </svg>
        </span>
      </div>
      <!-- Punchline -->
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight drop-shadow-xl"
      >
        Vends en live avant même d’avoir un site
      </h1>
      <p
        class="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10 font-medium"
      >
        Teste le chat comme si tu étais en live TikTok et propose un produit !
      </p>
      <!-- Fake Live Chat -->
      <div
        class="w-full max-w-lg bg-white/80 rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2"
      >
        <div class="flex items-center gap-2 mb-2">
          <div class="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div class="font-semibold text-pink-500">Live Demo</div>
        </div>
        <div class="flex flex-row gap-2 mb-2 justify-center">
          <span
            class="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-600"
            >#1 Tee-shirt</span
          >
          <span
            class="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-600"
            >#2 Casquette</span
          >
          <span
            class="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-600"
            >#3 Mug</span
          >
          <span
            class="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-600"
            >#4 Tote-bag</span
          >
        </div>
        <div
          class="flex-1 overflow-y-auto h-56 md:h-64 mb-2 bg-white/70 rounded-xl border border-gray-100 p-3 flex flex-col-reverse gap-2 transition-all"
        >
          <!-- Messages (inversés pour effet chat) -->
          <div v-for="(msg, i) in [...messages].reverse()" :key="i">
            <div v-if="msg.from === 'user'" class="text-right mb-1">
              <span
                class="inline-block bg-blue-50 text-gray-700 px-4 py-2 rounded-2xl shadow text-base"
              >
                {{ msg.text }}
              </span>
            </div>
            <div v-else class="text-left mb-1">
              <span
                class="inline-block bg-pink-50 text-pink-700 px-4 py-2 rounded-2xl shadow text-base"
              >
                <span v-html="msg.text" />
              </span>
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSend" class="flex gap-2 mt-1">
          <input
            v-model="input"
            type="text"
            required
            maxlength="80"
            placeholder="Écris un message (ex: Je veux le #2)"
            class="flex-1 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-gray-50 text-base px-4 py-3 shadow-sm transition"
          />
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-3 rounded-xl shadow transition active:scale-95"
          >
            Envoyer
          </button>
        </form>
      </div>
      <!-- Social proof -->
      <div
        class="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm"
      >
        <svg
          class="w-4 h-4 text-pink-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"
          />
        </svg>
        <span>+150 créateurs nous font confiance</span>
      </div>
    </div>
    <!-- Bullles décoratives -->
    <div
      class="absolute -top-10 -left-24 w-72 h-72 bg-pink-100 rounded-full opacity-40 blur-2xl z-0"
    ></div>
    <div
      class="absolute -bottom-20 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-2xl z-0"
    ></div>
  </section>
</template>

<script setup>
const input = ref("");
const messages = ref([
  {
    from: "bot",
    text: "Bienvenue sur le live ! 👋 Demande un produit avec son numéro (#1, #2, #3 ou #4) pour voir comment ça marche.",
  },
]);

// Produits simulés
const products = [
  { id: 1, name: "Tee-shirt", link: "https://example.com/acheter-tshirt" },
  { id: 2, name: "Casquette", link: "https://example.com/acheter-casquette" },
  { id: 3, name: "Mug", link: "https://example.com/acheter-mug" },
  { id: 4, name: "Tote-bag", link: "https://example.com/acheter-tote-bag" },
];

function handleSend() {
  if (!input.value.trim()) return;

  // Ajoute le message utilisateur
  messages.value.push({ from: "user", text: input.value });

  // Check si le message contient un numéro de produit
  let found = null;
  for (let p of products) {
    if (input.value.includes(`#${p.id}`) || input.value.includes(`${p.id}`)) {
      found = p;
      break;
    }
  }

  setTimeout(() => {
    if (found) {
      // Affiche un faux lien de paiement dans le chat (style bouton/lien)
      messages.value.push({
        from: "bot",
        text: `
          <b>${found.name}</b> sélectionné&nbsp;!<br>
          <a href="${found.link}" target="_blank" class="text-pink-600 underline font-semibold">➡️ Payer maintenant</a>
        `,
      });
    } else {
      messages.value.push({
        from: "bot",
        text: "Merci pour ton message ! Pour tester, choisis un produit avec #1, #2, #3 ou #4.",
      });
    }
  }, 800);
  input.value = "";
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
