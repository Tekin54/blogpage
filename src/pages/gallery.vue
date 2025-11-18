<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      <h1 class="text-h4 text-white">Gallerie</h1>
      <q-separator color="white" />
    </div>

    <div class="row q-col-gutter-md q-mb-lg">
      <div v-for="image in galleryImages" :key="image.id" class="col-6 col-sm-4 col-md-3">
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

  <q-dialog v-model="dialog" maximized>
    <div class="dialog-wrapper">
      <!-- Close Button -->
      <q-btn flat round icon="close" class="close-btn" @click="dialog = false" />

      <!-- Previous Button -->
      <q-btn flat round icon="chevron_left" class="nav-btn left" @click="prevImage" />

      <!-- Image -->
      <q-img :src="`/images/${galleryImages[currentIndex]}`" fit="contain" class="dialog-image">
        <template #loading>
          <q-spinner-ios color="white" size="40px" />
        </template>
      </q-img>

      <!-- Next Button -->
      <q-btn flat round icon="chevron_right" class="nav-btn right" @click="nextImage" />
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
const dialog = ref(false);
const currentIndex = ref(0);

function open(image) {
  currentIndex.value = galleryImages.indexOf(image);
  dialog.value = true;
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % galleryImages.length;
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + galleryImages.length) % galleryImages.length;
}

// Tastatursteuerung
onMounted(() => {
  window.addEventListener('keydown', handleKeys);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeys);
});

function handleKeys(e) {
  if (!dialog.value) return;

  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') dialog.value = false;
}

// --- Beispiel-Daten für die Gallerie ---
// Ersetze dies mit deinen echten Bild-URLs
// const galleryImages = ref([
//   {
//     id: 1,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+1',
//     alt: 'Platzhalter Bild 1',
//   },
//   {
//     id: 2,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+2',
//     alt: 'Platzhalter Bild 2',
//   },
//   {
//     id: 3,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+3',
//     alt: 'Platzhalter Bild 3',
//   },
//   {
//     id: 4,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+4',
//     alt: 'Platzhalter Bild 4',
//   },
//   {
//     id: 5,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+5',
//     alt: 'Platzhalter Bild 5',
//   },
//   {
//     id: 6,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+6',
//     alt: 'Platzhalter Bild 6',
//   },
//   {
//     id: 7,
//     src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+7',
//     alt: 'Platzhalter Bild 7',
//   },
//   {
//     id: 8,
//     src: 'images/OEZT-Autos-0.jpg',
//     alt: 'Platzhalter Bild 8',
//   },
// ]);// Node.js Script (einfach):
const galleryImages = Object.keys(import.meta.glob('../../public/images/*', { eager: true })).map(
  (path) => path.split('/').pop(),
);

console.log(galleryImages); // ['text.txt', 'image.png', ...]
</script>

<style lang="css">
.gallery-card {
  width: 100%;
  aspect-ratio: 1 / 1; /* Hält die Karten quadratisch */
  border-radius: 20px; /* Passt zu deinem .card-Stil */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Dein "card"-Stil aus projects.vue */
  background-color: #2b2b2b; /* Fallback, falls Bild lädt */
  border: 1px solid #474747;
  transition: all 0.25s ease;
}

.gallery-card:hover {
  /* Dein "card:hover"-Stil */
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
.dialog-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.dialog-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
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
