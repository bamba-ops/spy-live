<template>
  <footer
    class="bg-white/90 border-t border-gray-100 pt-10 pb-6 px-4 font-sans shadow-t-lg"
  >
    <div class="max-w-2xl mx-auto flex flex-col items-center text-center gap-4">
      <!-- Logo -->
      <img
        src="https://bywesphmqjoadfyrxbyu.supabase.co/storage/v1/object/public/test//spylive_logo.png"
        alt="SpyLive Logo"
        class="w-20 h-20 md:w-14 md:h-14 object-contain mb-1 rounded-2xl shadow-md"
      />
      <!-- Slogan -->
      <p class="text-lg md:text-xl font-semibold text-gray-700 mb-2">
        <span class="text-pink-500">SpyLive</span> — Vendre n'a jamais été aussi
        simple en live TikTok.
      </p>
      <!-- Liens -->
      <nav class="w-full">
        <ul
          class="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-base font-medium text-gray-600"
        >
          <li>
            <a href="#features" class="hover:text-pink-500 transition"
              >Fonctionnalités</a
            >
          </li>
          <li>
            <a href="#FAQ" class="hover:text-pink-500 transition">FAQ</a>
          </li>
          <li>
            <a
              href="mailto:admin@spygrocery.com"
              class="hover:text-pink-500 transition"
              >Contact</a
            >
          </li>
        </ul>
      </nav>

      <!-- Réseaux sociaux (TikTok) -->
      <div class="flex items-center justify-center gap-3 mt-2">
        <a
          href="https://tiktok.com/@bambalerequin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-pink-500 transition shadow-sm"
        >
          <!-- TikTok SVG Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                fill="#fff"
                d="M16.142 2h-2.08v12.267a3.053 3.053 0 11-3.054-3.054c.09 0 .178.006.265.013V9.15c-.087-.005-.175-.013-.265-.013A6.093 6.093 0 006 15.23a6.093 6.093 0 006.093 6.093 6.093 6.093 0 006.092-6.092V8.275c.594.308 1.256.483 1.967.483V6.67c-.708 0-1.37-.175-1.967-.483V2z"
              />
              <path
                fill="#FF0050"
                d="M18.084 7.795V14.23a6.093 6.093 0 11-6.092-6.093c.09 0 .178.008.265.013v2.076a3.053 3.053 0 103.053 3.053V2h2.08v4.187c.597.308 1.259.483 1.967.483v2.07c-.711 0-1.373-.175-1.968-.483z"
              />
              <path
                fill="#00F2EA"
                d="M20.05 6.67v2.07a6.11 6.11 0 01-1.967-.483v5.473a6.093 6.093 0 11-6.093-6.092c.09 0 .178.008.265.013v2.076a3.053 3.053 0 103.053 3.053V2h2.08v4.187c.597.308 1.259.483 1.967.483z"
              />
            </g>
          </svg>
        </a>
      </div>
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
.shadow-t-lg {
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.09);
}
</style>
