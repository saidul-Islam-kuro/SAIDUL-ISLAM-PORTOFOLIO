// Portfolio projects — spans past, current and planned (future) work,
// so the Projects page can filter across the whole arc honestly rather
// than pretending everything is already finished.
export const projects = [
  {
    id: 'eee-vault',
    title: 'EEE Vault',
    status: 'current',
    year: '2024 — Present',
    tagline: 'A digital question bank & study companion for the JSTU EEE department.',
    description:
      'A Progressive Web App that gives the whole EEE department one place to find past questions, structured notes and an AI study assistant. Built on vanilla JavaScript and Tailwind CSS, with PDF.js and jsPDF handling document rendering and export, marked.js and MathJax for formatted notes and equations, and a multi-provider AI layer (Gemini, OpenRouter, Ollama) so it keeps working even if one provider is down.',
    highlights: [
      'Git-based content pipeline via GitHub + Decap CMS over a JSON data layer',
      'Full code audit that patched blank-PDF export bugs, XSS risks from unescaped HTML, and a bypassable client-side quota system',
      'Added fetch timeouts, lazy loading and CDN fallbacks for reliability under real classroom conditions',
    ],
    stack: ['JavaScript', 'Tailwind CSS', 'PDF.js', 'jsPDF', 'MathJax', 'Decap CMS'],
    image: 'https://picsum.photos/seed/eee-vault-cover/900/700',
    liveUrl: 'https://eee-vault.example.com',
    githubUrl: 'https://github.com/saidul-islam/eee-vault',
  },
  {
    id: 'JSTU-ediary',
    title: 'JSTU eDiary',
    status: 'past',
    year: '2025',
    tagline: 'A digital diary for managing faculty, staff and administrative profiles at JSTU.',
    description:
      'A commissioned application for JSTU administration to manage profiling of all faculty, staff and administrative members of the university.',
    highlights: [
      'Used the Noto Sans Bengali family for correct conjunct and vowel-sign rendering',
      'Styled HTML-to-PDF pipeline built around wkhtmltopdf',
      'Solved font loading entirely offline after network font-fetching was blocked in the build environment',
    ],
    stack: ['wkhtmltopdf', 'HTML/CSS', 'Noto Sans Bengali'],
    image: 'https://picsum.photos/seed/biology-notes-cover/900/1100',
    liveUrl: '',
    githubUrl: 'https://github.com/saidul-islam/jstu-ediary',
  },
  {
    id: 'vc-presentation',
    title: 'Vice-Chancellor Presentation Deck',
    status: 'past',
    year: '2025',
    tagline: 'A six-slide deck introducing EEE Vault to university leadership.',
    description:
      'A commissioned slide deck presenting EEE Vault to the JSTU Vice-Chancellor\u2019s office — generated programmatically rather than built by hand, so the same pipeline can produce future decks in minutes.',
    highlights: [
      'Built with pptxgenjs in a navy-and-red institutional palette',
      'Cambria and Calibri type pairing for a formal, administrative tone',
      'A 2\u00d72 screenshot grid layout with OOXML-injected fade transitions between slides',
    ],
    stack: ['pptxgenjs', 'OOXML'],
    image: 'https://picsum.photos/seed/vc-deck-cover/900/650',
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'portfolio-site',
    title: 'This Portfolio',
    status: 'current',
    year: '2026',
    tagline: 'The site you\u2019re looking at right now.',
    description:
      'A parallax, multi-page portfolio built to bring the academic timeline, skills and project work into one honey-toned home — designed and coded from scratch rather than started from a template.',
    highlights: [
      'React component architecture with CSS Modules per component',
      'Framer Motion for scroll-driven parallax and reveal animations',
      'Custom cursor, image lightbox gallery and a dark/light theme system',
    ],
    stack: ['React', 'Framer Motion', 'CSS Modules', 'Vite'],
    image: 'https://picsum.photos/seed/portfolio-cover/900/750',
    liveUrl: 'https://saidulislam.dev',
    githubUrl: 'https://github.com/saidul-islam/portfolio',
  },
  {
    id: 'eee-vault-mobile',
    title: 'EEE Vault — Mobile Companion',
    status: 'future',
    year: 'Planned, 2026 — 2027',
    tagline: 'An offline-first companion app for exam season.',
    description:
      'The next chapter for EEE Vault: a lightweight companion app with push notifications for new question uploads and a fully offline exam-mode reader for the days before a test when connectivity can\u2019t be relied on.',
    highlights: [
      'Offline-first data sync from the existing JSON content layer',
      'Push notifications for new uploads by course code',
      'Distraction-free "exam mode" reading view',
    ],
    stack: ['React Native (planned)', 'Service Workers'],
    image: 'https://picsum.photos/seed/eee-mobile-cover/900/900',
    liveUrl: '',
    githubUrl: '',
  },
];
