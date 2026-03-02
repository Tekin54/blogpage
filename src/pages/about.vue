<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const formSubmitted = ref(false);

function submitForm() {
  const { name, email, subject, message } = contactForm.value;
  const mailtoLink = `mailto:gultekinozturk72@gmail.com?subject=${encodeURIComponent(subject || 'Kontaktanfrage von ' + name)}&body=${encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)}`;
  window.open(mailtoLink, '_blank');
  formSubmitted.value = true;
  setTimeout(() => (formSubmitted.value = false), 4000);
}

const socialLinks = [
  {
    icon: 'logos:google-gmail',
    label: 'E-Mail',
    value: 'gultekinozturk72@gmail.com',
    href: 'mailto:gultekinozturk72@gmail.com',
    description: 'Direkt per E-Mail erreichbar',
    color: '#ea4335',
  },
  {
    icon: 'logos:github-icon',
    label: 'GitHub',
    value: 'Tekin54',
    href: 'https://github.com/Tekin54',
    description: 'Meine Open-Source-Projekte',
    color: '#fff',
  },
  {
    icon: 'logos:instagram-icon',
    label: 'Instagram',
    value: '@Teking54',
    href: 'https://instagram.com/teking54',
    description: 'Kreative Einblicke und mehr',
    color: '#e1306c',
  },
];

const timeline = [
  {
    year: '2019 – 2024',
    title: 'HTL Wien West – IT-Abteilung',
    description: 'Höhere Technische Lehranstalt mit Schwerpunkt Informationstechnologie. Hier habe ich die Grundlagen der Softwareentwicklung, Webdesign und Datenbanken erlernt.',
    icon: 'mdi:school',
  },
  {
    year: 'Laufend',
    title: 'Full-Stack Entwicklung',
    description: 'Aufbau von Webanwendungen mit Vue.js, Node.js, Express und PostgreSQL. Fokus auf moderne Architekturen und Clean Code.',
    icon: 'mdi:code-braces',
  },
  {
    year: 'Laufend',
    title: 'Design & Kreativprojekte',
    description: 'Grafikdesign mit Adobe InDesign und Illustrator. Erstellung von Magazinen, Postern und Brand Identities.',
    icon: 'mdi:palette',
  },
];


</script>

<template>
  <div class="q-pa-md text-white">
    <!-- Page Header -->
    <div class="text-center q-mt-md q-mb-xl reveal">
      <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">ÜBER MICH</p>
      <h1 class="text-h4 text-weight-bold">Kontakt & Werdegang</h1>
      <p class="text-subtitle1 text-grey-5 q-mt-sm" style="max-width: 550px; margin: 0 auto">
        Lerne mich kennen, entdecke meinen Werdegang und nimm gerne Kontakt auf.
      </p>
    </div>

    <!-- Timeline Section -->
    <div class="q-mb-xl reveal">
      <div class="q-mb-lg">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">WERDEGANG</p>
        <h2 class="text-h4 section-header">Mein Weg</h2>
      </div>

      <div class="timeline-container">
        <div
          v-for="(item, i) in timeline"
          :key="item.title"
          class="timeline-item reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="timeline-dot">
            <Icon :icon="item.icon" width="20" />
          </div>
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <h3 class="text-subtitle1 text-weight-bold q-mt-xs q-mb-xs">{{ item.title }}</h3>
            <p class="text-body2 text-grey-5 q-mb-none">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Social / Contact Cards -->
    <div class="q-mb-xl reveal">
      <div class="q-mb-lg">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">KONTAKT</p>
        <h2 class="text-h4 section-header">Erreichbarkeiten</h2>
      </div>

      <div class="card-row justify-center">
        <a
          v-for="(link, i) in socialLinks"
          :key="link.label"
          :href="link.href"
          :target="link.href.startsWith('mailto') ? undefined : '_blank'"
          rel="noopener"
          style="text-decoration: none; color: inherit"
          class="reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="column items-center q-pa-lg contact-card" style="height: 100%">
            <div
              class="contact-icon-wrap flex flex-center"
            >
              <Icon :icon="link.icon" width="32" />
            </div>
            <div class="text-center q-mt-md">
              <div class="text-subtitle1 text-weight-bold">{{ link.label }}</div>
              <div class="text-body2 text-grey-4">{{ link.value }}</div>
            </div>
            <p class="text-caption text-grey-6 q-mt-sm text-center q-mb-none">
              {{ link.description }}
            </p>
            <div class="contact-arrow q-mt-md">
              <Icon icon="mdi:arrow-right" width="18" />
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="q-mb-xl reveal">
      <div class="q-mb-lg">
        <p class="text-overline text-grey-5 q-mb-xs" style="letter-spacing: 3px">NACHRICHT</p>
        <h2 class="text-h4 section-header">Schreib mir</h2>
      </div>

      <div class="contact-form-wrapper">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-input
              v-model="contactForm.name"
              label="Name"
              dark
              outlined
              class="form-input"
              label-color="grey-5"
            >
              <template v-slot:prepend>
                <Icon icon="mdi:account" width="20" class="text-grey-5" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="contactForm.email"
              label="E-Mail"
              dark
              outlined
              class="form-input"
              label-color="grey-5"
              type="email"
            >
              <template v-slot:prepend>
                <Icon icon="mdi:email" width="20" class="text-grey-5" />
              </template>
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              v-model="contactForm.subject"
              label="Betreff"
              dark
              outlined
              class="form-input"
              label-color="grey-5"
            >
              <template v-slot:prepend>
                <Icon icon="mdi:tag" width="20" class="text-grey-5" />
              </template>
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              v-model="contactForm.message"
              label="Nachricht"
              dark
              outlined
              type="textarea"
              rows="5"
              class="form-input"
              label-color="grey-5"
            >
              <template v-slot:prepend>
                <Icon icon="mdi:message-text" width="20" class="text-grey-5" style="margin-top: 12px" />
              </template>
            </q-input>
          </div>
          <div class="col-12">
            <q-btn
              :label="formSubmitted ? 'Gesendet!' : 'Nachricht senden'"
              :icon="formSubmitted ? 'check' : 'send'"
              :color="formSubmitted ? 'positive' : undefined"
              :class="formSubmitted ? '' : 'send-btn'"
              no-caps
              unelevated
              size="lg"
              :disable="!contactForm.name || !contactForm.email || !contactForm.message"
              @click="submitForm"
              style="border-radius: 14px; padding: 10px 32px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* ─── Timeline ─── */

