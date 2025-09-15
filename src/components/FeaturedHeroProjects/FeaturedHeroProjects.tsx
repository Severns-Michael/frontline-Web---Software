import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedHeroProjects.module.css";
import aboutPicture200w from '../../assets/aboutPicture-200.webp';
import aboutPicture400w from '../../assets/aboutPicture-400.webp';

export type Slide = {
  title: string;
  kpi?: string;
  link: string;

  laptopSrc: string;
  laptopSrcSet?: string;   // NEW (optional)
  laptopSizes?: string;    // NEW (optional)

  phoneSrc: string;
  phoneSrcSet?: string;    // NEW (optional)
  phoneSizes?: string;     // NEW (optional)

  laptopAlt: string;
  phoneAlt: string;

  laptopWidth?: number;    // optional intrinsic sizes (prevents CLS)
  laptopHeight?: number;
  phoneWidth?: number;
  phoneHeight?: number;
};

  const DEFAULT_SLIDES: Slide[] = [
  {
    title: "Local Barber — bookings that convert",
    kpi: "+40% appointments",
    link: "/portfolio/barber",

    laptopSrc: aboutPicture400w,
    laptopSrcSet: `${aboutPicture200w} 200w, ${aboutPicture400w} 400w`,
    laptopSizes: "(max-width: 600px) 90vw, 720px",
    laptopAlt: "Barber site homepage on a laptop",
    laptopWidth: 400,
    laptopHeight: 250, // pick the right ratio for your image

    phoneSrc: aboutPicture400w,
    phoneSrcSet: `${aboutPicture200w} 200w, ${aboutPicture400w} 400w`,
    phoneSizes: "(max-width: 600px) 45vw, 260px",
    phoneAlt: "Barber booking flow on a phone",
    phoneWidth: 200,
    phoneHeight: 300
  },
  {
    title: "Café — online menu & orders",
    kpi: "+22% orders",
    link: "/portfolio/cafe",

    laptopSrc: aboutPicture400w,
    laptopSrcSet: `${aboutPicture200w} 200w, ${aboutPicture400w} 400w`,
    laptopSizes: "(max-width: 600px) 90vw, 720px",
    laptopAlt: "Cafe menu and ordering on a laptop",
    laptopWidth: 400,
    laptopHeight: 250,

    phoneSrc: aboutPicture400w,
    phoneSrcSet: `${aboutPicture200w} 200w, ${aboutPicture400w} 400w`,
    phoneSizes: "(max-width: 600px) 45vw, 260px",
    phoneAlt: "Cafe checkout UI on a phone",
    phoneWidth: 200,
    phoneHeight: 300
  },
  {
    title: "Contractor — lead generation",
    kpi: "3× local leads",
    link: "/portfolio/contractor",

    laptopSrc: aboutPicture400w,
    laptopSrcSet: `${aboutPicture200w} 200w, ${aboutPicture400w} 400w`,
    laptopSizes: "(max-width: 600px) 90vw, 720px",
    laptopAlt: "Contractor services page on a laptop",
    laptopWidth: 400,
    laptopHeight: 250,

    phoneSrc: aboutPicture400w,
    phoneSrcSet: `${aboutPicture200w} 200w, ${aboutPicture400w} 400w`,
    phoneSizes: "(max-width: 600px) 45vw, 260px",
    phoneAlt: "Contractor contact form on a phone",
    phoneWidth: 200,
    phoneHeight: 300
  }
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
{slides.map((s, n) => {
  const isFirst = n === 0;
  return (
    <Link
      id={`slide-${n}`}
      key={s.title}
      to={s.link}
      className={`${styles.slide} ${n === index ? styles.active : ""}`}
      aria-roledescription="slide"
      aria-label={`${s.title}${s.kpi ? `, ${s.kpi}` : ""}`}
    >
      <img
        className={styles.screenLaptop}
        src={s.laptopSrc}
        srcSet={s.laptopSrcSet}
        sizes={s.laptopSizes}
        alt={s.laptopAlt}
        loading={isFirst ? "eager" : "lazy"}
        decoding={isFirst ? "sync" : "async"}
        fetchPriority={isFirst ? "high" : "low"}
        width={s.laptopWidth ?? 1200}
        height={s.laptopHeight ?? 750}
      />
      <img
        className={styles.screenPhone}
        src={s.phoneSrc}
        srcSet={s.phoneSrcSet}
        sizes={s.phoneSizes}
        alt={s.phoneAlt}
        loading="lazy"
        decoding="async"
        width={s.phoneWidth}
        height={s.phoneHeight}
      />
    </Link>
  );
})}
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