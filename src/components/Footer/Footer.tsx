import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          {/* Left: Brand */}
          <div className={styles.left}>
            <Link to="/" className={styles.brand}>
              <span className={styles.logo}>F</span>
              <span className={styles.brandName}>Frontline Web & Software</span>
            </Link>
            <span className={styles.copy} aria-hidden="true">·</span>
            <span className={styles.copy}>© {year}</span>
          </div>

          {/* Center: Minimal nav */}
          <nav className={styles.center} aria-label="Footer">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Right: Quick contact */}
          <div className={'${styles.right} accent'}>
            <a
              href="mailto:frontline.web.and.software@gmail.com"
              className={styles.link}
            >
              Email
            </a>
            <span className={styles.dot} aria-hidden="true">•</span>
            <a
              href="tel:+14192616857"
              className={styles.link}
            >
              (419) 261-6857
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}