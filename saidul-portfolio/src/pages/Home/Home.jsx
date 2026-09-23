import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';
import ParallaxLayer from '../../components/ParallaxLayer/ParallaxLayer.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import { projects } from '../../data/projects';
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
    title: 'Bengali-Language Tooling',
    description: 'Solving the small, stubborn typography problems that come with typesetting Bangla script well.',
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
      <ParallaxLayer speed={0.18} className={styles.blobFar}>
        <div className={styles.blobShapeFar} />
      </ParallaxLayer>
      <ParallaxLayer speed={0.4} className={styles.blobNear}>
        <div className={styles.blobShapeNear} />
      </ParallaxLayer>

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

      <div className={styles.scrollCue} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
