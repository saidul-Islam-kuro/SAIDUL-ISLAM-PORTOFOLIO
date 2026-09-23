import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import styles from './ThemeToggle.module.css';

/**
 * Dark / light mode switch. A single sliding knob with a sun/moon glyph —
 * animated with a spring so the toggle feels tactile rather than instant.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.track}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={styles.iconSun} aria-hidden="true">
        ☀
      </span>
      <span className={styles.iconMoon} aria-hidden="true">
        ☾
      </span>
      <motion.span
        className={styles.knob}
        animate={{ x: isDark ? 22 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </button>
  );
}
