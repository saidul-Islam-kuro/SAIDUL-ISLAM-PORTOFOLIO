import React from 'react';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';
import ParallaxLayer from '../../components/ParallaxLayer/ParallaxLayer.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import TimelineItem from '../../components/TimelineItem/TimelineItem.jsx';
import { timeline } from '../../data/timeline';
import { skillGroups, achievements, societies } from '../../data/skills';
import profilePhoto from '../../assets/images/saidul-islam-profile.jpeg';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      {/* ---------------------------------------------------------------
          INTRO
      --------------------------------------------------------------- */}
      <section className={styles.intro}>
        <ParallaxLayer speed={0.22} className={styles.introBlob}>
          <div className={styles.blobShape} />
        </ParallaxLayer>
        <div className={`container ${styles.introInner}`}>
          <FadeInSection className={styles.introText}>
            <p className={styles.kicker}>About me</p>
            <h1 className={styles.title}>
              An engineering student who kept reaching for a keyboard instead of just a datasheet.
            </h1>
            <p className={styles.lead}>
              I&apos;m Saidul Islam, currently studying Electrical &amp; Electronic Engineering at Jamalpur
              Science and Technology University. Somewhere in the middle of circuit theory and digital logic
              coursework, I picked up frontend development — and started using it to solve problems I saw
              around me in the EEE department, rather than problems from a tutorial.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.15} className={styles.introPortrait}>
            <img
              src={profilePhoto}
              alt="Saidul Islam"
              className={styles.portraitImage}
            />
          </FadeInSection>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SKILLS
      --------------------------------------------------------------- */}
      <section className={`container ${styles.section}`}>
        <SectionHeading
          title="Skills & tools"
          subtitle="What I reach for day to day, split between software and the electrical engineering fundamentals underneath it."
        />
        <div className={styles.skillsGrid}>
          {skillGroups.map((group, i) => (
            <FadeInSection key={group.title} delay={i * 0.06} className={styles.skillCard}>
              <h3>{group.title}</h3>
              <ul className={styles.tagList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          TIMELINE — "life's journey"
      --------------------------------------------------------------- */}
      <section className={`container ${styles.section}`}>
        <SectionHeading
          title="My journey so far"
          subtitle="From secondary school to the projects I'm building today — the milestones that got me here."
        />
        <ul className={styles.timelineList}>
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------------
          SOCIETIES & EXTRACURRICULARS
      --------------------------------------------------------------- */}
      <section className={`container ${styles.section}`}>
        <SectionHeading
          title="Societies & extracurriculars"
          subtitle="The groups and committees I've been part of alongside coursework."
        />
        <div className={styles.societyGrid}>
          {societies.map((society, i) => (
            <FadeInSection key={society.name} delay={i * 0.06} className={styles.societyCard}>
              <div className={styles.societyHeader}>
                <h3>{society.name}</h3>
                <span className={styles.societyPeriod}>{society.period}</span>
              </div>
              <p className={styles.societyRole}>{society.role}</p>
              <p className={styles.societyDescription}>{society.description}</p>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          ACHIEVEMENTS
      --------------------------------------------------------------- */}
      <section className={`container ${styles.achievementsSection}`}>
        <SectionHeading title="A few things I'm proud of" />
        <ul className={styles.achievementsList}>
          {achievements.map((item, i) => (
            <FadeInSection key={item} as="li" delay={i * 0.06} className={styles.achievementItem}>
              <span className={styles.achievementMark} aria-hidden="true" />
              <p>{item}</p>
            </FadeInSection>
          ))}
        </ul>
      </section>
    </div>
  );
}
