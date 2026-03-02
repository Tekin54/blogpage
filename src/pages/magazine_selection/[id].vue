<script setup>
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import { design_projects } from '@/data/projects';

const route = useRoute();
const id = Number(route.params.id);
const project = computed(() => design_projects.find((p) => p.id === id));

const showPreview = ref(false);
const currentFile = ref(null);

function handleFileClick(file) {
  if (file.file.endsWith('.pdf')) {
    currentFile.value = file;
    showPreview.value = true;
  } else {
    const link = document.createElement('a');
    link.href = file.file;
    link.download = '';
    link.click();
  }
}

function downloadFile(file) {
  const link = document.createElement('a');
  link.href = file.file;
  link.download = '';
  link.click();
}
</script>

<template>
  <div class="text-white q-pa-md" v-if="project">
    <!-- Back Link + Header -->
    <div class="q-mb-lg reveal">
      <router-link to="/projects" class="back-link">
        <Icon icon="mdi:arrow-left" width="20" />
        <span>Zurück zu Projekte</span>
      </router-link>

      <div class="row items-center q-mt-lg q-gutter-md">
        <div class="flex items-center justify-center icon-cover">
          <q-img :src="`/${project.image}`" :style="`width: ${project.width}px;`" contain />
        </div>
        <div>
          <h1 class="text-h3 text-weight-bold q-my-none">{{ project.name }}</h1>
          <p class="text-body1 text-grey-5 q-mt-xs q-mb-none">{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- Vorschau Section -->
    <div v-if="project.vorschau.length" class="q-mb-lg reveal">
      <div class="q-mb-md">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">ANSICHT</p>
        <h2 class="text-h4 section-header q-my-none">Vorschau</h2>
      </div>
      <div class="card-row">
        <div
          v-for="file in project.vorschau"
          :key="file.name"
          class="reveal"
        >
          <div
            class="detail-file-card column items-center justify-center q-pa-lg"
            @click="handleFileClick(file)"
          >
            <div class="file-icon-wrap">
              <Icon :icon="file.image" width="36" color="#7c4dff" />
            </div>
            <div class="text-subtitle1 text-weight-bold q-mt-md text-center">{{ file.name }}</div>
            <div class="file-action q-mt-md">
              <Icon icon="mdi:eye" width="16" />
              <span class="text-caption">Vorschau öffnen</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Downloads Section -->
    <div v-if="project.downloads.length" class="q-mb-lg reveal">
      <div class="q-mb-md">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">DATEIEN</p>
        <h2 class="text-h4 section-header q-my-none">Downloads</h2>
      </div>
      <div class="card-row">
        <div
          v-for="file in project.downloads"
          :key="file.name"
          class="reveal"
        >
          <div
            class="detail-file-card column items-center justify-center q-pa-lg"
            @click="downloadFile(file)"
          >
            <div class="file-icon-wrap">
              <Icon :icon="file.image" width="36" />
            </div>
            <div class="text-subtitle1 text-weight-bold q-mt-md text-center">{{ file.name }}</div>
            <div class="file-action q-mt-md">
              <Icon icon="mdi:download" width="16" />
              <span class="text-caption">Herunterladen</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PDF Vorschau Dialog -->
    <q-dialog v-model="showPreview" maximized transition-show="fade" transition-hide="fade">
      <div class="pdf-dialog-overlay">
        <!-- Top Bar -->
        <div class="pdf-topbar">
          <div class="row items-center q-gutter-sm">
            <Icon icon="mdi:file-pdf-box" width="22" color="#7c4dff" />
            <span class="text-subtitle1 text-weight-medium">{{ currentFile?.name }}</span>
          </div>
          <div class="row q-gutter-sm">
            <q-btn
              flat
              round
              dense
              icon="download"
              class="pdf-topbar-btn"
              @click="downloadFile(currentFile)"
            />
            <q-btn
              flat
              round
              dense
              icon="close"
              class="pdf-topbar-btn"
              v-close-popup
            />
          </div>
        </div>

        <!-- PDF Content -->
        <div class="pdf-content">
          <iframe
            v-if="currentFile"
            :src="currentFile.file"
            class="pdf-iframe"
          ></iframe>
        </div>
      </div>
    </q-dialog>
  </div>

  <!-- Not Found -->
  <div v-else class="text-white text-center q-pa-xl">
    <Icon icon="mdi:alert-circle" width="60" class="text-grey-6 q-mb-md" />
    <h2 class="text-h5 text-weight-bold">Projekt nicht gefunden</h2>
    <p class="text-grey-5">Das gesuchte Projekt existiert nicht.</p>
    <router-link to="/projects" class="back-link q-mt-md" style="display: inline-flex">
      <Icon icon="mdi:arrow-left" width="20" />
      <span>Zurück zu Projekte</span>
    </router-link>
  </div>
</template>

<style>
.back-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: fit-content;
}

.back-link:hover {
  color: #7c4dff;
  transform: translateX(-4px);
}

/* ─── File Cards ─── */

.detail-file-card {
  width: 100%;
  min-height: 200px;
  height: 100%;
  border-radius: 20px;
  background: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.detail-file-card:hover {
  background: rgba(40, 40, 50, 0.8);
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(92, 107, 192, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3);
}

.detail-file-card:hover .file-action {
  color: #7c4dff;
}

.file-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: rgba(124, 77, 255, 0.08);
  border: 1px solid rgba(124, 77, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.detail-file-card:hover .file-icon-wrap {
  background: rgba(124, 77, 255, 0.15);
  transform: scale(1.05);
}

.file-action {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

/* ─── PDF Dialog ─── */

.pdf-dialog-overlay {
  width: 100%;
  height: 100%;
  background: rgb(14, 14, 16);
  display: flex;
  flex-direction: column;
}

.pdf-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: rgba(30, 30, 36, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: white;
  flex-shrink: 0;
}

.pdf-topbar-btn {
  color: rgba(255, 255, 255, 0.6) !important;
  transition: all 0.2s ease;
}

.pdf-topbar-btn:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.08) !important;
}

.pdf-content {
  flex: 1;
  padding: 16px;
  overflow: hidden;
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  background: white;
}

@media (max-width: 600px) {
  .pdf-content {
    padding: 8px;
  }

  .pdf-topbar {
    padding: 10px 12px;
  }

  .pdf-topbar .text-subtitle1 {
    font-size: 0.85rem;
  }
}
</style>
