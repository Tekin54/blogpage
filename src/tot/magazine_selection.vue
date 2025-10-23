<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// Liste der Dateien
const downloads = [
  {
    name: 'Adobe Indesign - Magazin Datei',
    image: 'logos:adobe-indesign',
    width: 60,
    file: '/Oeztuerk_Magazin.indd',
  },
  {
    name: 'Adobe Indesign - Poster Datei',
    image: 'logos:adobe-indesign',
    width: 60,
    file: '/Oeztuerk_Poster.indd',
  },
];
const vorschau = [
  {
    name: 'Magazin Print PDF',
    image: 'mdi:printer',
    width: 60,
    file: '/Oeztuerk_Magazin_Druckbögen.pdf',
  },
  {
    name: 'Poster Print PDF',
    image: 'mdi:printer',
    width: 60,
    file: '/Oeztuerk_Poster_Druckbögen.pdf',
  },
];

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
</script>

<template>
  <div class="container">
    <h4 class="text-center text-bold">Grand RP Magazin</h4>
    <div class="q-mb-md">
      <h1 class="text-h4">Vorschau</h1>
      <q-separator color="white" />
    </div>
    <div class="row q-gutter-lg">
      <q-card
        v-for="file in vorschau"
        :key="file.name"
        class="download-card q-pa-md column items-center justify-center"
        @click="handleFileClick(file)"
      >
        <Icon :icon="file.image" color="#5c6bc0" :width="file.width" />
        <div class="text-h6 text-bold q-mt-md">{{ file.name }}</div>
      </q-card>
    </div>
    <div class="q-mb-md">
      <h1 class="text-h4">Downloads</h1>
      <q-separator color="white" />
    </div>

    <!-- Download Cards -->
    <div class="row q-gutter-lg">
      <q-card
        v-for="file in downloads"
        :key="file.name"
        class="download-card q-pa-md column items-center justify-center"
        @click="handleFileClick(file)"
      >
        <Icon :icon="file.image" color="#5c6bc0" :width="file.width" />
        <div class="text-h6 text-bold q-mt-md">{{ file.name }}</div>
      </q-card>
    </div>

    <!-- PDF Vorschau Dialog -->
    <q-dialog v-model="showPreview" maximized>
      <q-card class="bg-dark text-white">
        <q-bar>
          <div>{{ currentFile?.name }}</div>
          <q-space />
          <q-btn flat icon="close" v-close-popup />
        </q-bar>

        <iframe
          v-if="currentFile"
          :src="currentFile.file"
          style="width: 100%; height: 90vh; border: none"
        ></iframe>
      </q-card>
    </q-dialog>
  </div>
</template>

<style>
.container {
  color: white;
}

.download-card {
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
}

.download-card:hover {
  background-color: #383838;
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
</style>
