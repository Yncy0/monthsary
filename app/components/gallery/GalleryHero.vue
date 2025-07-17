<script setup></script>

<template>
  <section
    class="lg:w-1/2 h-screen flex flex-col gap-2 justify-center text-center lg:text-start lg:px-24"
  >
    <h1
      class="text-5xl lg:text-8xl text-transparent bg-clip-text heading-gradient font-bold"
    >
      Gallery
    </h1>
    <p class="text-sm lg:text-lg px-5 lg:px-0">
      This page cotains images from our 520px camera. But this silly cat has a
      habit to not complete his sorcery on inserting images.
    </p>
  </section>
</template>

<style scoped>
.heading-gradient {
  background-image: linear-gradient(
    to top,
    var(--color-latte-secondary),
    var(--color-latte-lavender)
  );
}
</style>
