import * as THREE from "three";

export function generateStars(scene: THREE.Scene) {
  const stars: THREE.Mesh[] = [];

  const geometry = new THREE.SphereGeometry(0.1, 32, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  for (let i = 0; i < 200; i++) {
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(200));
    star.position.set(x, y, z);

    scene.add(star);
    stars.push(star)
  }

  return stars;
}
