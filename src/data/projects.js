// src/data/projects.js
export const design_projects = [
  {
    id: 1,
    name: 'Grand RP Magazin',
    image: 'GrandRP.png',
    description: 'Magazin und Poster über Grand RP (GTA Roleplay) als Marketingprojekt',
    width: 60,
    direct: 'magazine_selection',
    vorschau: [
      {
        name: 'Magazin Print PDF',
        image: 'mdi:printer',
        width: 60,
        file: '/Oeztuerk_Magazin_Druckbögen.pdf',
      },
      {
        name: 'Poster Print PDF',
        image: 'mdi:printer',
        width: 60,
        file: '/Oeztuerk_Poster_Druckbögen.pdf',
      },
    ],
    downloads: [
      {
        name: 'Adobe Indesign - Magazin Datei',
        image: 'logos:adobe-indesign',
        width: 60,
        file: '/Oeztuerk_Magazin.indd',
      },
      {
        name: 'Adobe Indesign - Poster Datei',
        image: 'logos:adobe-indesign',
        width: 60,
        file: '/Oeztuerk_Poster.indd',
      },
    ],
  },
  {
    id: 2,
    name: 'Vinyl Cover',
    image: 'Vinyl.svg',
    description: 'Eigenes Vinyl-Cover – Konzept, Grafik und Umsetzung',
    width: 50,
    direct: 'magazine_selection',
    vorschau: [
      {
        name: 'Vinyl Cover PDF',
        image: 'mdi:printer',
        width: 60,
        file: '/Hypno-lies-eyes.pdf',
      },
      {
        name: 'Vinyl Cover Print PDF',
        image: 'mdi:printer',
        width: 60,
        file: '/Hypno-lies-eyes_PRINT.pdf',
      },
    ],
    downloads: [
      {
        name: 'Adobe Indesign - Vinyl Cover Datei',
        image: 'logos:adobe-illustrator',
        width: 60,
        file: '/Hypno-lies-eyes.ai',
      },
    ],
  },
];
export const projects = [
  {
    name: 'Vudiary',
    image: 'Vudiary.svg',
    description:
      'Vuediary ist ein einfaches Online-Tagebuch, in dem man Einträge mit GPS, Stimmungen und Bearbeitungsverlauf erstellen, bearbeiten und filtern kann.',
    width: 40,
    link: 'https://vudiary.onrender.com/',
  },
  {
    name: 'TEKTEK - Shopping Seite',
    image: 'Tektek.png',
    description:
      'Online-Shop für Mode & Accessoires. Homepage-Remake aktuell in <span class="text-bold" style="color:red; ">Bearbeitung</span>.',
    width: 50,
  },
];
export const archived_projects = [
  {
    name: 'Wien West Akademie',
    image: 'Wien West Akademie.png',
    description:
      'Open edX-Lernplattform mit IT-Lernvideos und interaktiven Übungen für die erste Klasse.',
    width: 50,
    height: 50,
  },
  {
    name: 'Streamado',
    image: 'Streamado.png',
    description:
      'Verwaltungssystem für Streaming-Anbieter, das Filme, Serien, Mitarbeiter und Kunden zentral verwaltet und Änderungen automatisch in CSV-Dateien speichert.',
    width: 70,
  },
];

//Hier verteile ich automatisch die IDs.
let idCounter = 1;
[...projects, ...design_projects, ...archived_projects].forEach((p) => (p.id = idCounter++));
