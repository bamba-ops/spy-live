<template>
  <section class="bg-[#f7f7f8] py-20 px-4 flex justify-center">
    <div
      class="bg-white rounded-3xl shadow-lg ring-1 ring-gray-100/70 max-w-xl w-full px-8 md:px-12 py-12 md:py-16 flex flex-col items-center space-y-8"
    >
      <!-- Micro-badge -->
      <span
        class="uppercase text-xs font-semibold tracking-wide text-[#ff5a5f] bg-[#fff6f7] px-3 py-1 rounded-full"
      >
        Problème
      </span>

      <!-- Emoji mood -->
      <div
        class="h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ff5a5f]/10 via-[#00a699]/10 to-teal-100"
      >
        <span class="text-3xl">😕</span>
      </div>

      <!-- Pain headline -->
      <h2
        class="text-2xl md:text-3xl font-bold text-[#484848] text-center leading-snug"
      >
        Ils veulent acheter…<br class="hidden sm:block" />
        mais quittent le live.
      </h2>

      <!-- Data bullets -->
      <ul
        class="space-y-4 text-base md:text-lg text-[#484848] leading-relaxed text-left w-full max-w-sm mx-auto"
      >
        <li class="flex gap-3">
          <svg class="w-5 h-5 flex-shrink-0 text-[#ff5a5f]" fill="currentColor">
            <circle cx="10" cy="10" r="10" />
          </svg>
          <span
            ><strong>70 %</strong> des paniers sont abandonnés dès que
            l’acheteur doit ouvrir ton site.</span
          >
        </li>
        <li class="flex gap-3">
          <svg class="w-5 h-5 flex-shrink-0 text-[#ff5a5f]" fill="currentColor">
            <circle cx="10" cy="10" r="10" />
          </svg>
          <span
            >Un checkout moyen compte <strong>5&nbsp;étapes</strong>; chaque
            clic en trop peut coûter <strong>-35 % de conversion</strong>.</span
          >
        </li>
        <li class="flex gap-3">
          <svg class="w-5 h-5 flex-shrink-0 text-[#ff5a5f]" fill="currentColor">
            <circle cx="10" cy="10" r="10" />
          </svg>
          <span
            >Ces abandons pèsent <strong>18 Mds $</strong> de ventes perdues
            chaque année dans l’e-commerce.</span
          >
        </li>
      </ul>

      <!-- Tiny separator -->
      <span class="block h-0.5 w-14 bg-gray-200 rounded-full"></span>
    </div>
  </section>
</template>
