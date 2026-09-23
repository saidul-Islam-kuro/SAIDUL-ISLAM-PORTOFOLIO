# Saidul Islam — Portfolio

A multi-page, parallax-style personal portfolio built with React, React
Router and Framer Motion. Honey-orange visual identity (warm white / peach
/ bright orange / deep brown) with a full dark mode.

## Pages

- **Home** — animated hero with layered parallax shapes, focus areas, a
  stats strip, and a masonry preview of featured projects.
- **About** — bio, skills & tools, a "life's journey" timeline (education
  + key milestones), society memberships, and achievements.
- **Projects** — filterable masonry grid (All / Current / Past / Future)
  with a detail overlay for each project.
- **Gallery** — masonry image grid with a full image lightbox (keyboard
  navigable: Esc to close, arrow keys to move between photos).
- **Contact** — a styled contact form (front-end only — see the comment
  in `src/pages/Contact/Contact.jsx` for wiring it up to a real backend)
  plus direct contact details and social links.

## Interactive features

- Left sidebar navigation on desktop; a hamburger + slide-in drawer below
  the tablet breakpoint (960px).
- Dark / light mode toggle, persisted in `localStorage` and defaulting to
  the visitor's OS preference on first visit.
- Scroll-triggered fade-in reveals (`FadeInSection`) and depth-based
  parallax layers (`ParallaxLayer`), both callable from any page.
- A performant custom cursor (`CustomCursor`) that tracks the pointer via
  `requestAnimationFrame` and direct `transform` writes — never through
  React state — so it never triggers layout thrashing. Disables itself
  automatically on touch devices.
- An image lightbox gallery with keyboard support and smooth
  enter/exit transitions.
- A "back to top" button that fades in after scrolling, and smooth
  scrolling enabled globally via `scroll-behavior: smooth`.
- Every animated component respects `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev       # start the local dev server
npm run build      # production build into /dist
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/   Reusable UI pieces, each with its own CSS Module
  context/      ThemeContext (dark/light mode)
  data/         Content as plain JS modules (timeline, projects, gallery, skills, nav)
  hooks/        useScrolled, useLockBodyScroll
  pages/        One folder per route (Home, About, Projects, Gallery, Contact)
```

## Customising

- **Colours & type** — every design token lives at the top of
  `src/index.css` as CSS custom properties (`:root` for light mode,
  `[data-theme='dark']` for dark mode). Change them once, and every
  component picks up the new values.
- **Content** — almost all page copy lives in `src/data/*.js` rather than
  being hard-coded in JSX, so updating a project, a timeline entry or a
  gallery caption doesn't require touching any component code.
- **Images** — every image currently points at `picsum.photos` (event/
  gallery photos) or `placehold.co` (the profile portrait) as
  placeholders. Swap the `src` values in `src/data/projects.js`,
  `src/data/gallery.js` and `src/pages/About/About.jsx` for real photos
  before shipping.
- **Contact form** — `handleSubmit` in `Contact.jsx` currently just shows
  a success state locally. Point it at a form backend (Formspree, a
  serverless function, etc.) to actually receive messages.
