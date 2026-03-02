<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Icon } from '@iconify/vue';

const dialog = ref(false);
const currentIndex = ref(0);

const galleryImages = Object.keys(import.meta.glob('../../public/images/*', { eager: true })).map(
  (path) => path.split('/').pop(),
);

galleryImages.forEach((img) => {
  const image = new Image();
  image.src = `/images/${img}`;
});

const currentImage = computed(() => galleryImages[currentIndex.value]);
const imageCounter = computed(() => `${currentIndex.value + 1} / ${galleryImages.length}`);

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

function handleKeys(e) {
  if (!dialog.value) return;
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') dialog.value = false;
}

onMounted(() => window.addEventListener('keydown', handleKeys));
onUnmounted(() => window.removeEventListener('keydown', handleKeys));
</script>

<template>
  <div class="q-pa-md">
    <!-- Header -->
    <div class="q-mb-lg reveal">
      <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">KREATIV</p>
      <h1 class="text-h3 text-white section-header text-weight-bold q-my-none">Galerie</h1>
      <p class="text-subtitle1 text-grey-5 q-mt-sm" style="max-width: 500px">
        Eine Auswahl meiner kreativen Arbeiten und Designs.
      </p>
    </div>

    <!-- Image Count -->
    <div class="row items-center q-mb-md reveal">
      <div class="gallery-count-badge">
        <Icon icon="mdi:image-multiple" width="18" class="q-mr-xs" />
        {{ galleryImages.length }} Bilder
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div
        v-for="(image, i) in galleryImages"
        :key="image"
        class="col-6 col-sm-4 col-md-3 reveal"
        :class="`reveal-delay-${(i % 4) + 1}`"
      >
        <div
          class="gallery-card cursor-pointer"
          :style="{ backgroundImage: `url(/images/${image})` }"
          @click="open(image)"
          role="button"
          tabindex="0"
          :aria-label="image"
        >
          <div class="gallery-card-overlay">
            <Icon icon="mdi:magnify-plus" width="28" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox Dialog -->
  <q-dialog
    v-model="dialog"
    maximized
    transition-show="fade"
    transition-hide="fade"
  >
    <div class="lightbox" @click.self="dialog = false">
      <!-- Top Bar -->
      <div class="lightbox-topbar">
        <div class="lightbox-counter">{{ imageCounter }}</div>
        <q-btn
          flat
          round
          dense
          icon="close"
          class="lightbox-close-btn"
          @click="dialog = false"
        />
      </div>

      <!-- Image Area -->
      <div class="lightbox-stage">
        <q-btn
          flat
          round
          icon="chevron_left"
          class="lightbox-nav lightbox-nav-prev"
          @click="prevImage"
        />

        <div class="lightbox-image-wrap">
          <transition name="lightbox-slide" mode="out-in">
            <img
              :key="currentIndex"
              :src="`/images/${currentImage}`"
              class="lightbox-image"
              :alt="currentImage"
            />
          </transition>
        </div>

        <q-btn
          flat
          round
          icon="chevron_right"
          class="lightbox-nav lightbox-nav-next"
          @click="nextImage"
        />
      </div>

      <!-- Bottom Info -->
      <div class="lightbox-bottom">
        <div class="lightbox-filename">{{ currentImage }}</div>
        <div class="lightbox-dots">
          <span
            v-for="(img, i) in galleryImages"
            :key="img"
            class="lightbox-dot"
            :class="{ active: i === currentIndex }"
            @click="currentIndex = i"
          ></span>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<style>
/* ─── Gallery Cards ─── */

.gallery-card {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.gallery-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.gallery-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(14, 14, 16, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 20px;
}

.gallery-card:hover .gallery-card-overlay {
  opacity: 1;
}

.gallery-count-badge {
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 500;
  background: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.6);
}

/* ─── Lightbox ─── */

.lightbox {
  width: 100%;
  height: 100%;
  background: rgba(6, 6, 8, 0.98);
  display: flex;
  flex-direction: column;
  user-select: none;
}

.lightbox-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  flex-shrink: 0;
}

.lightbox-counter {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 2px;
}

.lightbox-close-btn {
  color: rgba(255, 255, 255, 0.5) !important;
  width: 44px !important;
  height: 44px !important;
  transition: all 0.2s ease;
}

.lightbox-close-btn:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.08) !important;
}

/* ─── Lightbox Stage ─── */

.lightbox-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  position: relative;
  min-height: 0;
}

.lightbox-image-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  display: block;
}

.lightbox-nav {
  color: rgba(255, 255, 255, 0.5) !important;
  background: rgba(255, 255, 255, 0.04) !important;
  backdrop-filter: blur(10px);
  width: 52px !important;
  height: 52px !important;
  font-size: 22px;
  border-radius: 14px !important;
  flex-shrink: 0;
  transition: all 0.25s ease;
  z-index: 2;
}

.lightbox-nav:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

.lightbox-nav-prev {
  margin-right: 12px;
}

.lightbox-nav-next {
  margin-left: 12px;
}

/* ─── Lightbox Bottom ─── */

.lightbox-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px 20px 20px;
  flex-shrink: 0;
}

.lightbox-filename {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.lightbox-dots {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
}

.lightbox-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.25s ease;
}

.lightbox-dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.lightbox-dot.active {
  background: #7c4dff;
  width: 18px;
  border-radius: 3px;
}

/* ─── Lightbox Image Transition ─── */

.lightbox-slide-enter-active,
.lightbox-slide-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-slide-enter-from,
.lightbox-slide-leave-to {
  opacity: 0;
}

/* ─── Responsive ─── */

@media (max-width: 600px) {
  .gallery-card {
    border-radius: 14px;
  }

  .gallery-card:hover {
    transform: none;
  }

  .gallery-card-overlay {
    border-radius: 14px;
  }

  .lightbox-stage {
    padding: 0;
    position: relative;
  }

  .lightbox-image-wrap {
    padding: 8px;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px !important;
    height: 36px !important;
    font-size: 18px;
    border-radius: 50% !important;
    background: rgba(0, 0, 0, 0.5) !important;
    margin: 0;
    z-index: 5;
  }

  .lightbox-nav-prev {
    left: 8px;
    margin-right: 0;
  }

  .lightbox-nav-next {
    right: 8px;
    margin-left: 0;
  }

  .lightbox-topbar {
    padding: 8px 12px;
  }

  .lightbox-bottom {
    padding: 6px 12px 12px;
  }

  .lightbox-filename {
    display: none;
  }

  .lightbox-dots {
    max-width: 260px;
    gap: 5px;
  }

  .lightbox-dot {
    width: 5px;
    height: 5px;
  }

  .lightbox-dot.active {
    width: 14px;
  }
}
</style>
