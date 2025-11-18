<script setup>
import { ref } from 'vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      style="background: rgba(43, 43, 43, 0.8); backdrop-filter: blur(10px)"
      class="text-white rounded padding_navbar margin_index"
      height-hint="98"
    >
      <q-toolbar class="justify-center q-gutter-sm q-pa-sm">
        <router-link to="/" class="nav-link"> Home </router-link>
        <router-link to="/projects" class="nav-link"> Projects </router-link>
        <router-link to="/gallery" class="nav-link"> Gallery </router-link>
        <router-link to="/about" class="nav-link"> About </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container class="margin_index">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Lora';
  src: url('/fonts/Lora/Lora-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'LibreBodoni';
  src: url('/fonts/LibreBodoni/LibreBodoni-Regular.ttf') format('truetype');
}

* {
  font-family: 'Montserrat';
}

.margin_index {
  margin-top: 20px;
  margin-left: 14%;
  margin-right: 14%;
}

/* für Tablets */
@media (max-width: 1024px) {
  .margin_index {
    margin-left: 10%;
    margin-right: 10%;
  }
}

/* für Smartphones */
@media (max-width: 600px) {
  .margin_index {
    margin-left: 5%;
    margin-right: 5%;
  }
}

.padding_navbar {
  padding-top: 10px;
  padding-bottom: 10px;
}

body {
  background: rgb(20, 20, 20);
  user-select: none;
}

.rounded {
  border-radius: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  display: inline-block;
}

/* Hover-Effekt */
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Aktiver Link (exakt) */
.router-link-exact-active.nav-link {
  background-color: #5c6bc0; /* indigo-4 */
  color: white;
}
.nav-link {
  font-size: 1.2rem;
}

@media (max-width: 1024px) {
  .nav-link {
    font-size: 1.05rem;
  }
}

@media (max-width: 600px) {
  .nav-link {
    font-size: 0.95rem;
  }
}
</style>
