<template>
  <div class="q-pa-md column projects_text_color">
    <div class="q-mb-md">
      <h1 class="text-h4">Projekte</h1>
      <q-separator color="white" />
    </div>
    <div class="row q-gutter-lg">
      <a
        v-for="project of projects"
        :key="project.id"
        href="https://vudiary.onrender.com"
        style="text-decoration: none"
      >
        <q-card
          class="q-pa-md card"
          style="
            width: 300px;
            height: 300px;
            border-radius: 20px;
            border: 1px solid #474747;
            color: white;
          "
        >
          <div class="column q-mb-md">
            <div
              class="flex items-center justify-center"
              style="background-color: white; width: 60px; height: 60px; border-radius: 12px"
            >
              <q-img :src="project.image" :style="`width: ${project.width}px;`" contain />
            </div>

            <div class="text-h5 text-bold q-mt-sm">{{ project.name }}</div>
          </div>

          <q-card-section class="q-pt-none q-pl-none" v-html="project.description" />
        </q-card>
      </a>
    </div>

    <div class="q-mb-md">
      <h1 class="text-h4">Design Projekte</h1>
      <q-separator color="white" />
    </div>
    <div class="row q-gutter-lg">
      <router-link
        v-for="dproject of design_projects"
        :key="dproject.id"
        :to="`/${dproject.direct}/${dproject.id}`"
        style="text-decoration: none"
      >
        <q-card
          clickable
          class="q-pa-md card"
          style="
            width: 300px;
            height: 300px;
            border-radius: 20px;
            border: 1px solid #474747;
            color: white;
          "
        >
          <div class="column q-mb-md">
            <div
              class="flex items-center justify-center"
              style="background-color: white; width: 60px; height: 60px; border-radius: 12px"
            >
              <q-img :src="dproject.image" :style="`width: ${dproject.width}px;`" contain />
            </div>

            <div class="text-h5 text-bold q-mt-sm">{{ dproject.name }}</div>
          </div>

          <q-card-section class="q-pt-none q-pl-none">
            {{ dproject.description }}
          </q-card-section>
        </q-card></router-link
      >
    </div>

    <div class="q-mb-md">
      <h1 class="text-h4">Archivierte Projekte</h1>
      <q-separator color="white" />
    </div>
    <div class="row q-gutter-lg">
      <q-card
        v-for="aproject of archived_projects"
        :key="aproject.id"
        class="q-pa-md card"
        style="
          width: 300px;
          height: 300px;
          border-radius: 20px;
          border: 1px solid #474747;
          color: white;
        "
      >
        <div class="column q-mb-md">
          <div
            class="flex items-center justify-center"
            style="background-color: white; width: 60px; height: 60px; border-radius: 12px"
          >
            <q-img :src="aproject.image" :style="`width: ${aproject.width}px;`" contain />
          </div>

          <div class="text-h5 text-bold q-mt-sm">{{ aproject.name }}</div>
        </div>

        <q-card-section class="q-pt-none q-pl-none">
          {{ aproject.description }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { design_projects, archived_projects, projects } from '@/data/projects';
</script>

<style>
.card {
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
}
.card:hover {
  background-color: #383838;
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
.dropdown-card {
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  cursor: pointer;
  transition: all 0.25s ease;
}

.dropdown-card:hover {
  background-color: #383838;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
</style>
