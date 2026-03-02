<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

const router = useRouter();
const currentRoute = useRoute();
const drawer = ref(false);
const showScrollTop = ref(false);

const navLinks = [
  { to: '/', label: 'Home', icon: 'mdi:home' },
  { to: '/projects', label: 'Projects', icon: 'mdi:folder-multiple' },
  { to: '/gallery', label: 'Gallery', icon: 'mdi:image-multiple' },
  { to: '/about', label: 'About', icon: 'mdi:account' },
];

function handleScroll() {
  showScrollTop.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let revealObserver = null;

function initRevealObserver() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 },
  );
}

function observeRevealElements() {
  if (!revealObserver) initRevealObserver();
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    revealObserver.observe(el);
  });
}

router.afterEach(() => {
  nextTick(() => {
    window.scrollTo(0, 0);
    setTimeout(observeRevealElements, 50);
  });
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  initRevealObserver();
  observeRevealElements();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (revealObserver) revealObserver.disconnect();
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="text-white site-margin header-glass"
      height-hint="98"
    >
      <q-toolbar class="navbar">
        <!-- Mobile Header -->
        <div class="lt-md mobile-header">
          <router-link to="/" class="mobile-logo">
            <span class="logo-bracket">&lt;</span><span class="logo-text">tek</span><span class="logo-dot">.</span><span class="logo-text">tek</span><span class="logo-bracket">/&gt;</span>
          </router-link>
          <button class="hamburger-btn" @click="drawer = !drawer" aria-label="Menü">
            <span class="hamburger-line"></span>
            <span class="hamburger-line short"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>

        <!-- Desktop Nav -->
        <div class="gt-sm row items-center" style="gap: 6px">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link"
          >
            {{ link.label }}
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <teleport to="body">
      <transition name="mobile-menu">
        <div v-if="drawer" class="mobile-menu-overlay" @click.self="drawer = false">
          <div class="mobile-menu">
            <!-- Close Button -->
            <div class="mobile-menu-top">
              <span class="text-subtitle1 text-weight-bold gradient-text">Menü</span>
              <q-btn flat round dense icon="close" class="mobile-menu-close" @click="drawer = false" />
            </div>

            <!-- Nav Items -->
            <nav class="mobile-menu-nav">
              <router-link
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="mobile-menu-link"
                :class="{ active: currentRoute.path === link.to }"
                @click="drawer = false"
              >
                <div class="mobile-menu-icon">
                  <Icon :icon="link.icon" width="22" />
                </div>
                <span>{{ link.label }}</span>
                <Icon icon="mdi:chevron-right" width="18" class="mobile-menu-chevron" />
              </router-link>
            </nav>

            <!-- Bottom -->
            <div class="mobile-menu-footer">
              <div class="mobile-menu-socials">
                <a href="mailto:gultekinozturk72@gmail.com" class="mobile-social-btn" aria-label="E-Mail">
                  <Icon icon="mdi:email" width="18" />
                </a>
                <a href="https://github.com/Tekin54" target="_blank" rel="noopener" class="mobile-social-btn" aria-label="GitHub">
                  <Icon icon="mdi:github" width="18" />
                </a>
                <a href="https://instagram.com/teking54" target="_blank" rel="noopener" class="mobile-social-btn" aria-label="Instagram">
                  <Icon icon="mdi:instagram" width="18" />
                </a>
              </div>
              <p class="text-caption text-grey-7 q-mt-sm q-mb-none">&copy; {{ new Date().getFullYear() }} Gültekin Öztürk</p>
            </div>
          </div>
        </div>
      </transition>
    </teleport>

    <q-page-container class="site-margin">
      <router-view />
    </q-page-container>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="text-h6 text-weight-bold gradient-text">Gültekin Öztürk</span>
          <p class="text-caption text-grey-6 q-mt-xs">Full-Stack Developer & Designer</p>
        </div>
        <div class="footer-links">
          <a href="mailto:gultekinozturk72@gmail.com" class="footer-link" aria-label="E-Mail">
            <Icon icon="mdi:email" width="20" />
          </a>
          <a href="https://github.com/Tekin54" target="_blank" rel="noopener" class="footer-link" aria-label="GitHub">
            <Icon icon="mdi:github" width="20" />
          </a>
          <a href="https://instagram.com/teking54" target="_blank" rel="noopener" class="footer-link" aria-label="Instagram">
            <Icon icon="mdi:instagram" width="20" />
          </a>
        </div>
        <q-separator dark class="q-my-md" />
        <p class="text-caption text-grey-7 text-center q-mb-none">
          &copy; {{ new Date().getFullYear() }} Gültekin Öztürk &mdash; Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>

    <transition name="fade-up">
      <q-btn
        v-show="showScrollTop"
        fab
        icon="keyboard_arrow_up"
        class="scroll-top-btn"
        @click="scrollToTop"
        aria-label="Nach oben scrollen"
      />
    </transition>
  </q-layout>
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype');
  font-weight: 700;
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
  font-family: 'Montserrat', sans-serif;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  overflow-x: hidden;
}

body {
  background: rgb(14, 14, 16);
  color: white;
  user-select: none;
}

/* ─── Site Layout ─── */

.site-margin {
  margin-top: 20px;
  margin-left: 14%;
  margin-right: 14%;
}

@media (max-width: 1024px) {
  .site-margin {
    margin-left: 6%;
    margin-right: 6%;
  }
}

@media (max-width: 600px) {
  .site-margin {
    margin-left: 4%;
    margin-right: 4%;
  }
}

/* ─── Header Glass ─── */

.header-glass {
  background: rgba(14, 14, 16, 0.8) !important;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 0 0 18px 18px;
  z-index: 2001;
}

@media (max-width: 1024px) {
  .header-glass {
    border-radius: 0 0 14px 14px;
  }
}

/* ─── Navbar ─── */

.navbar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  padding: 14px 12px;
  border-radius: 15px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 20px;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  white-space: nowrap;
  position: relative;
  z-index: 2002;
}

