<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      <h1 class="text-h4 text-white">Gallerie</h1>
      <q-separator color="white" />
    </div>

    <div class="row q-col-gutter-md q-mb-lg">
      <div v-for="image in galleryImages" :key="image" class="col-6 col-sm-4 col-md-3">
        <div
          class="gallery-card cursor-pointer"
          :style="{ backgroundImage: `url(/images/${image})` }"
          @click="open(image)"
          role="button"
          tabindex="0"
          :aria-label="image"
        ></div>
      </div>
    </div>
  </div>

  <q-dialog v-model="dialog" transition-show="" transition-hide="">
    <div class="dialog-wrapper-fullscreen">
      <!-- Close Button -->
      <q-btn flat round icon="close" class="close-btn" @click="dialog = false" />

      <!-- Previous Button -->
      <q-btn flat round icon="chevron_left" class="nav-btn left" @click="prevImage" />

      <!-- Vollbild-Bild -->
      <img :src="`/images/${galleryImages[currentIndex]}`" class="dialog-image-fullscreen" />

      <!-- Next Button -->
      <q-btn flat round icon="chevron_right" class="nav-btn right" @click="nextImage" />
    </div>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dialog = ref(false);
const currentIndex = ref(0);

// Alle Bilder aus public laden
const galleryImages = Object.keys(import.meta.glob('../../public/images/*', { eager: true })).map(
  (path) => path.split('/').pop(),
);

// Vorab alle Bilder laden
galleryImages.forEach((img) => {
  const image = new Image();
  image.src = `/images/${img}`;
});

function preloadNeighborImages(index) {
  const prev = (index - 1 + galleryImages.length) % galleryImages.length;
  const next = (index + 1) % galleryImages.length;
  [prev, next].forEach((i) => {
    const img = new Image();
    img.src = `/images/${galleryImages[i]}`;
  });
}

function open(image) {
  currentIndex.value = galleryImages.indexOf(image);
  dialog.value = true;
  preloadNeighborImages(currentIndex.value);
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % galleryImages.length;
  preloadNeighborImages(currentIndex.value);
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + galleryImages.length) % galleryImages.length;
  preloadNeighborImages(currentIndex.value);
}

// Tastatursteuerung
function handleKeys(e) {
  if (!dialog.value) return;
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') dialog.value = false;
}

onMounted(() => window.addEventListener('keydown', handleKeys));
onUnmounted(() => window.removeEventListener('keydown', handleKeys));
</script>

<style lang="css">
.gallery-card {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.dialog-wrapper-fullscreen {
  width: 100vw; /* Vollbild-Look */
  height: 100vh;
  background: rgba(10, 10, 10, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.dialog-image-fullscreen {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  display: block;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.6);
  width: 55px !important;
  height: 55px !important;
  font-size: 22px;
  border-radius: 50%;
}

.nav-btn.left {
  left: 20px;
}
.nav-btn.right {
  right: 20px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.55);
}
</style>
