<script setup>
import { useMyStore } from '../stores/myStore';
import { Icon } from '@iconify/vue';

const myStore = useMyStore();
import { ref, computed } from 'vue';

const selectedCategory = ref('alle');

const skillData = {
  alle: [
    { icon: 'javascript', label: 'JavaScript' },
    { icon: 'typescript', label: 'TypeScript' },
    { icon: 'python', label: 'Python' },
    { icon: 'csharp', label: 'C#' },
    { icon: 'html5', label: 'HTML5' },
    { icon: 'css3', label: 'CSS3' },
    { icon: 'vuejs', label: 'Vue.js' },
    { icon: 'nodejs', label: 'Node.js' },
    { icon: 'express', label: 'Express' },
    { icon: 'postgresql', label: 'PostgreSQL' },
    { icon: 'quasar', label: 'Quasar' },
    { icon: 'bootstrap', label: 'Bootstrap' },
    { icon: 'tailwindcss', label: 'Tailwind' },
    { icon: 'git', label: 'Git' },
    { icon: 'github', label: 'GitHub' },
    { icon: 'visualstudio', label: 'VS Studio' },
    { icon: 'vscode', label: 'VS Code' },
  ],
  programmiersprachen: [
    { icon: 'javascript', label: 'JavaScript' },
    { icon: 'typescript', label: 'TypeScript' },
    { icon: 'python', label: 'Python' },
    { icon: 'csharp', label: 'C#' },
  ],
  webtechnologien: [
    { icon: 'html5', label: 'HTML5' },
    { icon: 'css3', label: 'CSS3' },
  ],
  frameworks: [
    { icon: 'vuejs', label: 'Vue.js' },
    { icon: 'nodejs', label: 'Node.js' },
    { icon: 'express', label: 'Express' },
    { icon: 'quasar', label: 'Quasar' },
    { icon: 'bootstrap', label: 'Bootstrap' },
    { icon: 'tailwindcss', label: 'Tailwind' },
  ],
  tools: [
    { icon: 'git', label: 'Git' },
    { icon: 'github', label: 'GitHub' },
    { icon: 'visualstudio', label: 'VS Studio' },
    { icon: 'vscode', label: 'VS Code' },
  ],
};

const categoryOptions = [
  { label: 'Alle', value: 'alle' },
  { label: 'Programmiersprachen', value: 'programmiersprachen' },
  { label: 'Webtechnologien', value: 'webtechnologien' },
  { label: 'Frameworks', value: 'frameworks' },
  { label: 'Tools & Sonstiges', value: 'tools' },
];

const filteredSkills = computed(() => skillData[selectedCategory.value]);

const dialog = ref(false);
const position = ref('right'); // Dialog soll rechts erscheinen
const selectedImage = ref(''); // speichert das aktuell geklickte Bild

function open(imageUrl) {
  selectedImage.value = imageUrl;
  dialog.value = true;
}
function onDialogHide(evt) {
  // stoppt Scroll beim Schließen
  evt.preventDefault?.();
}
</script>

