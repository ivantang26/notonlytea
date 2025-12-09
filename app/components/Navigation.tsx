'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <img 
              src="/images/logo.png" 
              alt="Not Only Tea Hong Kong"
            />
          </Link>
        </div>
        <div className={styles.navBottom}>
          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileMenuToggle} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </button>
          
          <div className={styles.locationBadge}>
            <img src="/images/earth.png" alt="" width="16" height="16" />
            <span>Hong Kong SAR China</span>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/our-teas">Our Teas</Link></li>
            <li><Link href="/teawear">Teawear</Link></li>
            <li><Link href="/jian-zhan">Jian Zhan</Link></li>
            <li><Link href="/masters-work">Master&apos;s work</Link></li>
          </ul>
          <div className={styles.navIcons}>
            <button className={styles.iconButton} aria-label="Search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <button className={styles.iconButton} aria-label="Favorites">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className={styles.iconButton} aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <button 
          className={styles.closeButton} 
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <ul className={styles.mobileNavLinks}>
          <li><Link href="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link href="/our-teas" onClick={closeMobileMenu}>Our Teas</Link></li>
          <li><Link href="/teawear" onClick={closeMobileMenu}>Teawear</Link></li>
          <li><Link href="/jian-zhan" onClick={closeMobileMenu}>Jian Zhan</Link></li>
          <li><Link href="/masters-work" onClick={closeMobileMenu}>Master&apos;s work</Link></li>
        </ul>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
}

