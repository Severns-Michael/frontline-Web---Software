import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { SEO } from '../../components/SEO/SEO'


export default function Home() {
return (
<section className={styles.hero}>
<SEO title="Custom Web & Software" />
<div className="container">
<h1>Custom‑Coded Websites & Software for Small Businesses</h1>
<p className={styles.sub}>Launch fast with clean, scalable code — no page builders, no fluff.</p>
<div className={styles.ctaRow}>
<Link to="/contact" className="button">Get a Free Quote</Link>
<Link to="/portfolio">See Our Work</Link>
</div>
</div>
</section>
)
}