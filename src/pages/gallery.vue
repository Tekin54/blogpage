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
          :style="{ backgroundImage: `url(${image.src})` }"
          @click="open(image.src)"
          role="button"
          tabindex="0"
          :aria-label="image.alt"
        ></div>
      </div>
    </div>
  </div>

  <q-dialog v-model="dialog">
    <q-img :src="selectedImage" style="max-width: 90vw; max-height: 90vh" fit="contain">
      <template v-slot:loading>
        <q-spinner-ios color="white" />
      </template>
    </q-img>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

// --- Logik für den Dialog (aus deiner index.vue) ---
const dialog = ref(false);
const selectedImage = ref(''); // speichert das aktuell geklickte Bild

function open(imageUrl) {
  selectedImage.value = imageUrl;
  dialog.value = true;
}

// --- Beispiel-Daten für die Gallerie ---
// Ersetze dies mit deinen echten Bild-URLs
const galleryImages = ref([
  {
    id: 1,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+1',
    alt: 'Platzhalter Bild 1',
  },
  {
    id: 2,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+2',
    alt: 'Platzhalter Bild 2',
  },
  {
    id: 3,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+3',
    alt: 'Platzhalter Bild 3',
  },
  {
    id: 4,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+4',
    alt: 'Platzhalter Bild 4',
  },
  {
    id: 5,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+5',
    alt: 'Platzhalter Bild 5',
  },
  {
    id: 6,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+6',
    alt: 'Platzhalter Bild 6',
  },
  {
    id: 7,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+7',
    alt: 'Platzhalter Bild 7',
  },
  {
    id: 8,
    src: 'https://placehold.co/400x400/2b2b2b/white?text=Bild+8',
    alt: 'Platzhalter Bild 8',
  },
]);
</script>

<style lang="css">
/* Diese Klassen sind fast identisch mit denen, 
  die du bereits in index.vue und projects.vue verwendest.
  Du könntest sie auch in eine globale CSS-Datei auslagern.
*/

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
</style>
