import React from 'react';
import styles from './SocialLinks.module.css';
import { socialLinks } from '../../data/nav';

// Minimal hand-drawn icon set — kept as inline SVG so the component has
// zero extra dependencies and every stroke can inherit `currentColor`.
const ICONS = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <path d="M6.94 8.5H4.06V19h2.88V8.5ZM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4ZM19.94 19h-2.87v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V19H10.2V8.5h2.75v1.44h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38V19Z" />
  ),
  facebook: (
    <path d="M13.5 21v-7.9h2.66l.4-3.1h-3.06V8.05c0-.9.25-1.5 1.55-1.5H16.7V3.77C16.4 3.73 15.4 3.65 14.24 3.65c-2.4 0-4.05 1.47-4.05 4.16v2.3H7.5v3.1h2.7V21h3.3Z" />
  ),
  mail: (
    <path d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm1.2 2 7.3 5.7a1 1 0 0 0 1.24 0l7.26-5.7v-.5H4.2v.5Zm15.8 1.3-6.94 5.44a2.5 2.5 0 0 1-3.12 0L3 8.8V17h18V8.8Z" />
  ),
};

/**
 * Row of social icon links. `variant` lets callers tweak sizing/spacing
 * (sidebar vs footer vs mobile menu) purely through CSS Modules.
 */
export default function SocialLinks({ variant = 'default' }) {
  return (
    <ul className={`${styles.list} ${styles[variant] || ''}`}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={styles.iconLink}
            aria-label={link.label}
            target={link.icon === 'mail' ? undefined : '_blank'}
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              {ICONS[link.icon]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
