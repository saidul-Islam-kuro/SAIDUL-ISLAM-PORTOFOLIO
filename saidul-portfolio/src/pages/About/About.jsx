import React from 'react';
import AnimatedGear from '../../components/AnimatedGear/AnimatedGear.jsx';
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
        <div className={styles.introGearLayer} aria-hidden="true">
          <AnimatedGear className={styles.introGear} teeth={20} />
        </div>
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
          gearVariant="heavy"
          gears
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
          HOBBIES
      --------------------------------------------------------------- */}
      <section className={`container ${styles.section}`}>
        <SectionHeading
          title="Away from the circuits"
          subtitle="When I'm not building something or studying, I make time for great worlds and stories."
        />
        <div className={styles.hobbyGrid}>
          <FadeInSection className={styles.hobbyCard}>
            <span className={styles.hobbyEyebrow}>PLAYER ONE</span>
            <h3>Games with worlds worth getting lost in</h3>
            <GamingScene />
            <p>
              Gaming is one of my favorite ways to unwind. I&apos;ve explored a huge range of AAA
              and popular games, from cinematic adventures to sprawling open worlds — always up
              for a memorable story, a clever mechanic, or one more side quest.
            </p>
            <ul className={styles.hobbyTags} aria-label="Gaming interests">
              <li>AAA adventures</li>
              <li>Open worlds</li>
              <li>Story-driven games</li>
            </ul>
          </FadeInSection>
          <FadeInSection delay={0.1} className={styles.hobbyCard}>
            <span className={styles.hobbyEyebrow}>PAGE TURNER</span>
            <h3>Epic fantasy, one chapter at a time</h3>
            <FantasyScene />
            <p>
              I also love getting immersed in a good book, especially fantasy with rich worlds,
              layered characters, and big ideas. Brandon Sanderson&apos;s <em>The Stormlight Archive</em>
              {' '}and <em>Mistborn</em> are among my favorites.
            </p>
            <ul className={styles.hobbyTags} aria-label="Favorite book series">
              <li>The Stormlight Archive</li>
              <li>Mistborn</li>
              <li>Epic fantasy</li>
            </ul>
          </FadeInSection>
        </div>
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

function GamingScene() {
  return (
    <div className={styles.gameScene} aria-hidden="true">
      <svg viewBox="0 0 360 120" role="presentation">
        <ellipse className={styles.controllerShadow} cx="180" cy="99" rx="100" ry="7" />
        <g className={styles.controller}>
          <path
            className={styles.controllerBody}
            d="M111 34h138c14 0 24 9 28 22l12 30c3 8-3 15-11 15h-8c-6 0-10-3-14-8l-16-18H120l-16 18c-4 5-8 8-14 8h-8c-8 0-14-7-11-15l12-30c4-13 14-22 28-22z"
          />
          <path className={styles.controllerPanel} d="M135 40h90v28h-90z" />

          <g className={styles.dpad}>
            <rect x="100" y="54" width="10" height="30" rx="2" />
            <rect x="90" y="64" width="30" height="10" rx="2" />
          </g>

          <g className={styles.analogStick}>
            <circle className={styles.stickBase} cx="145" cy="78" r="11" />
            <circle className={styles.stickTop} cx="148" cy="75" r="6" />
          </g>

          <g className={styles.actionButtons}>
            <circle className={styles.buttonY} cx="251" cy="52" r="5" />
            <circle className={styles.buttonX} cx="241" cy="62" r="5" />
            <circle className={styles.buttonB} cx="261" cy="62" r="5" />
            <circle className={styles.buttonA} cx="251" cy="72" r="5" />
          </g>

          <path className={styles.menuButton} d="M176 54h8M176 60h8" />
        </g>
        <circle className={styles.controllerPulse} cx="251" cy="62" r="17" />
        <path className={styles.pressCue} d="m304 35 8 8-8 8" />
      </svg>
    </div>
  );
}

function FantasyScene() {
  return (
    <div className={styles.fantasyScene} aria-hidden="true">
      <svg viewBox="0 0 360 120" role="presentation">
        <path className={styles.bookShadow} d="M66 98h228v8H66z" />
        <path className={styles.bookBackCover} d="M73 25h107v72H73zM180 25h107v72H180z" />
        <path className={styles.bookLeftPage} d="M78 20h101v72c-32-10-65-10-101 0z" />
        <path className={styles.bookRightPage} d="M181 20h101v72c-32-10-65-10-101 0z" />
        <path className={styles.bookSpine} d="M179 21v72" />
        <g className={styles.bookTextLines}>
          <path d="M91 35h70M91 44h63M91 53h70M91 62h55M91 71h68" />
          <path d="M198 35h70M198 44h62M198 53h69M198 62h54M198 71h66" />
        </g>
        <path className={styles.bookTitle} d="M120 79h39M218 79h42" />
        <path className={styles.bookmark} d="M258 20h12v27l-6-5-6 5z" />
        <path className={styles.turningPage} d="M181 20c24 4 42 28 40 58-1 7-3 11-6 14-14-9-26-14-34-14z" />
        <path className={styles.turningPageEdge} d="M181 20c24 4 42 28 40 58-1 7-3 11-6 14" />
      </svg>
    </div>
  );
}