.nav-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.08);
}

.router-link-exact-active.nav-link {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  color: white;
  box-shadow: 0 4px 15px rgba(92, 107, 192, 0.35);
}

@media (max-width: 1024px) {
  .nav-link {
    font-size: 0.95rem;
    padding: 6px 14px;
  }
}

/* ─── Mobile Header ─── */

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.mobile-logo {
  text-decoration: none;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 0;
  transition: opacity 0.2s ease;
}

.mobile-logo:active {
  opacity: 0.7;
}

.logo-bracket {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 400;
}

.logo-text {
  background: linear-gradient(135deg, #7c4dff, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-dot {
  color: #7c4dff;
  -webkit-text-fill-color: #7c4dff;
  font-weight: 800;
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 9px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all 0.25s ease;
}

.hamburger-btn:active {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(0.95);
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.25s ease;
}

.hamburger-line.short {
  width: 60%;
  margin-left: auto;
}

@media (max-width: 1024px) {
  .navbar {
    padding: 10px 8px;
  }
}

/* ─── Mobile Menu ─── */

.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  width: 85%;
  max-width: 320px;
  height: 100%;
  background: rgb(18, 18, 22);
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
}

.mobile-menu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.mobile-menu-close {
  color: rgba(255, 255, 255, 0.5) !important;
  width: 40px !important;
  height: 40px !important;
}

.mobile-menu-close:hover {
  color: white !important;
}

.mobile-menu-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.mobile-menu-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.25s ease;
  background: transparent;
}

.mobile-menu-link:active {
  transform: scale(0.97);
}

.mobile-menu-link .mobile-menu-chevron {
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.mobile-menu-link.active {
  background: linear-gradient(135deg, rgba(92, 107, 192, 0.15), rgba(124, 77, 255, 0.1));
  color: white;
  border: 1px solid rgba(92, 107, 192, 0.2);
}

.mobile-menu-link.active .mobile-menu-icon {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  color: white;
}

.mobile-menu-link.active .mobile-menu-chevron {
  opacity: 1;
  color: #7c4dff;
}

.mobile-menu-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.mobile-menu-footer {
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.mobile-menu-socials {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.mobile-social-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: all 0.25s ease;
}

.mobile-social-btn:active {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  color: white;
}

/* Menu slide animation */
.mobile-menu-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from .mobile-menu,
.mobile-menu-leave-to .mobile-menu {
  transform: translateX(100%);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

/* ─── Gradient Text ─── */

.gradient-text {
  background: linear-gradient(135deg, #7c4dff, #5c6bc0, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── Shared Card Styles ─── */

.card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(30, 30, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: white;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, transparent, rgba(92, 107, 192, 0.3), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.card:hover {
  background-color: rgba(40, 40, 50, 0.9);
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(92, 107, 192, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card:hover::before {
  opacity: 1;
}

.contact-card {
  width: 100%;
  border-radius: 20px;
  background-color: rgba(30, 30, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: white;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-card:hover {
  background-color: rgba(40, 40, 50, 0.9);
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(92, 107, 192, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3);
}

.download-card {
  width: 100%;
  min-height: 200px;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(30, 30, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: white;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.download-card:hover {
  background-color: rgba(40, 40, 50, 0.9);
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(92, 107, 192, 0.15), 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dropdown-card {
  border-radius: 20px;
  background-color: rgba(30, 30, 36, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-card:hover {
  background-color: rgba(40, 40, 50, 0.9);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.dropdown-card .q-field__native,
.dropdown-card .q-field__control .q-field__append .q-icon {
  color: white;
}

.icon-cover {
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 12px;
}

/* ─── Reusable Card Row ─── */

.card-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  align-items: stretch;
}

.card-row > * {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.card-row > * > .card,
.card-row > * > .contact-card,
.card-row > * > .download-card,
.card-row > .card,
.card-row > .download-card {
  flex: 1;
}

@media (max-width: 600px) {
  .card-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .card {
    border-radius: 16px;
  }

  .card:hover {
    transform: none;
  }

  .contact-card:hover,
  .download-card:hover {
    transform: none;
  }

  .icon-cover {
    width: 48px;
    height: 48px;
    border-radius: 10px;
  }
}

/* ─── Section Headers ─── */

.section-header {
  position: relative;
  display: inline-block;
}

.section-header::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  border-radius: 3px;
}

/* ─── Scroll Reveal ─── */

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ─── Footer ─── */

.site-footer {
  margin-top: 80px;
  padding: 40px 14%;
  background: rgba(14, 14, 16, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.footer-brand {
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  background: linear-gradient(135deg, #5c6bc0, #7c4dff);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(92, 107, 192, 0.3);
}

@media (max-width: 600px) {
  .site-footer {
    padding: 24px 4%;
    margin-top: 40px;
  }

  .footer-link {
    width: 38px;
    height: 38px;
  }

  .site-margin {
    margin-top: 10px;
  }

  .section-header::after {
    width: 40px;
    height: 2px;
  }
}

/* ─── Scroll-to-Top Button ─── */

.scroll-top-btn {
  position: fixed !important;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  background: linear-gradient(135deg, #5c6bc0, #7c4dff) !important;
  color: white !important;
  box-shadow: 0 6px 25px rgba(92, 107, 192, 0.4);
}

.scroll-top-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(92, 107, 192, 0.5);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* ─── Global Separator Styling ─── */

.q-separator {
  background: linear-gradient(90deg, rgba(92, 107, 192, 0.5), rgba(124, 77, 255, 0.3), transparent) !important;
}
</style>
