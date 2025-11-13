'use client';

import styles from './MasterworkSection.module.css';

export default function MasterworkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <img src="/images/masterwork.jpg" alt="Master's masterpiece teacup" />
      </div>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>
          The best of<br />
          master's work
        </h2>
        <button className={styles.exploreButton}>
          EXPLORE MORE
        </button>
      </div>
    </section>
  );
}

