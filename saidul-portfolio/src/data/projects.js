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
    id: 'competitive-i-os',
    title: 'Competitive Intelligence OS',
    status: 'Current',
    year: '2026',
    tagline: 'A software suite for competitive intelligence and market research.',
    description:
      'A suite of tools for competitive intelligence and market research, designed to help businesses gather, analyze, and visualize data from various sources. The platform includes web scraping, sentiment analysis, and data visualization features.',
    highlights: [
      'Web scraping and data aggregation from multiple sources',
      'Sentiment analysis for understanding market perceptions',
      'Data visualization tools for presenting insights effectively',
    ],
    stack: ['Node.js', 'Python', 'React'],
    image: 'https://picsum.photos/seed/competitive-intelligence-cover/900/600',
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
    id: 'Desktop-Companion',
    title: 'Desktop Companion Bot',
    status: 'future',
    year: 'Planned, 2026 — 2027',
    tagline: 'A lightweight desktop companion with Assistive AI and productivity tools.',
    description:
      'ESP-32 based lightweight desktop application designed to assist users with various productivity tasks, featuring an integrated AI assistant and a suite of helpful tools.',
    highlights: [
      'AI-powered task management and reminders',
      'Push notifications for important events and updates',
      'Offline functionality for uninterrupted access to essential features',
    ],
    stack: ['ESP-32', 'Python', 'AI APIs'],
    image: 'https://picsum.photos/seed/desktop-companion-cover/900/600',
    liveUrl: '',
    githubUrl: '',
  },
];
