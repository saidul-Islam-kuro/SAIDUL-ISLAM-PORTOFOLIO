import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import AnimatedGear from '../../components/AnimatedGear/AnimatedGear.jsx';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { projects } from '../../data/projects';
import profilePhoto from '../../assets/images/saidul-islam-profile.jpeg';
import styles from './Home.module.css';

const focusAreas = [
  {
    title: 'Frontend Engineering',
    description: 'Building fast, accessible interfaces in React — from component architecture to motion detail.',
  },
  {
    title: 'PWA & Offline Tools',
    description: 'Turning everyday study problems into installable apps that work even on patchy connections.',
  },
  {
    title: 'Backend & APIs',
    description: 'Designing and implementing robust server-side solutions and RESTful APIs.',
  },
  {
    title: 'Electrical & Electronics',
    description: 'A JSTU EEE degree underneath it all — circuits, digital logic and embedded systems fundamentals.',
  },
];

const stats = [
  { value: '06', label: 'JSTU EEE Batch' },
  { value: '5+', label: 'Projects shipped or in progress' },
  { value: '1', label: 'Presentation to the Vice-Chancellor' },
];

export default function Home() {
  const navigate = useNavigate();
  const featured = projects.filter((p) => p.status !== 'future').slice(0, 3);

  return (
    <div className={styles.page}>
      {/* ---------------------------------------------------------------
          HERO — layered parallax shapes behind a two-line introduction.
          The gradient + shapes drift at different speeds on scroll to
          create the "immersive depth" the brief calls for.
      --------------------------------------------------------------- */}
      <HomeHero />

      {/* ---------------------------------------------------------------
          FOCUS AREAS
      --------------------------------------------------------------- */}
      <section className={`container ${styles.section}`}>
        <SectionHeading
          title="Where my attention goes"
          subtitle="Four threads that keep showing up across my coursework and my side projects."
        />
        <div className={styles.focusGrid}>
          {focusAreas.map((area, i) => (
            <FadeInSection key={area.title} delay={i * 0.08} className={styles.focusCard}>
              <span className={styles.focusIndex}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          STATS STRIP
      --------------------------------------------------------------- */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsRow}`}>
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.08} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          FEATURED PROJECTS (masonry preview)
      --------------------------------------------------------------- */}
      <section className={`container ${styles.section}`}>
        <SectionHeading
          title="Recent and current work"
          subtitle="A quick look at what I've been building — the full list lives on the Projects page."
        />
        <div className={styles.masonry}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} onOpen={() => navigate('/projects')} delay={i * 0.08} />
          ))}
        </div>
        <FadeInSection className={styles.viewAllWrap}>
          <Link to="/projects" className={styles.viewAllLink} data-cursor-hover>
            View all projects
          </Link>
        </FadeInSection>
      </section>

      {/* ---------------------------------------------------------------
          CTA
      --------------------------------------------------------------- */}
      <section className={`container ${styles.ctaSection}`}>
        <FadeInSection className={styles.ctaCard}>
          <h2>Have a project in mind, or a question about EEE Vault?</h2>
          <p>I read every message myself — happy to talk about department tools, frontend work, or the degree.</p>
          <Link to="/contact" className={styles.ctaButton} data-cursor-hover>
            Get in touch
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}

/** Isolated so its own useScroll() target ref only measures the hero. */
function HomeHero() {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 500], [0, 80]);
  const heroTextOpacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <section className={styles.hero}>
      <HeroLavaLamp />
      <div className={styles.gearLayer} aria-hidden="true">
        <AnimatedGear className={styles.gearTop} />
        <AnimatedGear className={styles.gearBottom} reverse />
      </div>
      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContent}
          style={{ y: heroTextY, opacity: heroTextOpacity }}
        >
          <motion.p
            className={styles.heroKicker}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Saidul Islam
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Engineering the future of hardware, software and everything in between.
          </motion.h1>
          <motion.p
            className={styles.heroLead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            Studying EEE at Jamalpur Science and Technology University, and building EEE Vault — a study
            companion now used across the department — alongside it.
          </motion.p>
          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
          >
            <Link to="/projects" className={styles.heroPrimary} data-cursor-hover>
              See my work
            </Link>
            <Link to="/about" className={styles.heroSecondary} data-cursor-hover>
              My journey so far
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.94, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <motion.div
            className={styles.photoFrame}
            animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ rotate: -1.5, y: -12 }}
          >
            <img src={profilePhoto} alt="Saidul Islam portrait" className={styles.profilePhoto} />
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function HeroLavaLamp() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const bubbles = [
      { x: 0.08, y: 0.2, size: 0.2 },
      { x: 0.29, y: 0.78, size: 0.22 },
      { x: 0.48, y: 0.17, size: 0.18 },
      { x: 0.67, y: 0.74, size: 0.21 },
      { x: 0.88, y: 0.29, size: 0.23 },
      { x: 0.98, y: 0.84, size: 0.18 },
    ];

    let width = 0;
    let height = 0;
    let frameId;
    let lastFrame = 0;
    let accent = '#ff9644';
    let accentSoft = '#ffce99';

    const draw = (timestamp) => {
      if (!prefersReducedMotion && timestamp - lastFrame < 32) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;
      context.clearRect(0, 0, width, height);

      bubbles.forEach((bubble, index) => {
        const radius = Math.max(70, Math.min(width, height) * bubble.size);
        if (!prefersReducedMotion && (!bubble.transitionStart || timestamp >= bubble.transitionStart + bubble.duration)) {
          bubble.fromX = bubble.x;
          bubble.fromY = bubble.y;
          bubble.fromStretchX = bubble.stretchX || 1;
          bubble.fromStretchY = bubble.stretchY || 1;
          bubble.targetX = 0.04 + Math.random() * 0.92;
          bubble.targetY = 0.08 + Math.random() * 0.84;
          bubble.targetStretchX = 0.88 + Math.random() * 0.52;
          bubble.targetStretchY = 0.78 + Math.random() * 0.5;
          bubble.transitionStart = timestamp;
          bubble.duration = 4500 + Math.random() * 7000;
        }

        const progress = prefersReducedMotion
          ? 1
          : Math.min(1, (timestamp - bubble.transitionStart) / bubble.duration);
        const easedProgress = progress * progress * (3 - 2 * progress);
        if (!prefersReducedMotion) {
          bubble.x = bubble.fromX + (bubble.targetX - bubble.fromX) * easedProgress;
          bubble.y = bubble.fromY + (bubble.targetY - bubble.fromY) * easedProgress;
          bubble.stretchX = bubble.fromStretchX
            + (bubble.targetStretchX - bubble.fromStretchX) * easedProgress;
          bubble.stretchY = bubble.fromStretchY
            + (bubble.targetStretchY - bubble.fromStretchY) * easedProgress;
        }

        let x = bubble.x * width;
        let y = bubble.y * height;
        const stretchX = bubble.stretchX || 1;
        const stretchY = bubble.stretchY || 1;
        const color = index % 2 === 0 ? accent : accentSoft;

        context.save();
        context.translate(x, y);
        context.scale(stretchX, stretchY);
        context.globalAlpha = 0.21;
        const gradient = context.createRadialGradient(0, 0, radius * 0.08, 0, 0, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.72, color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
      });

      if (!prefersReducedMotion) frameId = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const styles = window.getComputedStyle(canvas);
      accent = styles.getPropertyValue('--accent').trim() || accent;
      accentSoft = styles.getPropertyValue('--accent-soft').trim() || accentSoft;
      draw(performance.now());
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className={styles.lavaLamp} aria-hidden="true" />;
}
