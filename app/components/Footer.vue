<template>
  <footer
    class="bg-white/90 border-t border-gray-100 pt-10 pb-6 px-4 font-sans"
  >
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
      <!-- Logo -->
      <img
        src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//spylive_logo.png"
        alt="SpyLive Logo"
        class="w-12 h-12 md:w-14 md:h-14 object-contain mb-1"
      />
      <!-- Slogan -->
      <p class="text-lg md:text-xl font-semibold text-gray-700 mb-2">
        <span class="text-pink-500">SpyLive</span> — Vendre n'a jamais été aussi
        simple en live TikTok.
      </p>
      <!-- Links -->
      <nav class="w-full">
        <ul
          class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base font-medium text-gray-600"
        >
          <li>
            <a href="#features" class="hover:text-pink-500 transition"
              >Fonctionnalités</a
            >
          </li>
          <li><a href="#faq" class="hover:text-pink-500 transition">FAQ</a></li>
          <li>
            <a
              href="mailto:admin@spygrocery.com"
              class="hover:text-pink-500 transition"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
      <!-- Bas de page -->
      <div class="text-xs text-gray-400 mt-4">
        &copy; {{ new Date().getFullYear() }} SpyLive. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script setup>
// rien de spécial, tout est statique !
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
</style>
