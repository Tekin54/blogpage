<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="q-pa-md text-white">
    <!-- Titel -->
    <div class="row justify-center q-mt-md">
      <span class="text-h4 text-bold">Kontakt</span>
    </div>

    <p class="text-center text-subtitle1 q-mb-lg">
      Sie möchten mir eine Nachricht schreiben? Ich freue mich auf Ihre Kontaktaufnahme.
    </p>

    <!-- Kontaktkarten -->
    <div class="row justify-center q-gutter-md">
      <!-- E-Mail Karte 1 -->
      <a
        href="mailto:gultekinozturk72@gmail.com"
        class="text-primary"
        style="word-break: break-word; text-decoration: none"
        ><div class="column items-center q-pa-md contact-card" style="">
          <!-- Icon-Box -->
          <div
            class="bg-grey-3 flex flex-center"
            style="border-radius: 12px; width: 64px; height: 64px"
          >
            <Icon icon="logos:google-gmail" width="32" />
          </div>

          <!-- E-Mail -->
          <div class="text-center q-mt-md">
            <div class="text-subtitle1 text-weight-bold">E-Mail</div>

            gultekinozturk72@gmail.com
          </div>

          <p class="text-caption text-grey-7 q-mt-sm text-center">
            Klicken Sie auf die Adresse, um mir direkt eine E-Mail zu schreiben.
          </p>
        </div></a
      >

      <!-- Github -->
      <a
        href="https://github.com/Tekin54"
        class="text-white"
        style="word-break: break-word; text-decoration: none"
      >
        <div class="column items-center q-pa-md shadow-2 hoverable contact-card">
          <!-- Icon-Box -->
          <div
            class="bg-grey-3 flex flex-center"
            style="border-radius: 12px; width: 64px; height: 64px"
          >
            <Icon icon="logos:github-icon" width="32" />
          </div>

          <!-- E-Mail -->
          <div class="text-center q-mt-md">
            <div class="text-subtitle1 text-weight-bold">Github</div>
            <a
              href="https://github.com/Tekin54"
              class="text-white"
              style="word-break: break-word; text-decoration: none"
            >
              Tekin54
            </a>
          </div>

          <p class="text-caption text-grey-7 q-mt-sm text-center">
            Klicken Sie auf die Adresse, um mir direkt per Github zu schreiben.
          </p>
        </div></a
      >

      <!-- Instagram Karte -->
      <a
        href="https://instagram.com/teking54"
        target="_blank"
        rel="noopener"
        style="word-break: break-word; color: inherit; text-decoration: none; font-weight: 500"
      >
        <div class="column items-center q-pa-md contact-card">
          <!-- Icon-Box -->
          <div
            class="bg-grey-3 flex flex-center"
            style="border-radius: 12px; width: 64px; height: 64px"
          >
            <Icon icon="logos:instagram-icon" width="32" />
          </div>

          <!-- Instagram -->
          <div class="text-center q-mt-md">
            <div class="text-subtitle1 text-weight-bold">Instagram</div>

            @Teking54
          </div>

          <p class="text-caption text-grey-7 q-mt-sm text-center">
            Klicken Sie auf die Adresse, um mit mir per Instagram zu schreiben.
          </p>
        </div></a
      >
    </div>
  </div>
</template>
<style>
.contact-card {
  width: 300px;
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
}
.contact-card:hover {
  background-color: #383838;
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
.card {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  color: white;
  cursor: pointer;
  transition: all 0.25s ease;
}
</style>
