<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const { scene: model } = await useGLTF("/nyanya/orange-wizard.glb", {draco: true});
const { onBeforeRender } = useLoop();

model.position.set(5, -2.2, 0);

onBeforeRender(() => {
  if (model) {
    model.rotation.y += 0.002;
  }
});
</script>

<template>
  <primitive :object="model" />
</template>
