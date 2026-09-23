import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'current', label: 'Current' },
  { key: 'past', label: 'Past' },
  { key: 'future', label: 'Future' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);
  useLockBodyScroll(Boolean(openId));

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.status === filter)),
    [filter]
  );

  const openProject = projects.find((p) => p.id === openId);

  return (
    <div className={styles.page}>
      <header className={`container ${styles.header}`}>
        <SectionHeading
          title="Projects"
          subtitle="Past, current and planned work — the department tools I've built, and the ones I'm building next."
        />
        <div className={styles.filters} role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className={`${styles.filterBtn} ${filter === f.key ? styles.filterActive : ''}`}
              onClick={() => setFilter(f.key)}
              data-cursor-hover
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <div className={`container ${styles.masonry}`}>
        {visible.map((project, i) => (
          <ProjectCard key={project.id} project={project} onOpen={setOpenId} delay={i * 0.05} />
        ))}
      </div>

      <AnimatePresence>
        {openProject && (
          <motion.div
            className={styles.backdrop}
            onClick={() => setOpenId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.detailCard}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" className={styles.closeBtn} onClick={() => setOpenId(null)} aria-label="Close">
                &times;
              </button>
              <img src={openProject.image} alt="" className={styles.detailImage} />
              <div className={styles.detailBody}>
                <span className={styles.detailYear}>{openProject.year}</span>
                <h3>{openProject.title}</h3>
                <p className={styles.detailDescription}>{openProject.description}</p>
                <ul className={styles.highlightList}>
                  {openProject.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className={styles.stack}>
                  {openProject.stack.map((tech) => (
                    <span key={tech} className={styles.chip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
