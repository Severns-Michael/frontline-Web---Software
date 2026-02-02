import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* Top grid */}
        <div className={styles.top}>
          {/* Brand + contact */}
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <div className={styles.logo}>F</div>
              <span className={styles.brandName}>Frontline Web &amp; Software</span>
            </div>

            <ul className={styles.contactList} role="list">
              <li>
                <a href="mailto:frontline.web.and.software@gmail.com">
                  frontline.web.and.software@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+14192616957">+1 (419) 261-6957</a>
              </li>
              <li>Based in Pocatello, ID</li>
            </ul>
          </div>

          {/* Site nav */}
          <nav aria-labelledby="site-nav-title" className={styles.navCol}>
            <h3 id="site-nav-title" className={styles.colTitle}>Site</h3>
            <ul className={styles.list} role="list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Areas we serve */}
          <nav aria-labelledby="areas-title" className={styles.navCol}>
            <h3 id="areas-title" className={styles.colTitle}>Areas we serve</h3>
            <ul className={styles.list} role="list">
              <li><Link to="/locations/pocatello">Pocatello, ID</Link></li>
              <li><Link to="/locations/idaho-falls">Idaho Falls, ID</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Frontline Web &amp; Software</p>
        </div>
      </div>
    </footer>
  );
}