<template>
  <div class="column q-mt-xl">
    <div class="column">
      <div
        :class="
          $q.screen.lt.md
            ? 'column q-gutter-xl items-center text-center'
            : 'row q-gutter-xl justify-center q-mt-lg'
        "
      >
        <div>
          <img
            src="Bild_Oeztuerk.PNG"
            style="height: 300px; object-fit: cover; display: block; border-radius: 100px"
          />
        </div>

        <div class="col-7 q-pl-lg q-gutter-y-xl">
          <span :class="$q.screen.lt.md ? 'text-h5 greeting  ' : 'text-h3 greeting '">
            Hallo, mein Name ist
            <span
              style="display: inline-block; transform: rotate(4deg); border-radius: 17px"
              class="bg-indigo-4"
              >Gültekin</span
            >
          </span>
          <p class="text-h6">
            Ich war Schüler an der HTL Wien West in der
            <span
              style="border-radius: 10px; display: inline-block; transform: rotate(-4deg)"
              class="bg-indigo-4"
            >
              IT-Abteilung
            </span>
            und habe dort meine Leidenschaft für Technik entdeckt. Besonders interessiert mich die
            Arbeit mit moderner Software und innovativen Technologien, da ich es spannend finde,
            Probleme kreativ zu lösen und digitale Lösungen zu entwickeln.
          </p>
        </div>
      </div>
      <!-- Lebenslauf Bereich -->
      <div class="column items-center justify-center">
        <!-- Animierter Pfeil -->
        <Icon icon="mdi:arrow-down" width="35" class="animated-arrow q-mb-md" />

        <!-- Lebenslauf Button -->
        <a href="/Lebenslauf Oeztuerk.pdf" target="_blank" class="resume-btn text-h6 text-white">
          <Icon icon="mdi:file-account" width="24" class="q-mr-sm" />
          Lebenslauf anzeigen
        </a>
      </div>
    </div>
    <div class="column q-mt-xl">
      <div class="q-mb-md">
        <h1 class="text-h4">Fähigkeiten</h1>
        <q-separator color="white" />
      </div>

      <div class="column q-mt-md items-start">
        <q-select
          v-model="selectedCategory"
          :options="categoryOptions"
          option-label="label"
          option-value="value"
          emit-value
          map-options
          borderless
          hide-bottom-space
          color="white"
          text-color="white"
          popup-content-class="bg-dark text-white"
          class="dropdown-card text-h6 q-px-md q-py-sm"
          style="border-radius: 15px; max-width: 310px; width: 100%"
        />
      </div>

      <div class="q-mt-xs row q-col-gutter-md" style="border-radius: 12px">
        <div v-for="skill in filteredSkills" :key="skill.icon" class="col-6 col-sm-4 col-md-3">
          <div
            class="skill-card row items-center justify-center"
            style="
              height: 80px;
              width: 100%;
              border-radius: 15px;
              gap: 10px;
              transition: all 0.2s ease-in-out;
            "
          >
            <Icon :icon="`devicon:${skill.icon}`" width="30" />
            <span class="text-bold text-h6">{{ skill.label }}</span>
          </div>
        </div>
      </div>

      <div class="banner-container q-mb-xl q-mt-xl">
        <div class="banner-content">
          <span class="banner-text text-h3 text-white">→ Mehr Bilder</span>
        </div>
      </div>

      <!-- Banner End -->

      <!-- Gallery Start -->
      <!-- <div id="gallery-section" class="q-mt-xs row q-col-gutter-md q-mb-lg">
        <div v-for="a of 9" :key="a" class="col-9 col-sm-4 col-md-3">
          <div
            class="gallery-card cursor-pointer"
            :style="{ backgroundImage: `url('./img/OEZT-Autos-0.jpg')` }"
            @click="open(`./img/OEZT-Autos-0.jpg`)"
          ></div>
        </div>
      </div> -->
      <!-- Gallery End -->
    </div>
  </div>
</template>

<style lang="css">
.greeting {
  font-weight: bold;
}
.hoverable:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
body {
  color: white;
}
.skill-card {
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  cursor: pointer;
  transition: all 0.25s ease;
}

.skill-card:hover {
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
.dropdown-card .q-field__native,
.dropdown-card .q-field__control .q-field__append .q-icon {
  color: white;
}
.banner-container {
  position: relative;
  height: 600px;
  width: 100%;
  background: url('/Copilot_20251105_233600_blur.png') center/cover no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  /* weiche Wolkenkanten oben und unten */
  -webkit-mask-image: radial-gradient(
      circle at top left,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(circle at top right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(circle at bottom left, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  -webkit-mask-composite: destination-in;

  mask-image: radial-gradient(circle at top left, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(circle at top right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(circle at bottom left, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(circle at bottom right, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-composite: intersect;

  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
}

.banner-content {
  background: rgba(0, 0, 0, 0.35); /* leicht abgedunkelt für Textlesbarkeit */
  padding: 1.5rem 3rem;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.banner-container:hover .banner-content {
  transform: translateY(-5px); /* sanfte Bewegung beim Hover */
}

.banner-text {
  font-weight: bold;
  text-align: center;
}
.gallery-card {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.gallery-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}
.resume-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  border-radius: 14px;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
}

.resume-btn:hover {
  background-color: #383838;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
.animated-arrow {
  animation: bounce 1.5s infinite ease-in-out;
  color: #9ca3af; /* leicht grauer Ton */
  opacity: 0.9;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>
