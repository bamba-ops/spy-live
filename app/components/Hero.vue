<template>
  <section
    class="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-50 via-blue-50 to-teal-50 font-sans overflow-hidden"
  >
    <!-- Fake Live Video/Image -->
    <div
      class="relative w-[350px] h-[620px] md:w-[400px] md:h-[750px] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-end"
    >
      <img
        src="https://cdn.prod.website-files.com/65393b768d06ee4c16d24a33/66d9f300a5f0f810a72ceac5_65a7dc0dab893b750f8cc69e_live-button.png"
        alt="Live Demo"
        class="absolute w-full h-full object-cover"
      />

      <!-- Overlay TikTok UI -->
      <div
        class="absolute inset-0 flex flex-col justify-between z-10 pointer-events-none"
      >
        <!-- HEADER -->
        <div class="flex items-center justify-between px-4 pt-3">
          <!-- Left: user/likes -->
          <div class="flex items-center gap-3">
            <div
              class="rounded-full border-2 border-pink-500 w-9 h-9 overflow-hidden"
            >
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="avatar"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <div
                class="flex items-center gap-1 text-white font-semibold text-xs"
              >
                Demondean...
                <span
                  class="ml-1 bg-white/20 text-xs px-1.5 py-0.5 rounded-full"
                  >Follow</span
                >
              </div>
              <div class="text-[11px] text-white/80">16.1K likes</div>
            </div>
          </div>
          <!-- Right: viewers, close -->
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <div
                class="w-7 h-7 rounded-full bg-gray-800/70 flex items-center justify-center text-xs text-white"
              >
                👥
              </div>
              <span class="ml-1 text-white text-xs">855</span>
            </div>
            <button
              class="ml-2 w-7 h-7 rounded-full bg-white/30 text-white text-xl flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
        <!-- Badges -->
        <div class="absolute left-4 top-14 flex flex-col gap-2">
          <div
            class="flex items-center bg-black/50 px-2 py-1 rounded-full text-xs text-white gap-1"
          >
            <span>🔥 Weekly Ranking</span>
          </div>
          <div
            class="flex items-center bg-black/50 px-2 py-1 rounded-full text-xs text-white gap-1"
          >
            <span>Explore →</span>
          </div>
        </div>
        <!-- Right badges (optional) -->
        <div class="absolute right-4 top-14 flex flex-col gap-2">
          <div
            class="flex items-center bg-white/70 px-2 py-1 rounded-full text-xs text-pink-600 gap-1 font-bold shadow"
          >
            Learn With Me
          </div>
        </div>
        <!-- Chat (bottom left) -->
        <div class="absolute left-2 bottom-28 flex flex-col gap-1 w-[80%]">
          <transition-group name="fade" tag="div">
            <div
              v-for="(msg, i) in messages.slice(-6)"
              :key="i"
              :class="msg.from === 'user' ? 'text-pink-200' : 'text-white'"
              class="text-[15px] font-medium drop-shadow"
              v-html="msg.text"
            />
          </transition-group>
        </div>
        <!-- Input + boutons (bottom) -->
        <div
          class="absolute bottom-0 w-full flex items-center justify-between px-2 pb-2 gap-2 pointer-events-auto"
        >
          <!-- Input -->
          <form
            @submit.prevent="handleSend"
            class="flex-1 flex items-center gap-2"
          >
            <input
              v-model="input"
              type="text"
              maxlength="80"
              placeholder="Add comment…"
              class="flex-1 bg-white/70 rounded-full px-4 py-2 text-[15px] outline-none placeholder-gray-500"
            />
            <button class="text-pink-600 font-bold px-2 text-lg" type="submit">
              →
            </button>
          </form>
          <!-- Floating buttons -->
          <div class="flex items-center gap-2 pl-2">
            <button
              class="flex flex-col items-center text-xs text-pink-500 font-semibold"
            >
              <span
                class="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center mb-1"
                ><svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20l9-5-9-5-9 5 9 5z" />
                  <path d="M12 12V4m0 0l7 7-7 7-7-7 7-7z" /></svg
              ></span>
              Multi-guest
            </button>
            <button
              class="flex flex-col items-center text-xs text-pink-500 font-semibold"
            >
              <span
                class="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center mb-1"
                >🌹</span
              >
              Rose
            </button>
            <button
              class="flex flex-col items-center text-xs text-pink-500 font-semibold"
            >
              <span
                class="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center mb-1"
                >🎁</span
              >
              Gift
            </button>
            <button
              class="flex flex-col items-center text-xs text-pink-500 font-semibold"
            >
              <span
                class="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center mb-1"
                >↗️</span
              >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const input = ref("");
const messages = ref([
  {
    from: "bot",
    text: "<b>modérateur</b> : Bienvenue ! Tape #1, #2, #3 ou #4 pour tester un achat.",
  },
  {
    from: "viewer",
    text: "<span class='font-semibold'>kaithomas85</span> Kai Thomas<br><span class='text-xs'>I’m from Caerphilly</span>",
  },
  {
    from: "viewer",
    text: "<span class='font-semibold'>Bayleé</span><br><span class='text-xs'>I’m from Cwmbran</span>",
  },
  {
    from: "viewer",
    text: "<span class='font-semibold'>Kevin Foster</span><br><span class='text-xs'>Advice for skinny guys that can't bulk up</span>",
  },
]);

const products = [
  { id: 1, name: "Tee-shirt", link: "https://example.com/acheter-tshirt" },
  { id: 2, name: "Casquette", link: "https://example.com/acheter-casquette" },
  { id: 3, name: "Mug", link: "https://example.com/acheter-mug" },
  { id: 4, name: "Tote-bag", link: "https://example.com/acheter-tote-bag" },
];

function handleSend() {
  if (!input.value.trim()) return;
  // Push user message
  messages.value.push({ from: "user", text: `<b>toi</b> : ${input.value}` });

  // Simulate product link if input contains #n
  let found = null;
  for (let p of products) {
    if (input.value.includes(`#${p.id}`) || input.value.includes(`${p.id}`)) {
      found = p;
      break;
    }
  }

  setTimeout(() => {
    if (found) {
      messages.value.push({
        from: "bot",
        text: `<b>modérateur</b> : <span class="text-pink-400">${found.name}</span> sélectionné ! <a href="${found.link}" target="_blank" class="underline text-pink-500 font-semibold">➡️ Payer maintenant</a>`,
      });
    } else {
      messages.value.push({
        from: "bot",
        text: "<b>modérateur</b> : Merci ! Pour tester : écris #1, #2, #3 ou #4.",
      });
    }
  }, 700);

  input.value = "";
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
.font-sans {
  font-family: "Inter", Arial, Helvetica, sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
