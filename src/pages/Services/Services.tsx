import { SEO } from '../../components/SEO/SEO'
import styles from './Services.module.css'


export default function Services() {
return (
<section className={styles.wrap}>
<SEO title="Services" />
<h1>Services</h1>
<ul className={styles.grid}>
<li className="card"><h3>Custom Websites</h3><p>Hand‑coded marketing sites, landing pages, and blogs.</p></li>
<li className="card"><h3>Web Apps</h3><p>Dashboards, portals, and internal tools for your workflows.</p></li>
<li className="card"><h3>SEO & Performance</h3><p>Core Web Vitals, schema, and technical SEO.</p></li>
</ul>
</section>
)
}