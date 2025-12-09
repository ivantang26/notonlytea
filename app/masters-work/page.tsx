'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from './MastersWork.module.css';

// Master collection items data
const masterCollections = [
  { id: 'A2', image: 'masterwork/Lot.A2/0H3A7177.jpg' },
  { id: 'A4', image: 'masterwork/Lot.A4/0H3A7189.jpg' },
  { id: 'A5', image: 'masterwork/Lot.A5/0H3A7197.jpg' },
  { id: 'A6', image: 'masterwork/Lot.A6/0H3A7204.jpg' },
  { id: 'A7', image: 'masterwork/Lot.A7/0H3A7211.jpg' },
  { id: 'A10', image: 'masterwork/Lot.A10/0H3A7229.jpg' },
  { id: 'A14', image: 'masterwork/Lot.A14/0H3A7253.jpg' },
  { id: 'A16', image: 'masterwork/Lot.A16/0H3A7265.jpg' },
  { id: 'A17', image: 'masterwork/Lot.A17/0H3A7271.jpg' },
  { id: 'A18', image: 'masterwork/Lot.A18/0H3A7277.jpg' },
  { id: 'A19', image: 'masterwork/Lot.A19/0H3A6603.jpg' },
  { id: 'A20', image: 'masterwork/Lot.A20/0H3A6609.jpg', price: 'HKD 2200', type: '禪定' },
  { id: 'A35', image: 'masterwork/Lot.A35/0H3A6699.jpg', price: 'HKD 2200', type: '斗' },
  { id: 'A42', image: 'masterwork/Lot.A42/0H3A6741.jpg', price: 'HKD 2200', type: '束口' },
  { id: 'A44', image: 'masterwork/Lot.A44/0H3A6753.jpg', price: 'HKD 2200', type: '斗' },
  { id: 'A46', image: 'masterwork/Lot.A46/0H3A6765.jpg', price: 'HKD 2200', type: '斗' },
  { id: 'A50', image: 'masterwork/Lot.A50/0H3A6789.jpg', price: 'HKD 2200', type: '束口' },
  { id: 'A54', image: 'masterwork/Lot.A54/0H3A6813.jpg', price: 'HKD 2200' },
  { id: 'A55', image: 'masterwork/Lot.A55/0H3A6819.jpg', price: 'HKD 2200', type: '斗' },
  { id: 'A58', image: 'masterwork/Lot.A58/0H3A6838.jpg', price: 'HKD 2200', type: '斗' },
];

export default function MastersWorkPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src="/images/masterwork1.jpg" alt="Master's teapot craftsmanship" />
        </div>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Journey<br />
            beyond the leaf<br />
            experience
          </h1>
          <p className={styles.heroDescription}>
            Discover the artistry of our handmade tea pots, crafted by master artisans.
          </p>
        </div>
        
        <div className={styles.heroButtons}>
          <button className={styles.outlineButton}>
            About the masters
          </button>
          <button className={styles.primaryButton}>
            <img src="/images/teapot.png" alt="" width="20" height="20" />
            Explore products
          </button>
        </div>
      </section>
      
      {/* Miracles Section */}
      <section className={styles.miraclesSection}>
        <h2 className={styles.miraclesTitle}>
          Miracles<br />
          under the scope
        </h2>
        <div className={styles.microscopeImage}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.microscopeVideo}
          >
            <source src="/images/jianzhang/vid.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.slideDots}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </section>
      
      {/* Master Collections Section */}
      <section className={styles.collectionsSection}>
        <div className={styles.collectionsDivider}></div>
        <h2 className={styles.collectionsTitle}>Master Collections</h2>
        
        <div className={styles.collectionsGrid}>
          {masterCollections.map((item) => (
            <div key={item.id}>
              <div className={styles.collectionCard}>
                <img 
                  src={`/images/${item.image}`} 
                  alt={`Master work ${item.id}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/jianzhang/0H3A7172.jpg';
                  }}
                />
              </div>
              <div className={styles.collectionInfo}>
                <p className={styles.collectionId}>{item.id}</p>
                {item.price && <p className={styles.collectionPrice}>{item.price}</p>}
                {item.type && <p className={styles.collectionType}>{item.type}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Product Section */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredContent}>
          <div className={styles.featuredProductInfo}>
            <h3 className={styles.productTitle}>
              Yunan Lily<br />Black
            </h3>
            <p className={styles.productDescription}>
              Trading at 300000 in 2024 June
            </p>
            <div className={styles.productAttributes}>
              <div className={styles.attribute}>
                <p className={styles.attributeLabel}>Taste</p>
                <p className={styles.attributeValue}>Smoky Soft</p>
              </div>
              <div className={styles.attribute}>
                <p className={styles.attributeLabel}>Aroma</p>
                <p className={styles.attributeValue}>Smoky Soft</p>
              </div>
              <div className={styles.attribute}>
                <p className={styles.attributeLabel}>Mouthfeel</p>
                <p className={styles.attributeValue}>Smoky Soft</p>
              </div>
            </div>
            
            <div className={styles.featuredActions}>
              <div className={styles.navButtons}>
                <button className={`${styles.navButton} ${styles.prev}`} aria-label="Previous">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
                <button className={styles.navButton} aria-label="Next">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
              <button className={styles.addToCartButton}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className={styles.featuredImage}>
          <img src="/images/yunanlilyblack.jpg" alt="Yunan Lily Black teapot" />
        </div>
      </section>
      
      
    </main>
  );
}

