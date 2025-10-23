<script setup>
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';
import { design_projects } from '@/data/projects';

const route = useRoute();
const id = Number(route.params.id);
console.log('Aktuelle ID:', id);

const project = computed(() => design_projects.find((p) => p.id === id));
console.log(project.value);
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
  <div class="container" v-if="project">
    <h4 class="text-center text-bold">{{ project.name }}</h4>

    <div v-if="project.vorschau.length">
      <div class="q-mb-md" v-if="project.vorschau.length">
        <h1 class="text-h4">Vorschau</h1>
        <q-separator color="white" />
      </div>
      <div class="row q-gutter-lg">
        <q-card
          v-for="file in project.vorschau"
          :key="file.name"
          class="download-card q-pa-md column items-center justify-center"
          @click="handleFileClick(file)"
        >
          <Icon :icon="file.image" color="#5c6bc0" :width="file.width" />
          <div class="text-h6 text-bold q-mt-md">{{ file.name }}</div>
        </q-card>
      </div>
    </div>

    <div v-if="project.downloads.length">
      <div class="q-mb-md" v-if="project.vorschau.length">
        <h1 class="text-h4">Downloads</h1>
        <q-separator color="white" />
      </div>
      <div class="row q-gutter-lg">
        <q-card
          v-for="file in project.downloads"
          :key="file.name"
          class="download-card q-pa-md column items-center justify-center"
          @click="handleFileClick(file)"
        >
          <Icon :icon="file.image" color="#5c6bc0" :width="file.width" />
          <div class="text-h6 text-bold q-mt-md">{{ file.name }}</div>
        </q-card>
      </div>
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
