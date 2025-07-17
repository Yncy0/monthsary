<script setup>
import * as THREE from "three"

definePageMeta({
  colorMode: "dark"
})

const items = ref([]);

let scene, camera, light,  renderer

onMounted(async () => {
  items.value = getMockRoadmap();

  init()
  animate()
  document.body.onScroll = moveCamera;
});

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 12)

  light = new THREE.AmbientLight(0xffffff, 1)

  scene.add(camera, light)

  const canvas = document.querySelector("#bg")
  renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true})
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  generateStars(scene)
}

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

function moveCamera() {
  const t = document.getBoundingClientRect().top

  camera.position.y = t * 0.017
}
</script>

<template>
  <main class="mt-32 pb-32">
    <canvas id="bg"/>
    <section class="text-center mb-10">
      <h1 class="text-5xl lg:text-6xl text-latte-primary font-bold">Roadmap</h1>
      <p class="text-sm lg:text-lg">
        A roadmap of our milestones and accomplishments as partner
      </p>
    </section>
    <section class="px-4">
      <RoadmapCard
        v-for="(item, index) in items"
        :key="index"
        :headings="item.header"
        :description="item.body"
        class="mt-5 lg:mt-10"
      />
    </section>
  </main>
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;
  position: fixed;
}
</style>
