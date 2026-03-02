<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed, onMounted, nextTick } from 'vue';

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

const services = [
  {
    icon: 'mdi:code-braces',
    title: 'Web Development',
    description:
      'Moderne, responsive Webanwendungen mit Vue.js, Node.js und aktuellen Technologien.',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    icon: 'mdi:palette',
    title: 'UI/UX Design',
    description:
      'Durchdachte Benutzeroberflächen mit Fokus auf Ästhetik und Benutzerfreundlichkeit.',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    icon: 'mdi:database',
    title: 'Backend & Datenbanken',
    description: 'Robuste Server-Architekturen mit Express, PostgreSQL und REST-APIs.',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  },
  {
    icon: 'mdi:brush',
    title: 'Grafikdesign',
    description: 'Kreative Designs für Print und Digital – Magazine, Poster und Brand Identity.',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
  },
];

const stats = [
  { value: '5+', label: 'Projekte', icon: 'mdi:rocket-launch' },
  { value: '17+', label: 'Technologien', icon: 'mdi:chip' },
  { value: '4+', label: 'Programmiersprachen', icon: 'mdi:code-tags' },
  { value: '6+', label: 'Frameworks', icon: 'mdi:layers-triple' },
];

const heroVisible = ref(false);

onMounted(() => {
  nextTick(() => {
    heroVisible.value = true;
  });
});
</script>

<template>
  <div class="column q-mt-xl">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-glow"></div>
      <div
        :class="[
          'hero-content',
          heroVisible ? 'hero-visible' : '',
          $q.screen.lt.md
            ? 'column q-gutter-xl items-center text-center'
            : 'row q-gutter-xl justify-center q-mt-lg',
        ]"
      >
        <div class="hero-image-wrapper">
          <div class="hero-image-ring">
            <img src="Bild_Oeztuerk.jpg" class="hero-image" />
          </div>
          <div class="hero-status">
            <span class="status-dot"></span>
            Verfügbar für Projekte
          </div>
        </div>

        <div :class="$q.screen.lt.md ? 'q-gutter-y-lg' : 'col-7 q-pl-lg q-gutter-y-xl'">
          <div>
            <p class="text-overline text-grey-5 q-mb-sm" style="letter-spacing: 3px">
              WILLKOMMEN AUF MEINEM PORTFOLIO
            </p>
            <span :class="$q.screen.lt.md ? 'text-h5 hero-greeting' : 'text-h3 hero-greeting'">
              Hallo, mein Name ist
              <span class="hero-name-highlight">Gültekin</span>
            </span>
          </div>
          <p :class="[$q.screen.lt.md ? 'text-body1' : 'text-h6', 'hero-text']">
            Ich war Schüler an der HTL Wien West in der
            <span class="text-highlight">IT-Abteilung</span>
            und habe dort meine Leidenschaft für Technik entdeckt. Besonders interessiert mich die
            Arbeit mit moderner Software und innovativen Technologien, da ich es spannend finde,
            Probleme kreativ zu lösen und digitale Lösungen zu entwickeln.
          </p>

          <div class="row q-gutter-md" :class="$q.screen.lt.md ? 'justify-center' : ''">
            <a href="/Lebenslauf.pdf" target="_blank" class="resume-btn text-white">
              <Icon icon="mdi:file-account" width="22" class="q-mr-sm" />
              Lebenslauf
            </a>
            <router-link to="/projects" class="projects-btn text-white">
              <Icon icon="mdi:folder-open" width="22" class="q-mr-sm" />
              Projekte ansehen
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span class="text-caption text-grey-6 q-mt-sm">Scroll</span>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section reveal q-mt-xl">
      <div class="row q-col-gutter-lg justify-center">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="col-6 col-sm-3"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="stat-card">
            <Icon :icon="stat.icon" width="28" class="stat-icon" />
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services / Was ich mache -->
    <div class="column q-mt-xl reveal">
      <div class="q-mb-lg">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">EXPERTISE</p>
        <h2 class="text-h4 section-header">Was ich mache</h2>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="col-12 col-sm-6 col-md-3 reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="service-card">
            <div class="service-icon-wrap" :style="{ background: service.gradient }">
              <Icon :icon="service.icon" width="28" color="white" />
            </div>
            <h3 class="text-subtitle1 text-weight-bold q-mt-md q-mb-sm">{{ service.title }}</h3>
            <p class="text-body2 text-grey-5">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="column q-mt-xl reveal">
      <div class="q-mb-lg">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">TECHNOLOGIEN</p>
        <h2 class="text-h4 section-header">Fähigkeiten</h2>
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
          class="dropdown-card text-subtitle1 q-px-md q-py-sm"
          style="border-radius: 15px; max-width: 310px; width: 100%"
        />
      </div>

      <div class="q-mt-md q-mb-xl row q-col-gutter-md">
        <transition-group name="skill-pop">
          <div v-for="skill in filteredSkills" :key="skill.icon" class="col-6 col-sm-4 col-md-3">
            <div class="skill-card row items-center justify-center">
              <Icon :icon="`devicon:${skill.icon}`" width="30" />
              <span class="text-bold text-subtitle1">{{ skill.label }}</span>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style>
