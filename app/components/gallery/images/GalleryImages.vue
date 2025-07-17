<script setup lang="ts">
const { userAuth } = useAuthState();
const imageUrls = ref([]);

onMounted(async () => {
  const results = await useFetchImage();

  if (!userAuth.value) {
    imageUrls.value = getMockImages();
  } else {
    imageUrls.value = results;
  }
});
</script>

<template>
  <Suspense>
    <ul class="flex flex-row flex-wrap w-full object-cover gap-5 lg:gap-2 px-6 lg:px-24">
      <li v-for="(image, index) in imageUrls" :key="index">
        <NuxtImg v-if="!userAuth" v-slot="{ src, isLoaded, imgAttrs }" :src="image" alt="It is an image" :custom="true"
          class="flex-1 w-full lg:w-64 h-96 rounded-md">
          <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

          <USkeleton v-else class="w-full lg:w-64 h-96" />
        </NuxtImg>
        <NuxtImg v-if="userAuth" v-slot="{ src, isLoaded, imgAttrs }" :src="image.image_url" alt="It is an image"
          :custom="true" class="w-full lg:w-64 h-96 rounded-md">
          <img v-if="isLoaded" v-bind="imgAttrs" :src="src">

          <USkeleton v-else class="w-full lg:w-64 h-96" />
        </NuxtImg>
      </li>
    </ul>
  </Suspense>
</template>
