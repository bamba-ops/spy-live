<template>
  <section
    class="bg-[#f7f7f8] py-14 md:py-20 px-4 flex items-center justify-center"
  >
    <div class="max-w-2xl w-full mx-auto">
      <div
        class="bg-white rounded-3xl shadow-sm px-6 py-10 md:px-12 md:py-14 flex flex-col items-center space-y-8"
      >
        <!-- Badge mini-headline -->
        <div class="mb-2">
          <span
            class="bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase"
            >Problème</span
          >
        </div>
        <!-- Emoji dans cercle doux -->
        <span
          class="inline-flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-teal-100 rounded-full h-16 w-16 shadow-sm"
        >
          <span class="text-4xl">😶‍🌫️</span>
        </span>
        <!-- Titre -->
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-900 text-center leading-tight"
        >
          Le client veut acheter.<br />Mais le parcours est trop long.
        </h2>
        <!-- Texte principal -->
        <div class="space-y-5">
          <p
            class="text-base md:text-lg text-gray-700 text-center leading-relaxed"
          >
            Sur le live, tout est fluide. Mais dès qu’un client veut commander,
            la magie s’arrête.
          </p>
          <p
            class="text-base md:text-lg text-gray-700 text-center leading-relaxed"
          >
            Il doit quitter le live, retrouver ton site, faire défiler les
            pages, sélectionner la bonne couleur, la taille, valider le panier…
            souvent, il abandonne avant la fin.
          </p>
          <p
            class="text-base md:text-lg text-gray-700 text-center leading-relaxed"
          >
            Chaque étape, c’est une occasion de perdre une vente. Et toi, tu ne
            peux qu’attendre… en espérant qu’il revienne.
          </p>
        </div>
        <!-- Ligne grise déco -->
        <div class="flex justify-center pt-4">
          <span class="block h-1 w-16 rounded-full bg-gray-200"></span>
        </div>
      </div>
    </div>
  </section>
</template>
