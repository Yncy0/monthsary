<script setup lang="ts">
const { userAuth } = useAuthState();

const items = ref([]);

onMounted(async () => {
  const results = await useFetchRoadmap();

  if (!userAuth.value) {
    items.value = getMockRoadmap();
  } else {
    items.value = results;
  }
});
</script>

<template>
  <section id="roadmap" class="flex flex-col items-center justify-center py-10 min-w-full">
    <HeadingGlow :level="2" text="Roadmap" class="text-4xl lg:text-7xl" />
    <p class="text-sm lg:text-lg">Lists of accomplished goals</p>
    <section v-for="(item, index) in items" :key="index"
      class="px-6 pt-10 lg:px-20 lg:pt-20 mb-10 w-full flex flex-col">
      <IndexRoadmapStack v-if="!userAuth" :is-reversed="evenOrOdd(index)" :img-source="item.img" :header="item.header"
        :body="item.body" />
      <IndexRoadmapStack v-if="userAuth" :is-reversed="evenOrOdd(index)" :img-source="item.images.image_url"
        :header="item.header" :body="item.body" />
    </section>
    <UButton label="See More..." trailing-icon="i-lucide-arrow-right" variant="subtle" :block="false"
      @click="navigateTo('/roadmap')" />
  </section>
</template>
