import React, { useState } from 'react';
import { m } from 'framer-motion';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Your message could not be sent. Please try again.');
      }
      setSent(true);
      setForm(initialForm);
    } catch (submitError) {
      setError(submitError.message || 'Your message could not be sent. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.page}>
      <header className={`container ${styles.header}`}>
        <SectionHeading
          title="Let's talk"
          subtitle="Questions about EEE Vault, collaboration ideas, or just want to say hello — send a message below."
          gearVariant="fine"
          gears
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
            <m.div
              className={styles.successState}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3>Message sent</h3>
              <p>
                Thanks for reaching out. Your message has been sent, and I&apos;ll get back to you soon.
              </p>
              <button type="button" className={styles.secondaryBtn} onClick={() => setSent(false)}>
                Send another message
              </button>
            </m.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website || ''}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
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
                  maxLength={254}
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
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                />
              </div>
              {error && <p className={styles.error} role="alert">{error}</p>}
              <button type="submit" className={styles.submitBtn} data-cursor-hover disabled={sending}>
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </FadeInSection>
      </div>
    </div>
  );
}
