<script setup lang="ts">
const { setUserAuth } = useAuthState()

await callOnce(async () => {
  await setUserAuth()
})
</script>

<template>
  <ColorScheme>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </ColorScheme>
</template>
