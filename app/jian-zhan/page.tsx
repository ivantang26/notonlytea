import Navigation from '../components/Navigation';
import UnifiedBackground from '../components/UnifiedBackground';
import styles from './JianZhan.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jian Zhan - Golden EyeBrows | Not Only Tea',
  description: 'Discover the artistry of our authentic Jian Zhan tea cups, crafted by master artisans whose work is celebrated in museums.',
};

export default function JianZhanPage() {
  return (
    <main className={styles.main}>
      <UnifiedBackground />
      <Navigation />
      
      {/* Hero Product Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.productImage}>
            <img src="/images/jianzhang/white-Photoroom (2) 1.png" alt="Jian Zhan Tea Cup" />
          </div>
          
          <div className={styles.productDetails}>
            <div className={styles.productTitle}>
              <h1>Golden<br />EyeBrows</h1>
            </div>
            
            <p className={styles.productDescription}>
              Discover the artistry of our handmade tea pots, crafted by master artisans whose work is celebrated in museums.
            </p>
            
            <div className={styles.productAttributes}>
              <div className={styles.attribute}>
                <h3>Taste</h3>
                <p>Smoky Soft</p>
              </div>
              <div className={styles.attribute}>
                <h3>Aroma</h3>
                <p>Smoky Soft</p>
              </div>
              <div className={styles.attribute}>
                <h3>Mouthfeel</h3>
                <p>Smoky Soft</p>
              </div>
            </div>
            
            <div className={styles.actionButtons}>
              <button className={styles.buyButton}>BUY NOW</button>
              <button className={styles.contactButton}>CONTACT US</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* You May Also Like Section */}
      <section className={styles.alsoLikeSection}>
        <h2>YOU MAY ALSO LIKE</h2>
        
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <div className={styles.cardImage}>
              <img src="/images/NOT1_fireclay.png" alt="Not only Tea fire clay" />
            </div>
            <h3>Not only Tea fire clay</h3>
            <p className={styles.price}>HKD 2200</p>
            <p className={styles.category}>束口</p>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.cardImage}>
              <img src="/images/NOT2.png" alt="NOT 束口杯" />
            </div>
            <h3>NOT 束口杯</h3>
            <p className={styles.price}>HKD 2200</p>
            <p className={styles.category}>束口</p>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.cardImage}>
              <img src="/images/NOT3_greenshell.png" alt="NOT Green Shell" />
            </div>
            <h3>NOT Green Shell</h3>
            <p className={styles.price}>HKD 2200</p>
            <p className={styles.category}>束口</p>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.cardImage}>
              <img src="/images/NOT4_greyshell.png" alt="NOT Grey Shell" />
            </div>
            <h3>NOT Grey Shell</h3>
            <p className={styles.price}>HKD 2200</p>
            <p className={styles.category}>束口</p>
          </div>
        </div>
      </section>
      
      {/* Miracles Under Scope Section */}
      <section className={styles.miraclesSection}>
        <h2>Miracles<br />under the scope</h2>
        <div className={styles.scopeImage}>
          <img src="/images/jianzhang/0H3A7172.jpg" alt="Microscope view of Jian Zhan glaze" />
        </div>
      </section>
      
      {/* Master's Work Section */}
      <section className={styles.masterWorkSection}>
        <div className={styles.masterWorkContent}>
          <h2>The best of<br />master's work</h2>
          <button className={styles.exploreButton}>EXPLORE MORE</button>
        </div>
        <div className={styles.masterWorkImage}>
          <img src="/images/masterwork.jpg" alt="Master's work" />
        </div>
      </section>
    </main>
  );
}

