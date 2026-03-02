<script setup>
import { design_projects, archived_projects, projects } from '@/data/projects';
import { Icon } from '@iconify/vue';

const projectTech = {
  Vudiary: ['Vue.js', 'Node.js', 'PostgreSQL'],
  'TEKTEK - Shopping Seite': ['Vue.js', 'Quasar', 'CSS3'],
  'Grand RP Magazin': ['InDesign', 'Photoshop'],
  'Vinyl Cover': ['Illustrator'],
  'Wien West Akademie': ['Open edX', 'Python'],
  Streamado: ['C#', '.NET'],
};

const statusMap = {
  Vudiary: { label: 'Live', color: '#4caf50' },
  'TEKTEK - Shopping Seite': { label: 'In Bearbeitung', color: '#ff9800' },
  'Wien West Akademie': { label: 'Archiviert', color: '#78909c' },
  Streamado: { label: 'Archiviert', color: '#78909c' },
};

function getTech(name) {
  return projectTech[name] || [];
}

function getStatus(name) {
  return statusMap[name] || null;
}
</script>

<template>
  <div class="projects-page text-white">
    <!-- Header -->
    <div class="projects-section reveal">
      <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">PORTFOLIO</p>
      <h1 class="text-h4 section-header text-weight-bold q-my-none">Projekte</h1>
      <p class="text-body2 text-grey-5 q-mt-sm q-mb-none" style="max-width: 500px">
        Eine Auswahl meiner Webentwicklungs- und Designprojekte.
      </p>
    </div>

    <!-- Active Projects -->
    <div class="projects-section">
      <div class="project-grid">
        <a
          v-for="(project, i) of projects"
          :key="project.id"
          :href="project.link"
          target="_blank"
          class="project-grid-item reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <q-card class="q-pa-md card project-card">
            <div class="row items-center justify-between q-mb-sm">
              <div class="flex items-center justify-center icon-cover">
                <q-img :src="project.image" :style="`width: ${project.width}px;`" contain />
              </div>
              <div v-if="getStatus(project.name)" class="status-badge" :style="{ '--status-color': getStatus(project.name).color }">
                <span class="status-badge-dot" :style="{ background: getStatus(project.name).color }"></span>
                {{ getStatus(project.name).label }}
              </div>
            </div>

            <div class="text-subtitle1 text-bold q-mt-sm">{{ project.name }}</div>

            <q-card-section class="q-pt-xs q-pl-none q-pb-sm text-grey-4 project-card-desc">
              <div class="project-desc text-body2" v-html="project.description"></div>
            </q-card-section>

            <div class="tech-tags q-mt-auto">
              <span v-for="tech in getTech(project.name)" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-link-indicator q-mt-sm">
              <Icon icon="mdi:open-in-new" width="14" />
              <span class="text-caption">Projekt öffnen</span>
            </div>
          </q-card>
        </a>
      </div>
    </div>

    <!-- Design Projects -->
    <div class="projects-section reveal">
      <div class="projects-section-header">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">KREATIV</p>
        <h2 class="text-h5 section-header q-my-none">Design Projekte</h2>
      </div>

      <div class="project-grid">
        <router-link
          v-for="(dproject, i) of design_projects"
          :key="dproject.id"
          :to="`/${dproject.direct}/${dproject.id}`"
          class="project-grid-item reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <q-card clickable class="q-pa-md card project-card">
            <div class="row items-center justify-between q-mb-sm">
              <div class="flex items-center justify-center icon-cover">
                <q-img :src="dproject.image" :style="`width: ${dproject.width}px;`" contain />
              </div>
              <div class="design-badge">
                <Icon icon="mdi:palette" width="14" class="q-mr-xs" />
                Design
              </div>
            </div>

            <div class="text-subtitle1 text-bold q-mt-sm">{{ dproject.name }}</div>

            <q-card-section class="q-pt-xs q-pl-none q-pb-sm text-grey-4 project-card-desc">
              <div class="project-desc text-body2">{{ dproject.description }}</div>
            </q-card-section>

            <div class="tech-tags q-mt-auto">
              <span v-for="tech in getTech(dproject.name)" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-link-indicator q-mt-sm">
              <Icon icon="mdi:arrow-right" width="14" />
              <span class="text-caption">Details ansehen</span>
            </div>
          </q-card>
        </router-link>
      </div>
    </div>

    <!-- Archived Projects -->
    <div class="projects-section reveal">
      <div class="projects-section-header">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">ARCHIV</p>
        <h2 class="text-h5 section-header q-my-none">Archivierte Projekte</h2>
      </div>

      <div class="project-grid">
        <q-card
          v-for="(aproject, i) of archived_projects"
          :key="aproject.id"
          class="q-pa-md card project-card archived reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="row items-center justify-between q-mb-sm">
            <div class="flex items-center justify-center icon-cover">
              <q-img :src="aproject.image" :style="`width: ${aproject.width}px;`" contain />
            </div>
            <div class="archived-badge">
              <Icon icon="mdi:archive" width="14" class="q-mr-xs" />
              Archiviert
            </div>
          </div>

          <div class="text-subtitle1 text-bold q-mt-sm">{{ aproject.name }}</div>

          <q-card-section class="q-pt-xs q-pl-none q-pb-sm text-grey-4 project-card-desc">
            <div class="project-desc text-body2">{{ aproject.description }}</div>
          </q-card-section>

          <div class="tech-tags q-mt-auto">
            <span v-for="tech in getTech(aproject.name)" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style>
.projects-page {
  padding: 16px;
}

.projects-section {
  margin-bottom: 32px;
}

.projects-section-header {
  margin-bottom: 16px;
}

/* ─── Project Grid ─── */

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.project-grid-item {
  text-decoration: none;
  color: inherit;
  display: flex;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 280px;
}

.project-card-desc {
  flex: 1;
  overflow: hidden;
}

.project-desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-card.archived {
  opacity: 0.7;
}

.project-card.archived:hover {
  opacity: 1;
}

/* ─── Badges ─── */

.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--status-color);
}

.status-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.design-badge {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(124, 77, 255, 0.1);
  border: 1px solid rgba(124, 77, 255, 0.2);
  color: #b388ff;
}

.archived-badge {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(120, 144, 156, 0.1);
  border: 1px solid rgba(120, 144, 156, 0.2);
  color: #90a4ae;
}

/* ─── Tech Tags ─── */

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 500;
  background: rgba(92, 107, 192, 0.1);
  border: 1px solid rgba(92, 107, 192, 0.15);
  color: #9fa8da;
  letter-spacing: 0.3px;
}

/* ─── Project Link Indicator ─── */

.project-link-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.card:hover .project-link-indicator {
  color: #7c4dff;
  transform: translateX(4px);
}

/* ─── Mobile ─── */

@media (max-width: 600px) {
  .projects-page {
    padding: 8px;
  }

  .projects-section {
    margin-bottom: 24px;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .project-card {
    min-height: auto;
  }

  .projects-page h1.text-h4 {
    font-size: 1.4rem !important;
  }

  .projects-section-header h2 {
    font-size: 1.2rem !important;
  }
}
</style>
