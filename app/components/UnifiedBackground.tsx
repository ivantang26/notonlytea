'use client';

import styles from './UnifiedBackground.module.css';

export default function UnifiedBackground() {
  return (
    <div className={styles.unifiedBackground}>
      <div className={styles.backgroundOverlay}></div>
    </div>
  );
}

