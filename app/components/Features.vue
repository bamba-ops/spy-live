<template>
  <section class="py-16 md:py-24 bg-white/80 font-sans">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Feature 1 -->
      <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
        <!-- Image/GIF -->
        <div class="md:w-1/2 w-full rounded-2xl shadow-xl overflow-hidden">
          <img
            src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//PRaliseavecClipchamp-ezgif.com-crop.gif"
            alt="Choix produit en live TikTok"
            class="w-full h-auto object-cover"
          />
        </div>
        <!-- Texte -->
        <div class="md:w-1/2 w-full text-center md:text-left">
          <span
            class="inline-block text-pink-500 font-bold uppercase mb-3 tracking-wide text-sm"
            >Feature 1</span
          >
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Ajout au panier en direct sur TikTok Live
          </h2>
          <p class="text-gray-600 text-lg md:text-xl font-medium">
            Tes clients choisissent leurs produits
            <span class="text-pink-500 font-semibold"
              >directement dans le chat</span
            >
            de ton live TikTok, et leur panier Stripe se crée tout seul.
          </p>
        </div>
      </div>

      <!-- Feature 2 (inversé sur desktop) -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div class="md:w-1/2 w-full rounded-2xl shadow-xl overflow-hidden">
          <img
            src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//ScreenRecording_06-23-2025%2020-43-25_1.gif"
            alt="Lien bio pour payer son panier"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="md:w-1/2 w-full text-center md:text-left">
          <span
            class="inline-block text-pink-500 font-bold uppercase mb-3 tracking-wide text-sm"
            >Feature 2</span
          >
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Lien en bio = paiement en 1 clic
          </h2>
          <p class="text-gray-600 text-lg md:text-xl font-medium">
            Tes clients retrouvent leur
            <span class="text-pink-500 font-semibold">panier personnalisé</span>
            via le lien en bio, entrent leur pseudo, et payent en quelques
            secondes.
          </p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2 w-full rounded-2xl shadow-xl overflow-hidden">
          <img
            src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//stripe.png"
            alt="Tableau de bord Stripe"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="md:w-1/2 w-full text-center md:text-left">
          <span
            class="inline-block text-pink-500 font-bold uppercase mb-3 tracking-wide text-sm"
            >Feature 3</span
          >
          <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Gère ton business, encaisse direct
          </h2>
          <p class="text-gray-600 text-lg md:text-xl font-medium">
            Les paiements tombent directement sur ton
            <span class="text-pink-500 font-semibold">dashboard Stripe</span>.
            Suis tes ventes et fais grandir ton chiffre d'affaires grâce à tes
            lives TikTok.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
