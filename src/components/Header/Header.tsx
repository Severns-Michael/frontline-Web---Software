import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)

  // Keep --header-h accurate
  useLayoutEffect(() => {
    const setVar = () => {
      const h = headerRef.current?.offsetHeight ?? 64
      document.documentElement.style.setProperty('--header-h', `${h}px`)
    }
    setVar()
    window.addEventListener('resize', setVar)
    return () => window.removeEventListener('resize', setVar)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <a href="#main" className={styles.skip}>Skip to content</a>
      <div className="container">
        <div className={styles.row}>
          <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
            Frontline Web &amp; Software
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen(v => !v)}
          >
            <span className={styles.menuIcon} />
            <span className={styles.srOnly}>Menu</span>
          </button>

          <nav
            id="primary-nav"
            className={`${styles.nav} ${open ? styles.open : ''}`}
            aria-label="Primary"
            aria-hidden={open ? false : undefined}
          >
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact" className={styles.cta}>Contact</NavLink>
          </nav>

          <div
            className={`${styles.scrim} ${open ? styles.scrimShow : ''}`}
            onClick={() => setOpen(false)}
            aria-hidden
          />
        </div>
      </div>
    </header>
  )
}