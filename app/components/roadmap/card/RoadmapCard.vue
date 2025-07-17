<script setup lang="ts">
const props = defineProps<{
  headings: string;
  description: string;
  imgUrl?: string;
}>();
</script>

<template>
  <UCard
    variant="solid"
    class="max-w-screen w-full lg:w-[1000px] bg-mocha-base flex flex-col items-center text-center"
  >
    <NuxtImg
      v-if="props.imgUrl"
      v-slot="{ src, isLoaded, imgAttrs }"
      alt="image"
      :src="imgUrl"
      width="400"
      height="400"
      :custom="true"
    >
      <img v-if="isLoaded" v-bind="imgAttrs" :src="src" >

      <USkeleton v-else class="w-[400px] h-[400px]" alt="skeleton loader"/>
    </NuxtImg>
    <h2 class="text-3xl font-bold">{{ props.headings }}</h2>
    <p class="text-sm lg:text-lg">{{ props.description }}</p>
  </UCard>
</template>
