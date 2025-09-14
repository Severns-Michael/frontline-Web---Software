import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedHeroProjects.module.css";

export type Slide = {
  title: string;
  kpi?: string;
  link: string;
  laptopSrc: string;
  phoneSrc: string;
  laptopAlt: string;
  phoneAlt: string;
};

const DEFAULT_SLIDES: Slide[] = [
  {
    title: "Local Barber — bookings that convert",
    kpi: "+40% appointments",
    link: "/portfolio/barber",
    laptopSrc: "/assets/portfolio/barber-laptop.webp",
    phoneSrc: "/assets/portfolio/barber-phone.webp",
    laptopAlt: "Barber site homepage on a laptop",
    phoneAlt: "Barber booking flow on a phone",
  },
  {
    title: "Café — online menu & orders",
    kpi: "+22% orders",
    link: "/portfolio/cafe",
    laptopSrc: "/assets/portfolio/cafe-laptop.webp",
    phoneSrc: "/assets/portfolio/cafe-phone.webp",
    laptopAlt: "Cafe menu and ordering on a laptop",
    phoneAlt: "Cafe checkout UI on a phone",
  },
  {
    title: "Contractor — lead generation",
    kpi: "3× local leads",
    link: "/portfolio/contractor",
    laptopSrc: "/assets/portfolio/contractor-laptop.webp",
    phoneSrc: "/assets/portfolio/contractor-phone.webp",
    laptopAlt: "Contractor services page on a laptop",
    phoneAlt: "Contractor contact form on a phone",
  },
];

function useAutoAdvance(length: number, delayMs = 4500) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const mq = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null,
    []
  );

  useEffect(() => {
    if (mq?.matches) return; // honor reduced motion
    const id = window.setInterval(() => {
      if (!pausedRef.current) setIndex((n) => (n + 1) % length);
    }, delayMs);
    return () => clearInterval(id);
  }, [length, delayMs, mq]);

  return {
    index,
    setIndex,
    pause: () => (pausedRef.current = true),
    resume: () => (pausedRef.current = false),
  };
}

export default function FeaturedHeroProjects({ slides = DEFAULT_SLIDES }: { slides?: Slide[] }) {
  const { index, setIndex, pause, resume } = useAutoAdvance(slides.length, 4500);

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
          {slides.map((s, n) => (
            <Link
              id={`slide-${n}`}
              key={s.title}
              to={s.link}
              className={`${styles.slide} ${n === index ? styles.active : ""}`}
              aria-roledescription="slide"
              aria-label={`${s.title}${s.kpi ? `, ${s.kpi}` : ""}`}
            >
              <img className={styles.screenLaptop} 
              src={s.laptopSrc} 
              alt={s.laptopAlt}
                   loading={n === 0 ? "eager" : "lazy"} 
                   decoding={n === 0 ? "sync" : "async"}
                   fetchPriority={n === 0 ? "high" : "low"}
                    width={1200} height={750}   
                   />
              <img className={styles.screenPhone} src={s.phoneSrc} alt={s.phoneAlt}
                   loading="lazy" decoding="async" />
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.carouselMetaBelow}>
        <div className={styles.dots} role="tablist" aria-label="Featured project selector">
          {slides.map((_, n) => (
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

        <Link to={slides[index].link} className={styles.caption} aria-label={`Open ${slides[index].title}`}>
          <span className={styles.captionTitle}>{slides[index].title}</span>
          {slides[index].kpi && <span className={styles.captionKpi}>{slides[index].kpi}</span>}
        </Link>
      </div>
    </div>
  );
}