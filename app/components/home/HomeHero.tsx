'use client';

import Link from 'next/link';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.videoBackground}>
        <video src="/images/tea.mp4" autoPlay muted loop playsInline preload="auto" />
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.copyGroup}>
          <p className={styles.eyebrow}>Masterful Teapots Authentic Teas</p>
          <h1 className={styles.title}>
            Masterful Teapots<br />Authentic Teas
          </h1>
         
        </div>
        <div className={styles.ctaGroup}>
          <Link href="#masters" className={styles.secondaryBtn}>
            About the masters
          </Link>
          <Link href="/our-teas" className={styles.primaryBtn}>
            <img src="/images/teapot.png" alt="" />
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}

