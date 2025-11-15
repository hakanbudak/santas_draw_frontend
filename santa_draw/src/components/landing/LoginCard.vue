<template>
  <div
      class="relative w-full max-w-2xl bg-white/95 backdrop-blur-md border border-red-200
           rounded-3xl shadow-[0_20px_60px_rgba(127,29,29,0.4)] px-6 py-10 md:px-12 z-10
           min-h-[550px] flex flex-col justify-center">

    <button
        type="button"
        class="mb-6 inline-flex items-center text-sm text-slate-500 hover:text-red-600 transition-colors"
        @click="$emit('go-register')">
      ← Geri dön
    </button>

    <div class="text-center mb-8">
      <p class="text-xs uppercase tracking-[0.35em] text-red-600">Santa's Edition</p>
      <h1 class="text-4xl md:text-5xl font-bold text-red-700 mt-1">Giriş Yap</h1>
      <p class="text-slate-600 mt-2">
        Santa's Draw hesabına giriş yap ve çekilişlerini yönet 🎄
      </p>
    </div>

    <div class="grid gap-5 max-w-md mx-auto w-full">
      <Input
          id="login-email"
          v-model:input="form.email.value"
          :invalidMessage="form.email.inValidMessage"
          type="text"
          name="email"
          label="Email"
          placeholder="Enter your email address"
          @onFocus="clearError('email')"
      />

      <Input
          id="login-password"
          v-model:input="form.password.value"
          :invalidMessage="form.password.inValidMessage"
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          @onFocus="clearError('password')"
      />

      <button
          type="button"
          class="mt-4 inline-flex justify-center items-center rounded-xl bg-red-600
               text-white text-lg font-semibold py-3 hover:bg-red-700 transition-all"
          @click="submitForm">
        Giriş Yap
      </button>

      <p class="text-center text-sm text-neutral-500 mt-2">
        🎁 Çekiliş macerası başlıyor!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import Input from "@/components/ui-kit/input/Input.vue"

const emit = defineEmits<{
  (e: "submit", payload: { email: string; password: string }): void
  (e: "go-register"): void
}>()

const form = reactive({
  email: {
    value: "",
    inValidMessage: "",
  },
  password: {
    value: "",
    inValidMessage: "",
  },
})

const clearError = (key: "email" | "password") => {
  form[key].inValidMessage = ""
}

const submitForm = () => {
  let valid = true

  if (!form.email.value) {
    form.email.inValidMessage = "Email required"
    valid = false
  }

  if (!form.password.value) {
    form.password.inValidMessage = "Password required"
    valid = false
  }

  if (!valid) return

  emit("submit", {
    email: form.email.value,
    password: form.password.value,
  })
}
</script>
