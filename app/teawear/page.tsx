'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from './Teawear.module.css';

// Products data
const teapotProducts = [
  {
    id: 1,
    name: 'Not only Tea fire clay',
    price: 'HKD 2200',
    image: '/images/teapots/white d 01 1.png',
  },
  {
    id: 2,
    name: 'NOT 束口杯',
    price: 'HKD 2200',
    image: '/images/teapots/DSC_8827-.png',
  },
  {
    id: 3,
    name: 'NOT Green Shell',
    price: 'HKD 2200',
    image: '/images/teapots/DSC_8839.png',
  },
  {
    id: 4,
    name: 'NOT Grey Shell',
    price: 'HKD 2200',
    image: '/images/teapots/DSC_8835.png',
  },
  {
    id: 5,
    name: 'NOT fire clay',
    price: 'HKD 2200',
    image: '/images/teapots/DSC_8836.png',
  },
];

export default function TeawearPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src="/images/teapots/dragonf1.png" alt="Chinese Tea Pot" />
        </div>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Chinese Tea Port
          </h1>
          
          <div className={styles.heroButtons}>
            <button className={styles.outlineButton}>
              About the masters
            </button>
            <button className={styles.primaryButton}>
              <img src="/images/teapot.png" alt="" width="20" height="20" />
              Explore products
            </button>
          </div>
        </div>
      </section>
      
      {/* Products Grid Section */}
      <section className={styles.productsSection}>
        <div className={styles.productsScrollContainer}>
          {teapotProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/teapots/white-Photoroom (7).jpg';
                  }}
                />
              </div>
              <div className={styles.productCardInfo}>
                <p className={styles.productCardName}>{product.name}</p>
                <p className={styles.productCardPrice}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Product Section */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredImage}>
          <img src="/images/teapots/DSC_8827-.png" alt="NOTeapot" />
        </div>
        
        <div className={styles.featuredContent}>
          <div className={styles.featuredProductInfo}>
            <h2 className={styles.featuredProductTitle}>NOTeapot</h2>
            <p className={styles.featuredProductDescription}>
              Discover the artistry of our handmade tea pots, crafted by master artisans whose work is celebrated in museums.
            </p>
            
            <div className={styles.featuredAttributes}>
              <div className={styles.featuredAttribute}>
                <p className={styles.featuredAttributeLabel}>Taste</p>
                <p className={styles.featuredAttributeValue}>Smoky Soft</p>
              </div>
              <div className={styles.featuredAttribute}>
                <p className={styles.featuredAttributeLabel}>Aroma</p>
                <p className={styles.featuredAttributeValue}>Smoky Soft</p>
              </div>
              <div className={styles.featuredAttribute}>
                <p className={styles.featuredAttributeLabel}>Mouthfeel</p>
                <p className={styles.featuredAttributeValue}>Smoky Soft</p>
              </div>
            </div>
            
            <div className={styles.featuredActions}>
              <button className={styles.buyNowButton}>BUY NOW</button>
              <button className={styles.contactButton}>CONTACT US</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Master's Work Section */}
      <section className={styles.mastersWorkSection}>
        <div className={styles.mastersWorkBackground}>
          <img src="/images/masterwork.jpg" alt="Master's Work" />
        </div>
        <div className={styles.mastersWorkOverlay}></div>
        
        <div className={styles.mastersWorkContent}>
          <h2 className={styles.mastersWorkTitle}>
            The best of<br />
            master's work
          </h2>
          <Link href="/masters-work">
            <button className={styles.exploreButton}>EXPLORE MORE</button>
          </Link>
        </div>
      </section>
      
    </main>
  );
}

