<script setup>
definePageMeta({
  colorMode: "dark"
})
</script>

<template>
  <main class="flex flex-col gap-64">
    <TresCanvas alpha window-size>
      <TresPerspectiveCamera :position="[0, 0, 12]" />
      <TresAmbientLight :intensity="2" />
      <TresPointLight :intensity="50" :position="[0, 5, 0]" />
      <ScrollControls :html-scroll="true" :smooth-scroll="0.1" />
      <GeneratedStars />
      <Suspense>
        <NyaNyaWizard />
      </Suspense>
    </TresCanvas>
    <GalleryHero class="z-10" />
    <section class="flex flex-col gap-2 z-20">
      <LazyGalleryImages />
    </section>
  </main>
</template>
