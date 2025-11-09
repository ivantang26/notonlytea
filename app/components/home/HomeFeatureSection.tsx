'use client';

import styles from './HomeFeatureSection.module.css';

const products = [
  {
    name: 'Not only Tea fire clay',
    price: 'HKD 2200',
    image: '/images/NOT1_fireclay.png',
    variant: 'deep',
  },
  {
    name: 'NOT 東口杯',
    price: 'HKD 2200',
    image: '/images/NOT2.png',
    variant: 'shallow',
  },
  {
    name: 'NOT Green Shell',
    price: 'HKD 2200',
    image: '/images/NOT3_greenshell.png',
    variant: 'deep',
  },
  {
    name: 'NOT Grey Shell',
    price: 'HKD 2200',
    image: '/images/NOT4_greyshell.png',
    variant: 'shallow',
  },
];

export default function HomeFeatureSection() {
  return (
    <section className={styles.section} id="masters">
      <div className={styles.background}>
        <img src="/images/DSC_7373.JPG" alt="Authentic Jian Zhan glaze" />
      </div>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Our Authentic Jiang Zhang
        </h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div
              className={`${styles.productCard} ${styles[product.variant]}`}
              key={product.name}
            >
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productMeta}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

