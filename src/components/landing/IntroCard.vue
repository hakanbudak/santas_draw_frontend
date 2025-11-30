<template>
  <div
      class="relative w-full max-w-2xl bg-white/95 backdrop-blur-md border border-red-200
           rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(127,29,29,0.4)] px-4 py-6 md:px-6 lg:px-12 md:py-10 z-10"
  >
    <div class="flex flex-col items-center gap-1.5 md:gap-2 mb-4 md:mb-6">
      <p class="text-xs md:text-sm uppercase tracking-[0.25em] md:tracking-[0.35em] text-red-600">
        {{ t("landing.tagline") }}
      </p>
      <h1 class="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-red-700 tracking-tight drop-shadow-sm">
        {{ t("landing.title") }}
      </h1>
      <p class="text-center text-sm md:text-base text-slate-600 mt-1.5 md:mt-2 max-w-xl px-2">
        {{ t("landing.subtitlePrefix") }}
        <span class="font-semibold text-green-700">{{ t("landing.subtitleInviteHighlight") }}</span>,
        {{ t("landing.subtitleMiddle") }}
        <span class="font-semibold text-red-700">{{ t("landing.subtitleManualHighlight") }}</span>.
      </p>
    </div>

    <div class="grid gap-4 md:gap-6 mt-6 md:mt-10">
      <div
          class="relative group overflow-hidden rounded-xl md:rounded-3xl px-6 py-6 md:px-8 md:py-8 text-left
               bg-gradient-to-br from-red-600 via-red-500 to-amber-500 shadow-xl
               hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 border-2 border-yellow-400
               animate-card-glow"
      >
        <div class="absolute top-0 right-0">
           <div class="bg-green-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-bl-2xl shadow-md">
            {{ t("landing.inviteCardBadgeFree") }}
          </div>
        </div>

        <div class="absolute inset-0 opacity-20 pointer-events-none">
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
          <div class="star star-6"></div>
        </div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div class="flex-1">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
              {{ t("landing.inviteCardTitle") }}
            </h2>
            <p class="text-sm md:text-base text-white/95 leading-relaxed font-medium drop-shadow-sm mb-4 md:mb-0">
              {{ t("landing.inviteCardDescriptionLine1") }}<br />
              <i18n-t keypath="landing.inviteCardDescriptionLine2" tag="span">
                <template #automatic>
                  <span class="text-yellow-300 font-bold">{{ t("landing.highlightAutomatic") }}</span>
                </template>
                <template #oneClick>
                  <span class="text-yellow-300 font-bold">{{ t("landing.highlightOneClick") }}</span>
                </template>
              </i18n-t>
            </p>
          </div>

          <button
              type="button"
              class="inline-flex justify-center items-center rounded-xl
                   bg-amber-500 text-white
                   text-lg md:text-xl font-bold py-3 px-6 gap-2
                   shadow-lg hover:bg-amber-600 hover:shadow-xl hover:scale-105
                   transition-all w-full md:w-auto cursor-pointer whitespace-nowrap"
              @click="$emit('register-click')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ t("landing.inviteCardButton") }}
          </button>
        </div>

        <div class="mt-4 pt-4 border-t border-white/20 text-yellow-200 text-xs md:text-sm font-bold flex items-center gap-2">
          {{ t("landing.inviteCardFooter") }}
        </div>
      </div>

      <div
          class="relative group overflow-hidden border border-red-200 rounded-xl md:rounded-3xl px-6 py-6 md:px-8 md:py-8 text-left
               bg-gradient-to-br from-white via-red-50 to-red-100 shadow-lg
               hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      >
        <div class="absolute top-0 right-0">
          <div class="bg-green-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-bl-2xl shadow-md">
            {{ t("landing.manualCardBadge") }}
          </div>
        </div>

        <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div class="flex-1">
            <h2 class="text-2xl md:text-3xl font-bold text-red-700 mb-2">
              {{ t("landing.manualCardTitle") }}
            </h2>
            <p class="text-sm md:text-base text-slate-600 leading-relaxed font-medium mb-4 md:mb-0">
              {{ t("landing.manualCardDescriptionLine1") }}<br />
              {{ t("landing.manualCardDescriptionLine2") }}
            </p>
          </div>

          <button
              type="button"
              class="inline-flex justify-center items-center rounded-xl bg-red-600
                   text-white text-lg md:text-xl font-semibold py-3 px-6 gap-2
                   hover:bg-red-700 hover:shadow-lg transition-all w-full md:w-auto cursor-pointer whitespace-nowrap"
              @click="$emit('manual-click')"
          >
            {{ t("landing.manualCardButton") }}
            <span aria-hidden="true" class="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>

    <p class="text-center text-xs md:text-sm text-slate-400 mt-6 md:mt-8">
      {{ t("landing.footnote") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineEmits<{
  (e: 'manual-click'): void
  (e: 'register-click'): void
}>()

const { t } = useI18n();
</script>

<style scoped>
.star {
  position: absolute;
  background-color: #FBBF24;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.star-1 { width: 20px; height: 20px; top: 10%; left: 5%; animation: twinkle 3s infinite; }
.star-2 { width: 15px; height: 15px; top: 25%; right: 10%; animation: twinkle 4s infinite 0.5s; }
.star-3 { width: 25px; height: 25px; bottom: 15%; left: 15%; animation: twinkle 5s infinite 1s; }
.star-4 { width: 12px; height: 12px; bottom: 30%; right: 20%; animation: twinkle 3.5s infinite 1.5s; }
.star-5 { width: 18px; height: 18px; top: 40%; left: 25%; animation: twinkle 4.5s infinite 0.7s; }
.star-6 { width: 22px; height: 22px; top: 60%; right: 30%; animation: twinkle 3.2s infinite 1.2s; }

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.animate-card-glow {
  animation: card-glow 3s infinite;
}

@keyframes card-glow {
  0%, 100% {
    box-shadow: 0 0 15px rgba(251, 191, 36, 0.2);
    border-color: rgba(250, 204, 21, 0.7);
  }
  50% {
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.35);
    border-color: rgba(250, 204, 21, 0.85);
  }
}
</style>
