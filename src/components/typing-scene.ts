import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

/** Locally modeled geometry: no remote models, textures, or runtime asset requests. */
export function mountTypingScene(host: HTMLElement, ready: () => void) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(6.7, 8.8, 11.8);
  camera.lookAt(0, 0.4, 0);
  scene.add(new THREE.HemisphereLight(0xd9fff2, 0x171c24, 3));
  const light = new THREE.DirectionalLight(0xe9fff6, 6);
  light.position.set(-3, 7, 4);
  scene.add(light);
  const rim = new THREE.DirectionalLight(0x65e6be, 4);
  rim.position.set(3, 3, -4);
  scene.add(rim);
  const white = new THREE.MeshStandardMaterial({
    color: 0xc0c9c6,
    metalness: 0.65,
    roughness: 0.29,
  });
  const joint = new THREE.MeshStandardMaterial({
    color: 0x1a2522,
    metalness: 0.7,
    roughness: 0.4,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x1a2223,
    metalness: 0.65,
    roughness: 0.38,
  });
  const keyMat = new THREE.MeshStandardMaterial({
    color: 0x424d4e,
    metalness: 0.25,
    roughness: 0.5,
  });
  const mint = new THREE.MeshStandardMaterial({
    color: 0x8ef0ca,
    emissive: 0x1b5f48,
    emissiveIntensity: 0.5,
    roughness: 0.4,
  });
  const geometries = new Set<THREE.BufferGeometry>();
  function box(
    w: number,
    h: number,
    d: number,
    mat: THREE.Material,
    parent: THREE.Object3D,
    x = 0,
    y = 0,
    z = 0,
    radius = 0.08,
  ) {
    const geo = new RoundedBoxGeometry(w, h, d, 2, radius);
    geometries.add(geo);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  }
  const world = new THREE.Group();
  scene.add(world);
  box(8.5, 0.32, 3.6, dark, world, 0, 0, 0, 0.16);
  box(8.3, 0.035, 3.4, joint, world, 0, 0.18, 0);
  const keys: THREE.Mesh[] = [];
  for (let row = 0; row < 4; row++)
    for (let col = 0; col < 14; col++) {
      keys.push(
        box(
          0.48,
          0.21,
          0.52,
          (col === 0 && row === 0) || (col === 13 && row === 2) ? mint : keyMat,
          world,
          -3.73 + col * 0.575,
          0.31,
          -1.22 + row * 0.65,
          0.055,
        ),
      );
    }
  box(3.3, 0.21, 0.45, keyMat, world, 0, 0.31, 1.35);
  for (const side of [-1, 1])
    for (let i = 0; i < 3; i++)
      box(
        0.54,
        0.21,
        0.45,
        keyMat,
        world,
        side * (2.13 + i * 0.59),
        0.31,
        1.35,
      );
  // Small inset key legends catch the light without loading a font atlas.
  for (const key of keys)
    box(
      0.13,
      0.008,
      0.025,
      key.material === mint ? dark : white,
      key,
      -0.08,
      0.108,
      -0.1,
      0.003,
    );
  const fingers: { root: THREE.Group; tip: THREE.Group; phase: number }[] = [];
  for (const side of [-1, 1]) {
    const hand = new THREE.Group();
    world.add(hand);
    hand.position.set(side * 1.85, 1.25, 1.6);
    hand.rotation.y = side * -0.14;
    box(1.65, 0.5, 1.55, white, hand, 0, 0, 0, 0.2);
    box(1.05, 0.36, 0.85, joint, hand, 0, -0.02, 1.05, 0.15);
    box(1.2, 0.55, 1.6, white, hand, 0, 0.04, 2.05, 0.16);
    box(0.07, 0.015, 0.85, mint, hand, 0, 0.28, 0.03, 0.015);
    for (let f = 0; f < 4; f++) {
      const root = new THREE.Group();
      hand.add(root);
      root.position.set(-0.61 + f * 0.4, -0.05, -0.67);
      const length = [0.58, 0.78, 0.82, 0.66][f];
      box(0.28, 0.28, length, white, root, 0, 0, -length / 2, 0.1);
      box(0.23, 0.23, 0.18, joint, root, 0, -0.015, -length, 0.07);
      const tip = new THREE.Group();
      tip.position.set(0, 0, -length);
      root.add(tip);
      box(0.27, 0.27, 0.55, white, tip, 0, 0, -0.25, 0.1);
      box(0.2, 0.1, 0.2, joint, tip, 0, -0.14, -0.38, 0.04);
      fingers.push({ root, tip, phase: f * 1.5 + (side + 1) * 2 });
    }
    const thumb = new THREE.Group();
    hand.add(thumb);
    thumb.position.set(side * -0.8, -0.1, 0.25);
    thumb.rotation.y = side * 0.65;
    box(0.35, 0.32, 0.85, white, thumb, 0, 0, -0.3, 0.12);
    box(0.31, 0.3, 0.5, white, thumb, 0, -0.15, -0.85, 0.1);
  }
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0,
    active = true,
    inView = true,
    disposed = false,
    pointer = 0;
  const move = (event: PointerEvent) => {
    pointer = (event.clientX / window.innerWidth - 0.5) * 0.16;
  };
  host.addEventListener("pointermove", move);
  function render(t = 0) {
    if (disposed) return;
    cancelAnimationFrame(frame);
    const time = media.matches ? 0.2 : t / 1000;
    fingers.forEach(({ root, tip, phase }) => {
      const press = Math.max(0, Math.sin(time * 5 + phase));
      root.rotation.x = -0.17 - press * 0.3;
      tip.rotation.x = -0.25 - press * 0.35;
    });
    keys.forEach((key, i) => {
      key.position.y =
        0.31 -
        (i > 14 && i < 40
          ? Math.max(0, Math.sin(time * 5 + i * 1.5)) * 0.045
          : 0);
    });
    if (!media.matches)
      world.rotation.y += (pointer - world.rotation.y) * 0.035;
    renderer.render(scene, camera);
    if (active && !media.matches) frame = requestAnimationFrame(render);
  }
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (width <= 0 || height <= 0) return;
    // CSS owns layout; resizing the drawing buffer must not resize the grid.
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (media.matches || !active) render();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();
  const visible = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    active = inView && !document.hidden;
    cancelAnimationFrame(frame);
    if (active) render();
  });
  visible.observe(host);
  const visibility = () => {
    active = inView && !document.hidden;
    cancelAnimationFrame(frame);
    if (active) render();
  };
  document.addEventListener("visibilitychange", visibility);
  const preference = () => {
    cancelAnimationFrame(frame);
    render();
  };
  media.addEventListener("change", preference);
  const lost = (e: Event) => {
    e.preventDefault();
    host.dataset.unavailable = "true";
    cancelAnimationFrame(frame);
  };
  renderer.domElement.addEventListener("webglcontextlost", lost);
  render();
  host.dataset.ready = "true";
  ready();
  return () => {
    disposed = true;
    delete host.dataset.ready;
    cancelAnimationFrame(frame);
    observer.disconnect();
    visible.disconnect();
    document.removeEventListener("visibilitychange", visibility);
    media.removeEventListener("change", preference);
    host.removeEventListener("pointermove", move);
    renderer.domElement.removeEventListener("webglcontextlost", lost);
    geometries.forEach((g) => g.dispose());
    [white, joint, dark, keyMat, mint].forEach((m) => m.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  };
}
