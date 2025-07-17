<script setup lang="ts">
definePageMeta({
  layout: "login",
  colorMode: "dark",
});

const supabase = useSupabaseClient();
const email = ref("");
const local = "http://localhost:3000/confirm";

const toast = useToast();

async function signInWithOtp() {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: local,
    },
  });
  if (error) {
    toast.add({
      title: "Inavild Account!",
      description:
        "Your account is not registered, only whitelisted accounts are capable of loggin in.",
      color: "error",
    });
  } else {
    toast.add({
      title: "Email Verification",
      description: "Check your email if you receive comfirmation.",
      color: "success",
    });
  }
}
</script>

<template>
  <NyaNyaOrangeWhite/>
  <div class="border-gradient rounded-lg w-full lg:w-[720px]">
    <form
      class="flex flex-col justify-center items-center gap-10 lg:gap-5 px-12 py-20 lg:p-20 z-50 bg-mocha-base rounded-md text-center"
      @submit.prevent="signInWithOtp"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold">Hello There!</h1>
        <p>Welcome back my pookie!</p>
      </div>
      <UFormField label="Email Account" class="w-full">
        <UInput
          v-model="email"
          type="email"
          placeholder="Please enter your email account"
          class="w-full"
          :ui="{ base: 'bg-mocha-mantle p-3' }"
        />
      </UFormField>
      <div class="flex flex-col gap-5 w-full">
        <UButton
          type="submit"
          variant="subtle"
          label="Login"
          class="w-full lg:p-4 flex flex-col items-center"
        />
        <UButton
          label="Back"
          variant="ghost"
          to="/"
          class="w-full lg:p-4 flex flex-col items-center"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.border-gradient {
  position: relative;
  padding: 3px;
  background: linear-gradient(
    to right,
    var(--color-latte-primary),
    var(--color-latte-secondary)
  );
}
</style>
