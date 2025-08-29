import { SEO } from '../../components/SEO/SEO'
import styles from './Portfolio.module.css'


export default function Portfolio() {
return (
<section className={styles.wrap}>
<SEO title="Portfolio" />
<h1>Portfolio</h1>
<p>Case studies coming soon. Meanwhile, here are representative project types we deliver.</p>
<div className={styles.grid}>
<article className="card"><h3>Restaurant Site</h3><p>Menu + online ordering + SEO.</p></article>
<article className="card"><h3>Contractor Site</h3><p>Lead forms + photo gallery + reviews.</p></article>
<article className="card"><h3>SaaS Landing</h3><p>Conversion‑focused hero + pricing + blog.</p></article>
</div>
</section>
)
}