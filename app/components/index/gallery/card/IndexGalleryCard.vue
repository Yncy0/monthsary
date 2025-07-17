<script setup lang="ts">
const props = defineProps<{
  imgSrc: string;
  header: string;
  description: string;
}>();


</script>

<template>
  <UCard class="m-1 lg:h-[560px] bg-mocha-base py-5 lg:py-0">
    <template #header>
      <div class="flex flex-col gap-4">
        <NuxtImg
          v-slot="{src, isLoaded, imgAttrs}"
          :src="props.imgSrc"
          class="rounded-lg h-[320px] lg:size-[320px] object-cover"
          :custom="true"
        >
          <img v-if="isLoaded" v-bind="imgAttrs" :src=src>

          <USkeleton v-else class="rounded-lg lg:w-[270] lg:h-[320px]" />
        </NuxtImg>
        <h3 class="text-2xl font-bold">
          {{ props.header }}
        </h3>
      </div>
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>
  </UCard>
</template> 
