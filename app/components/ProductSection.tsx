'use client';

import styles from './ProductSection.module.css';

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <div className={styles.productGrid}>
        {/* Essential Series - Left */}
        <div className={styles.productCard}>
          <div className={styles.tierBadge}>
            <span>TIER 01</span>
            <button className={styles.viewButton} aria-label="View">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
          <div className={styles.productImage}>
            <img src="/images/tea-box-1.png" alt="Golden Eyebrows Red Tea" />
          </div>
          <div className={styles.productInfo}>
            <h2 className={styles.seriesTitle}>Essential<br />Series</h2>
            <p className={styles.productCount}>6 Products</p>
          </div>
        </div>

        {/* Reserve Series - Right */}
        <div className={styles.productCard}>
          <div className={styles.tierBadge}>
            <span>TIER 02</span>
            <button className={styles.viewButton} aria-label="View">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
          <div className={styles.productImage}>
            <img src="/images/tea-box-2.png" alt="Pearl Elixir Aged White Tea" />
          </div>
          <div className={styles.productInfo}>
            <h2 className={styles.seriesTitle}>Reserve<br />Series</h2>
            <p className={styles.productCount}>5 Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