/* ─── Hero Section ─── */

.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(92, 107, 192, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content.hero-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.hero-image-ring {
  position: relative;
  padding: 4px;
  border-radius: 100px;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff, #42a5f5);
}

.hero-image {
  height: 280px;
  object-fit: cover;
  display: block;
  border-radius: 96px;
  border: 3px solid rgb(14, 14, 16);
}

.hero-status {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(30, 30, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.5);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);
  }
}

.hero-greeting {
  font-weight: 700;
  line-height: 1.3;
}

.hero-name-highlight {
  display: inline-block;
  transform: rotate(3deg);
  border-radius: 14px;
  padding: 2px 12px;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  box-shadow: 0 4px 20px rgba(92, 107, 192, 0.3);
}

.hero-text {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  font-weight: 400;
}

.text-highlight {
  display: inline-block;
  transform: rotate(-3deg);
  border-radius: 10px;
  padding: 1px 10px;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
}

@media (max-width: 600px) {
  .hero-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border-width: 2px;
  }

  .hero-image-ring {
    padding: 3px;
    border-radius: 50%;
    box-shadow:
      0 0 30px rgba(124, 77, 255, 0.2),
      0 0 60px rgba(92, 107, 192, 0.1);
  }

  .hero-image-wrapper {
    gap: 10px;
  }

  .hero-section {
    min-height: auto;
    padding-bottom: 20px;
  }

  .hero-glow {
    display: none;
  }

  .hero-status {
    font-size: 0.7rem;
    padding: 4px 12px;
  }

  .hero-name-highlight {
    padding: 1px 8px;
    border-radius: 10px;
  }

  .text-highlight {
    padding: 0 6px;
    border-radius: 6px;
  }

  .hero-text {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .scroll-indicator {
    display: none;
  }
}

/* ─── CTA Buttons ─── */

.resume-btn,
.projects-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 600px) {
  .resume-btn,
  .projects-btn {
    padding: 10px 20px;
    font-size: 0.85rem;
    border-radius: 12px;
    flex: 1;
    justify-content: center;
  }

  .resume-btn:hover,
  .projects-btn:hover {
    transform: none;
  }
}

.resume-btn {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  box-shadow: 0 4px 20px rgba(92, 107, 192, 0.3);
}

.resume-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(92, 107, 192, 0.45);
}

.projects-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.projects-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* ─── Scroll Indicator ─── */

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  animation: fade-float 2.5s ease-in-out infinite;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-wheel {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 3px;
  animation: scroll-wheel 2s infinite;
}

@keyframes scroll-wheel {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes fade-float {
  0%,
  100% {
    opacity: 0.6;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(6px);
  }
}

/* ─── Stats Section ─── */

.stats-section {
  padding: 20px 0;
}

.stat-card {
  text-align: center;
  padding: 28px 16px;
  border-radius: 20px;
  background: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.35s ease;
}

.stat-card:hover {
  background: rgba(40, 40, 50, 0.8);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-icon {
  color: #7c4dff;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 600px) {
  .stat-card {
    padding: 18px 10px;
    border-radius: 14px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.7rem;
    letter-spacing: 0.5px;
  }

  .stat-icon {
    margin-bottom: 4px;
  }
}

/* ─── Service Cards ─── */

.service-card {
  padding: 28px 24px;
  border-radius: 20px;
  background: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  background: rgba(40, 40, 50, 0.8);
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.service-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 600px) {
  .service-card {
    padding: 20px 18px;
    border-radius: 16px;
  }

  .service-card:hover {
    transform: none;
  }

  .service-icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 12px;
  }
}

/* ─── Skill Cards ─── */

.skill-card {
  height: 70px;
  width: 100%;
  border-radius: 15px;
  gap: 10px;
  background: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-card:hover {
  background: rgba(40, 40, 50, 0.8);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(92, 107, 192, 0.15);
  border-color: rgba(92, 107, 192, 0.2);
}

@media (max-width: 600px) {
  .skill-card {
    height: 58px;
    border-radius: 12px;
    gap: 8px;
  }

  .skill-card .text-subtitle1 {
    font-size: 0.8rem !important;
  }

  .skill-card:hover {
    transform: none;
  }
}

/* ─── Skill Transition ─── */

.skill-pop-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-pop-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-pop-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}

.skill-pop-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
