import React from 'react';
import FadeInSection from '../FadeInSection/FadeInSection.jsx';
import styles from './TimelineItem.module.css';

/**
 * A single entry in the About page's "life's journey" timeline.
 * `index` is used only to alternate the card side on wide screens —
 * a genuine sequence, so the numbered marker here is earned, not decorative.
 */
export default function TimelineItem({ item, index }) {
  const side = index % 2 === 0 ? styles.left : styles.right;

  return (
    <FadeInSection as="li" className={`${styles.item} ${side}`} y={20}>
      <div className={styles.marker}>{String(index + 1).padStart(2, '0')}</div>
      <div className={styles.card}>
        <span className={styles.year}>{item.year}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.place}>{item.place}</p>
        <p className={styles.description}>{item.description}</p>
      </div>
    </FadeInSection>
  );
}
