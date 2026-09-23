import React from 'react';
import FadeInSection from '../FadeInSection/FadeInSection.jsx';
import styles from './ProjectCard.module.css';

const STATUS_LABEL = {
  current: 'In progress',
  past: 'Completed',
  future: 'Planned',
};

/**
 * A single card in the Projects masonry grid. `onOpen` is called with the
 * project id so the parent page can expand it into a detail view.
 */
export default function ProjectCard({ project, onOpen, delay = 0 }) {
  return (
    <FadeInSection className={styles.wrap} delay={delay} y={22}>
      <button type="button" className={styles.card} onClick={() => onOpen(project.id)} data-cursor-hover>
        <div className={styles.imageWrap}>
          <img src={project.image} alt="" className={styles.image} loading="lazy" />
          <span className={`${styles.status} ${styles[project.status] || ''}`}>
            {STATUS_LABEL[project.status]}
          </span>
        </div>
        <div className={styles.body}>
          <span className={styles.year}>{project.year}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
          <div className={styles.stack}>
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className={styles.chip}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </button>
    </FadeInSection>
  );
}
