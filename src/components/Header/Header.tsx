import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'


export function Header() {
return (
<header className={styles.header}>
<div className="container">
<div className={styles.row}>
<Link to="/" className={styles.logo} aria-label="Frontline Web & Software home">Frontline Web & Software</Link>
<nav aria-label="Primary">
<ul className={styles.nav}>
<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/services">Services</NavLink></li>
<li><NavLink to="/portfolio">Portfolio</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</nav>
</div>
</div>
</header>
)
}