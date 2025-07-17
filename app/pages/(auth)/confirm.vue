<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/");
    } else {
      return navigateTo("/login");
    }
  },
  { immediate: true },
);
</script>

<template>
  <div>Waiting for login</div>
</template>
