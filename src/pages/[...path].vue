<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <div class="not-found-code">404</div>
      <h2 class="text-h5 text-weight-bold q-mb-sm">Seite nicht gefunden</h2>
      <p class="text-body1 text-grey-5 q-mb-lg" style="max-width: 400px">
        Die angeforderte Seite existiert leider nicht. Möglicherweise wurde sie verschoben oder gelöscht.
      </p>
      <router-link to="/" class="back-home-btn text-white">
        <Icon icon="mdi:arrow-left" width="20" class="q-mr-sm" />
        Zurück zur Startseite
      </router-link>
    </div>
  </div>
</template>

<style>
.not-found-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.not-found-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found-code {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.back-home-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  box-shadow: 0 4px 20px rgba(92, 107, 192, 0.3);
  transition: all 0.3s ease;
}

.back-home-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(92, 107, 192, 0.45);
}
</style>
