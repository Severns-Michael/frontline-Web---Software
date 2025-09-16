import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedHeroProjects.module.css";

type Slide = {
  title: string;
  kpi?: string;
  link: string;
  comingSoon: true;   // for now, all slides are “coming soon”
};

const SLIDES: Slide[] = [
  { title: "Local Barber — bookings that convert", kpi: "+40% appointments", link: "/portfolio/barber", comingSoon: true },
  { title: "Café — online menu & orders",          kpi: "+22% orders",       link: "/portfolio/cafe",   comingSoon: true },
  { title: "Contractor — lead generation",         kpi: "3× local leads",     link: "/portfolio/contractor", comingSoon: true },
];

function useAutoAdvance(length: number, delayMs = 5500) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(true);
  const mq = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null),
    []
  );

  // let first paint/LCP settle before starting
  useEffect(() => {
    const resume = () => (pausedRef.current = false);
    const t = window.setTimeout(resume, 6000);
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(resume, { timeout: 3000 });
    }
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (mq?.matches) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) setIndex(n => (n + 1) % length);
    }, delayMs);
    return () => clearInterval(id);
  }, [length, delayMs, mq]);

  return { index, setIndex, pause: () => (pausedRef.current = true), resume: () => (pausedRef.current = false) };
}

export default function FeaturedHeroProjects() {
  const { index, setIndex, pause, resume } = useAutoAdvance(SLIDES.length, 5500);

  return (
    <div className={styles.widget}>
      <div
        className={styles.deviceCarousel}
        onMouseEnter={pause}
        onMouseLeave={resume}
        aria-roledescription="carousel"
        aria-label="Featured projects"
      >
        <div className={styles.slides}>
          {SLIDES.map((s, n) => (
            <Link
              id={`slide-${n}`}
              key={s.title}
              to={s.link}
              className={`${styles.slide} ${n === index ? styles.active : ""}`}
              aria-roledescription="slide"
              aria-label={`${s.title}${s.kpi ? `, ${s.kpi}` : ""}`}
            >
              {/* Placeholder “device” blocks (no <img> = no alt text showing) */}
              <div className={`${styles.screenLaptop} ${styles.skeleton}`} aria-hidden="true" />
              <div className={`${styles.screenPhone} ${styles.skeleton}`} aria-hidden="true" />
              <div className={styles.badge} aria-hidden="true">COMING SOON</div>
            </Link>
          ))}
        </div>
      </div>

      {/* dots only */}
      <div className={styles.carouselMetaBelow}>
        <div className={styles.dots} role="tablist" aria-label="Featured project selector">
          {SLIDES.map((_, n) => (
            <button
              key={n}
              role="tab"
              aria-selected={n === index}
              aria-controls={`slide-${n}`}
              className={`${styles.dot} ${n === index ? styles.dotActive : ""}`}
              onClick={() => setIndex(n)}
              title={`Show slide ${n + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}