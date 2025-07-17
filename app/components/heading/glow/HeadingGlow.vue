<script setup>
const props = defineProps({
  text: String,
  level: {
    type: Number,
    required: true,
    validator: (v) => [1, 2, 3, 4, 5, 6].includes(v),
  },
});

const Tag = `h${props.level}`;
</script>

<template>
  <span class="dark:drop-shadow-glow-pink-1000">
    <component
      :is="Tag"
      class="font-bold drop-shadow-latte-pink-900"
    >
      {{ props.text }}
    </component>
  </span>
</template>
