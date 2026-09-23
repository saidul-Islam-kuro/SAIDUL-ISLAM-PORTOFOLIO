import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Front-end only demo submit — wire this up to a form backend
  // (Formspree, a serverless function, etc.) before going live.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
  };

  return (
    <div className={styles.page}>
      <header className={`container ${styles.header}`}>
        <SectionHeading
          title="Let's talk"
          subtitle="Questions about EEE Vault, collaboration ideas, or just want to say hello — send a message below."
        />
      </header>

      <div className={`container ${styles.grid}`}>
        <FadeInSection className={styles.infoCard}>
          <h3>Direct contact</h3>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:saidulkuro@gmail.com">saidulkuro@gmail.com</a>
            </li>
            <li>
              <span className={styles.infoLabel}>Based in</span>
              <span>Jamalpur, Mymensingh Division, Bangladesh</span>
            </li>
            <li>
              <span className={styles.infoLabel}>University</span>
              <span>Jamalpur Science and Technology University, EEE Dept.</span>
            </li>
          </ul>
          <div className={styles.socialBlock}>
            <span className={styles.infoLabel}>Find me elsewhere</span>
            <SocialLinks />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1} className={styles.formCard}>
          {sent ? (
            <motion.div
              className={styles.successState}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3>Message ready to send</h3>
              <p>
                Thanks for reaching out — this demo form doesn&apos;t have a backend connected yet, but your
                message would land straight in my inbox once it does.
              </p>
              <button type="button" className={styles.secondaryBtn} onClick={() => setSent(false)}>
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                />
              </div>
              <button type="submit" className={styles.submitBtn} data-cursor-hover>
                Send message
              </button>
            </form>
          )}
        </FadeInSection>
      </div>
    </div>
  );
}
