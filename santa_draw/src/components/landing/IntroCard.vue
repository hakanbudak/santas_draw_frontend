<template>
  <div
      class="relative w-full max-w-2xl bg-white/95 backdrop-blur-md border border-red-200
           rounded-3xl shadow-[0_20px_60px_rgba(127,29,29,0.4)] px-6 py-10 md:px-12 z-10"
  >
    <div class="flex flex-col items-center gap-2 mb-6">
      <p class="text-xs uppercase tracking-[0.35em] text-red-600">
        holiday edition
      </p>
      <h1 class="text-center text-4xl md:text-5xl font-bold text-red-700 tracking-tight drop-shadow-sm">
        Santa's Draw
      </h1>
      <p class="text-center text-slate-600 mt-2 max-w-xl">
        Yılbaşı çekilişini ister
        <span class="font-semibold text-red-700">şimdi başlat</span>,
        ister
        <span class="font-semibold text-green-700">formla katılımcı topla</span>.
      </p>
    </div>

    <div class="grid gap-6 mt-10">
      <div
          class="group border-2 border-red-300 rounded-2xl px-6 py-8 text-center
               bg-gradient-to-br from-red-50 to-white shadow-sm
               hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
      >
        <p class="text-slate-700 mb-6 leading-relaxed font-medium">
          Katılımcıları el ile ekle,<br />
          şimdi hemen çekilişini başlat!
        </p>
        <button
            type="button"
            class="mt-auto inline-flex justify-center items-center rounded-xl bg-red-600
                 text-white text-xl font-semibold py-3 px-6 gap-2
                 group-hover:bg-red-700 hover:shadow-lg transition-all"
            @click="$emit('manual-click')"
        >
          Başla
          <span aria-hidden="true" class="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </div>

      <div
          class="group border-2 border-green-400 rounded-2xl px-6 py-8 text-center
               bg-gradient-to-br from-green-50 to-white shadow-sm
               hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
      >
        <p class="text-slate-700 mb-6 leading-relaxed font-medium">
          Katılımcılar form ile katılsın,<br />
          belirlediğin tarihte ya da tek tıkla çekilsin.
        </p>
        <button
            type="button"
            class="mt-auto inline-flex justify-center items-center rounded-xl border-2 border-green-600
                 text-green-700 text-xl font-semibold py-3 px-6 bg-white
                 group-hover:bg-green-50 hover:shadow-lg transition-all gap-2"
            @click="$emit('register-click')"
        >
          Üye Ol & Başla
          <span aria-hidden="true" class="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </div>
    </div>

    <p class="text-center text-xs text-slate-400 mt-8">
      🎁 Katılımcıların e-posta ile bilgilendirilmesi, çekiliş zamanlaması ve grup yönetimi daha sonra eklenecek.
    </p>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'manual-click'): void
  (e: 'register-click'): void
}>()
</script>
