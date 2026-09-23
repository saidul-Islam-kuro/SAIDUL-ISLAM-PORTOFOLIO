import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/nav';
import { projects } from '../../data/projects';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import styles from './Footer.module.css';

/**
 * Multi-column footer: brand/about blurb, quick links, a shortcut to a
 * couple of featured projects, and direct contact details.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const featured = projects.slice(0, 3);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <span className={styles.brandMark}>SI</span>
          <p>
            I&apos;m Saidul Islam, an Electrical &amp; Electronic Engineering student at Jamalpur Science and
            Technology University who builds practical software for the department I study in.
          </p>
          <SocialLinks variant="footer" />
        </div>

        <div className={styles.column}>
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Featured Work</h4>
          <ul>
            {featured.map((p) => (
              <li key={p.id}>
                <Link to="/projects">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:hello@saidulislam.dev">hello@saidulislam.dev</a>
            </li>
            <li>Jamalpur, Mymensingh Division, Bangladesh</li>
            <li>
              <Link to="/contact">Send a message</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <span>&copy; {year} Saidul Islam. All rights reserved.</span>
        <span>Built with React &amp; Framer Motion.</span>
      </div>
    </footer>
  );
}
