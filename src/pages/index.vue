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
</script>

<template>
  <div class="column q-mt-xl">
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

      <div class="col-6 q-pl-lg q-gutter-y-xl">
        <span :class="$q.screen.lt.md ? 'text-h5 greeting  ' : 'text-h3 greeting '">
          Hallo, mein Name ist
          <span
            style="display: inline-block; transform: rotate(4deg); border-radius: 17px"
            class="bg-indigo-4"
            >Gülte</span
          >
        </span>
        <p class="text-h6">
          „Lorem ipsum“ – ich war Schüler an der HTL Wien West in der
          <span
            style="border-radius: 10px; display: inline-block; transform: rotate(-4deg)"
            class="bg-indigo-4"
          >
            IT-Abteilung
          </span>
          und habe dort meine Leidenschaft für Technik entdeckt. Besonders interessiert mich die
          Arbeit mit moderner Software und innovativen Technologien.
        </p>
      </div>
    </div>
    <div class="column q-mt-xl">
      <div class="q-mb-md">
        <h1 class="text-h4">Fähigkeiten</h1>
        <q-separator color="white" />
      </div>

      <div class="column q-my-md items-start">
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
      <div class="q-mb-md">
        <h1 class="text-h4">Bilder</h1>
        <q-separator color="white" />
      </div>
      <div class="q-mt-xs row q-col-gutter-md q-mb-lg" style="border-radius: 12px">
        <div v-for="a of 9" :key="a" class="col-6 col-sm-4 col-md-3">
          <div
            class="img-card"
            style="
              width: 100%;
              aspect-ratio: 1 / 1;
              border-radius: 15px;
              overflow: hidden;
              cursor: pointer;
              transition: transform 0.2s ease-in-out;
            "
          >
            <img
              :src="`/OEZT-Autos-0.jpg`"
              alt="Bild"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
        </div>
      </div>
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
.img-card {
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: #2b2b2b;
  border: 1px solid #474747;
  cursor: pointer;
  transition: all 0.25s ease;
}

.img-card:hover {
  background-color: #383838;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}
</style>
