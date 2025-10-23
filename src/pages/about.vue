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
      <div
        class="bg-white text-dark column items-center q-pa-md shadow-2 hoverable"
        style="border-radius: 16px; max-width: 320px; width: 100%; transition: all 0.3s ease-in-out"
      >
        <!-- Icon-Box -->
        <div
          class="bg-grey-3 flex flex-center"
          style="border-radius: 50%; width: 64px; height: 64px"
        >
          <Icon icon="logos:google-gmail" width="32" />
        </div>

        <!-- E-Mail -->
        <div class="text-center q-mt-md">
          <div class="text-subtitle1 text-weight-bold">E-Mail</div>
          <a
            href="mailto:gultekinozturk72@gmail.com"
            class="text-primary"
            style="word-break: break-word"
          >
            gultekinozturk72@gmail.com
          </a>
        </div>

        <p class="text-caption text-grey-7 q-mt-sm text-center">
          Klicken Sie auf die Adresse, um mir direkt eine E-Mail zu schreiben.
        </p>
      </div>

      <!-- Github -->
      <div
        class="bg-white text-dark column items-center q-pa-md shadow-2 hoverable"
        style="border-radius: 16px; max-width: 320px; width: 100%; transition: all 0.3s ease-in-out"
      >
        <!-- Icon-Box -->
        <div
          class="bg-grey-3 flex flex-center"
          style="border-radius: 50%; width: 64px; height: 64px"
        >
          <Icon icon="logos:github-icon" width="32" />
        </div>

        <!-- E-Mail -->
        <div class="text-center q-mt-md">
          <div class="text-subtitle1 text-weight-bold">Github</div>
          <a href="https://github.com/Tekin54" class="text-primary" style="word-break: break-word">
            Tekin54
          </a>
        </div>

        <p class="text-caption text-grey-7 q-mt-sm text-center">
          Klicken Sie auf die Adresse, um mir direkt per Github zu schreiben.
        </p>
      </div>

      <!-- Instagram Karte -->
      <div
        class="bg-white text-dark column items-center q-pa-md shadow-2 hoverable"
        style="border-radius: 16px; max-width: 320px; width: 100%; transition: all 0.3s ease-in-out"
      >
        <!-- Icon-Box -->
        <div
          class="bg-grey-3 flex flex-center"
          style="border-radius: 50%; width: 64px; height: 64px"
        >
          <Icon icon="logos:instagram-icon" width="32" />
        </div>

        <!-- Instagram -->
        <div class="text-center q-mt-md">
          <div class="text-subtitle1 text-weight-bold">Instagram</div>
          <a
            href="https://instagram.com/teking54"
            target="_blank"
            rel="noopener"
            style="word-break: break-word; color: inherit; text-decoration: none; font-weight: 500"
          >
            @teking54
          </a>
        </div>

        <p class="text-caption text-grey-7 q-mt-sm text-center">
          Klicken Sie auf die Adresse, um mit mir per Instagram zu schreiben.
        </p>
      </div>
    </div>
  </div>
</template>
