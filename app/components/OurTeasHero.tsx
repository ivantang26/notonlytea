'use client';

import SplineViewer from './SplineViewer';
import styles from './OurTeasHero.module.css';

export default function OurTeasHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>
            Journey<br />
            beyond the leaf<br />
            experience
          </h1>
          <p className={styles.heroSubtitle}>
            Discover the artistry of our handmade tea<br />
            pots, crafted by master artisans.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.btnSecondary}>About the masters</button>
            <button className={styles.btnPrimary}>
              <img src="/images/teapot.png" alt="" width="20" height="20" />
              Explore products
            </button>
          </div>
        </div>

        <div className={styles.splineContainer}>
          <SplineViewer url="/spline/tea_box.spline" />
        </div>
      </div>
    </section>
  );
}

