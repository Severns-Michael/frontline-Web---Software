import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.cols}>
          {/* Brand */}
      

          {/* Services */}
          <nav className={styles.col}>
            <h4>Services</h4>
            <ul className={styles.links}>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">SaaS Platforms</Link></li>
              <li><Link to="/services">E-commerce</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav className={styles.col}>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <ul className={styles.links}>
              <li><a href="mailto:hello@devstudio.com">hello@devstudio.com</a></li>
              <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
              <li>123 Tech Street, SF</li>
            </ul>
          </div>
        </div>

        <div className={styles.hr} />

        <div className={styles.bottom}>
          <p>© {year} Frontline Web & Software 2025. All rights reserved.</p>
          <p className={styles.linksRow}>
            <Link to="/privacy">Privacy</Link><span>·</span><Link to="/terms">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}