.timeline-container {
  position: relative;
  padding-left: 40px;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #5c6bc0, #7c4dff, transparent);
}

.timeline-item {
  position: relative;
  padding-bottom: 32px;
  display: flex;
  gap: 20px;
}

.timeline-dot {
  position: absolute;
  left: -40px;
  top: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0 20px rgba(92, 107, 192, 0.3);
  z-index: 1;
}

.timeline-content {
  background: rgba(30, 30, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px 24px;
  flex: 1;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  background: rgba(40, 40, 50, 0.8);
  transform: translateX(4px);
}

.timeline-year {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7c4dff;
  font-weight: 600;
}

/* ─── Contact Cards Improved ─── */

.contact-icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
}

.contact-card:hover .contact-icon-wrap {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.contact-arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.contact-card:hover .contact-arrow {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  color: white;
  transform: translateX(4px);
}

/* ─── Contact Form ─── */

.contact-form-wrapper {
  max-width: 700px;
  background: rgba(30, 30, 36, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 32px;
}

.form-input .q-field__control {
  border-radius: 12px !important;
  background: rgba(255, 255, 255, 0.03) !important;
}

.form-input .q-field__control::before {
  border-color: rgba(255, 255, 255, 0.08) !important;
  border-radius: 12px !important;
}

.form-input .q-field__control:hover::before {
  border-color: rgba(92, 107, 192, 0.3) !important;
}

.form-input .q-field--focused .q-field__control::after {
  border-color: #5c6bc0 !important;
}

.send-btn {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff) !important;
  box-shadow: 0 4px 20px rgba(92, 107, 192, 0.3);
  transition: all 0.3s ease !important;
}

.send-btn:hover {
  box-shadow: 0 8px 30px rgba(92, 107, 192, 0.45) !important;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .contact-form-wrapper {
    padding: 16px;
    border-radius: 18px;
  }

  .timeline-container {
    padding-left: 28px;
  }

  .timeline-dot {
    left: -28px;
    width: 24px;
    height: 24px;
  }

  .timeline-dot .iconify {
    width: 14px !important;
    height: 14px !important;
  }

  .timeline-container::before {
    left: 10px;
  }

  .timeline-content {
    padding: 14px 16px;
    border-radius: 12px;
  }

  .timeline-item {
    padding-bottom: 20px;
  }

  .contact-card {
    border-radius: 16px;
  }

  .contact-card:hover {
    transform: none;
  }

  .contact-icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 12px;
  }

  .contact-arrow {
    width: 30px;
    height: 30px;
  }

  .send-btn {
    width: 100%;
  }
}
</style>
