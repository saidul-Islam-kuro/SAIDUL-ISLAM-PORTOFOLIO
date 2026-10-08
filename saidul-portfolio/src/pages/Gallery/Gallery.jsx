import React, { useState } from 'react';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import Lightbox from '../../components/Lightbox/Lightbox.jsx';
import { galleryImages } from '../../data/gallery';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={styles.page}>
      <header className={`container ${styles.header}`}>
        <SectionHeading
          title="Gallery"
          subtitle="Workshops, department events and a few behind-the-scenes moments from building EEE Vault."
          gearVariant="compact"
          gears
        />
      </header>

      <div className={`container ${styles.masonry}`}>
        {galleryImages.map((image, i) => (
          <FadeInSection key={image.id} delay={(i % 4) * 0.06} className={styles.item}>
            <button
              type="button"
              className={styles.frame}
              onClick={() => setActiveIndex(i)}
              aria-label={`Open image: ${image.caption}`}
              data-cursor-hover
            >
              <img src={image.src} alt={image.caption} loading="lazy" className={styles.image} />
              <span className={styles.overlay}>
                <span className={styles.tag}>{image.tag}</span>
                <span className={styles.caption}>{image.caption}</span>
              </span>
            </button>
          </FadeInSection>
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}
