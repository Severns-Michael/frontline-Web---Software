import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.cols}>
          {/* Brand */}

          {/* Company */}
          <nav className={styles.col}>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/Services">Services & Pricing</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/FAQ">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <ul className={styles.links}>
              <li><a href="mailto:hello@devstudio.com"> put email</a></li>
              <li><a href="tel:+$4192616857">(419) 261-6857</a></li>
              <li>Pocatello, ID</li>
            </ul>
          </div>
        </div>

        <div className={styles.hr} />

        <div className={styles.bottom}>
          <p>© {year} DevStudio. All rights reserved.</p>
          <p className={styles.linksRow}>
            <Link to="/privacy">Privacy</Link><span>·</span><Link to="/terms">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}