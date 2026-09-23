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

const ACTION_ICONS = {
  site: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 2.75Zm6.58 8.5h-2.63a15.16 15.16 0 0 0-1.2-4.14A7.76 7.76 0 0 1 18.58 11.25ZM12 4.08a13.07 13.07 0 0 1 2.42 7.17H9.58A13.07 13.07 0 0 1 12 4.08Zm-2.42 8.42h5.84a13.1 13.1 0 0 1-2.42 7.17A13.1 13.1 0 0 1 9.58 12.5Zm-1.4-1.25H5.56A7.76 7.76 0 0 1 8.7 7.11a15.16 15.16 0 0 0-1.2 4.14Zm0 2.5a15.16 15.16 0 0 0 1.2 4.14A7.76 7.76 0 0 1 5.56 13.75Zm10.84 0h2.63A7.76 7.76 0 0 1 15.3 16.89a15.16 15.16 0 0 0 1.2-4.14Zm-2.4 0h-5.84a13.1 13.1 0 0 1 2.42-7.17A13.1 13.1 0 0 1 18.02 13.75ZM9.58 19.92A13.07 13.07 0 0 1 12 12.75h0a13.07 13.07 0 0 1 2.42 7.17A13.07 13.07 0 0 1 12 19.92Z" fill="currentColor"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5A9.5 9.5 0 0 0 8.38 20.1c.47.1.64-.2.64-.45v-1.7c-2.68.58-3.24-1.3-3.24-1.3-.43-1.1-1.06-1.39-1.06-1.39-.87-.6.06-.59.06-.59 1 .07 1.52 1 1.52 1 .86 1.47 2.25 1.05 2.8.8.08-.62.34-1.05.62-1.29-2.14-.25-4.39-1.08-4.39-4.8 0-1.06.36-1.92.96-2.6-.1-.25-.42-1.28.1-2.66 0 0 .8-.26 2.64 1a9.08 9.08 0 0 1 4.82 0c1.83-1.27 2.63-1 2.63-1 .52 1.38.2 2.41.1 2.66.6.68.96 1.54.96 2.6 0 3.73-2.25 4.55-4.4 4.8.35.3.66.9.66 1.82V19.6c0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor"/>
    </svg>
  )
};

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
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

                {(openProject.liveUrl || openProject.githubUrl) && (
                  <div className={styles.actionRow}>
                    {openProject.liveUrl && (
                      <a
                        href={openProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.primaryAction}
                        data-cursor-hover
                      >
                        <span className={styles.actionIcon}>{ACTION_ICONS.site}</span>
                        <span>Visit Site</span>
                      </a>
                    )}

                    {openProject.githubUrl && (
                      <a
                        href={openProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.secondaryAction}
                        data-cursor-hover
                      >
                        <span className={styles.actionIcon}>{ACTION_ICONS.github}</span>
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
