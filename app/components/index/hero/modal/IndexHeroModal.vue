<script setup lang="ts">
const user = useSupabaseUser();
</script>

<template>
  <UModal title="Let me ask you some questions">
    <UButton
      v-if="user"
      label="Let's Get Started"
      variant="subtle"
      size="sm"
      trailing-icon="i-lucide-arrow-right"
      class="px-4 py-2 shadow-2xl"
      :block="false"
    />

    <template #body>
      <form v-if="user" class="flex flex-col gap-3">
        <UFormField label="How's your day?">
          <UInput placeholder="Answer Please" class="w-full" />
        </UFormField>
        <UFormField label="Where do you want to go out?">
          <UInput
            placeholder="SM MOA, Boracay, Baguio, etc..."
            class="w-full"
          />
        </UFormField>
        <UFormField label="Where do you want to eat?">
          <UInput
            placeholder="Vikings, Jollibee, McDonalds, etc..."
            class="w-full"
          />
        </UFormField>
        <UFormField label="What time do we meet?">
          <UInput placeholder="00:00" class="w-full" />
        </UFormField>

        <UButton label="Submit" class="w-1/3 mt-3" />
      </form>

      <form v-else>
        <UFormField>
          <UInput placeholder="johndoe@email.anon" />
        </UFormField>

        <UButton label="Login" />
      </form>
    </template>
  </UModal>
</template>
