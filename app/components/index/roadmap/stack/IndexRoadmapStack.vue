<script setup lang="ts">
const props = defineProps<{
  isReversed: boolean;
  imgSource: string;
  header: string;
  body: string;
}>();

const flexDir = ref(props.isReversed ? "row-reverse" : "row");
</script>

<template>
  <div
    class="flex flex-wrap flex-row justify-between gap-5 lg:gap-40"
    :style="{ flexDirection: flexDir }"
  >
    <NuxtImg
      v-slot="{ src, isLoaded, imgAttrs }"
      :src="props.imgSource"
      :custom="true"
      class="flex flex-1 max-w-screen h-[320px] lg:size-[360px] rounded-lg"
    >
      <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />
      <USkeleton v-else class="lg:size-[360px]" />
    </NuxtImg>
    <div class="flex flex-col justify-center flex-1 lg:w-[360px]">
      <HeadingGlow
        :level="3"
        :text="props.header"
        class="text-2xl lg:text-4xl text-start"
      />
      <p class="text-start">{{ props.body }}</p>
    </div>
  </div>
</template>
