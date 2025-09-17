import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)            
  const btnRef = useRef<HTMLButtonElement>(null)      

  
  useLayoutEffect(() => {  }, [])

  useEffect(() => { /* scrolled */ }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => { setOpen(false) }, [location.pathname])

  
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node
      if (navRef.current?.contains(t)) return
      if (btnRef.current?.contains(t)) return
      setOpen(false)
    }
    
    document.addEventListener('pointerdown', handler, { capture: true })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return () => document.removeEventListener('pointerdown', handler, { capture: true } as any)
  }, [open])

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className="container">
        <div className={styles.row}>
          <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
            Frontline Web &amp; Software
          </Link>

          <button
            ref={btnRef}                                        
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
            ref={navRef}                                        
            id="primary-nav"
            className={`${styles.nav} ${open ? styles.open : ''}`}
            aria-label="Primary"
            aria-hidden={open ? false : undefined}
          >
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/Faq">FAQs</NavLink>
            <NavLink to="/contact" className={styles.cta}>Contact</NavLink>
          </nav>

          
          <div
            className={`${styles.scrim} ${open ? styles.scrimShow : ''}`}
            aria-hidden
          />
        </div>
      </div>
    </header>
  )
}