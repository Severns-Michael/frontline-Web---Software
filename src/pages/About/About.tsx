import { SEO } from '../../components/SEO/SEO'
import styles from './About.module.css'


export default function About() {
return (
<section className={styles.wrap}>
<SEO title="About" />
<h1>About Us</h1>
<p>We craft performant, accessible websites and lightweight software tailored to small businesses. No bloat, just results.</p>
</section>
)
}