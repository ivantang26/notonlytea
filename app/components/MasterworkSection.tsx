'use client';

import Link from 'next/link';
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
        <Link href="/masters-work">
          <button className={styles.exploreButton}>
            EXPLORE MORE
          </button>
        </Link>
      </div>
    </section>
  );
}

