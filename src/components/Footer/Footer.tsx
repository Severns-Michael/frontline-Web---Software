import styles from './Footer.module.css'


export function Footer() {
const year = new Date().getFullYear()
return (
<footer className={styles.footer}>
<div className="container">
<div className={styles.row}>
<p>© {year} MS Labs Web Solutions. All rights reserved.</p>
<p><a href="/">Privacy</a> · <a href="/">Terms</a></p>
</div>
</div>
</footer>
)
}