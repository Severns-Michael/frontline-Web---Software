import { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO/SEO';
import styles from './Home.module.css';
import FeaturedHeroProjects from '../../components/FeaturedHeroProjects/FeaturedHeroProjects';
import firstLaptop400 from '../../assets/aboutPicture-400.webp';
import firstLaptop200 from '../../assets/aboutPicture-200.webp';
import React from 'react';
import { useRef } from 'react';

// Lazy imports for below-the-fold sections
const Problems = lazy(() => import('./sections/Problems'));
const Focus = lazy(() => import('./sections/Focus'));
const Process = lazy(() => import('./sections/Process'));
const Pricing = lazy(() => import('./sections/Pricing'));
const FinalCta = lazy(() => import('./sections/FinalCta'));

export default function Home() {
  const origin =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://frontline-web-software.netlify.app';

  // Mount sections after first paint to improve LCP

  function Defer({
  children,
  rootMargin = "600px",
}: {
  children: React.ReactNode;
  rootMargin?: string;
}) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{show ? children : null}</div>;
}

  return (
    <>
      <SEO
        title="Custom Web & Software"
        description="Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready."
        canonical={`${origin}/`}
        image={`${origin}/og.jpg`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Frontline Web & Software',
          url: origin,
          image: `${origin}/og.jpg`,
          telephone: '+1-208-555-1234',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Example St',
            addressLocality: 'Idaho Falls',
            addressRegion: 'ID',
            postalCode: '83401',
            addressCountry: 'US',
          },
          areaServed: ['Idaho Falls', 'Pocatello', 'Rexburg'],
          sameAs: [
            'https://www.facebook.com/yourpage',
            'https://www.linkedin.com/company/yourcompany',
          ],
        }}
        extraHead={
          <>
            {/* Preload the LCP image for the first slide */}
            <link
              rel="preload"
              as="image"
              href={firstLaptop400}
              imageSrcSet={`${firstLaptop200} 200w, ${firstLaptop400} 400w`}
              imageSizes="(max-width: 600px) 90vw, 720px"
            />

            {/* Small critical CSS to paint hero quickly */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  .${styles.hero}{padding:6rem 0 3rem;background:linear-gradient(180deg,#0b0d12,#121621)}
                  .${styles.heroGrid}{display:grid;grid-template-columns:1.1fr 1.2fr;gap:2rem;align-items:center}
                  .${styles.heroCopy} h1{margin:0 0 .5rem}
                  .${styles.heroVisual}{display:flex;justify-content:center}
                  .deviceCarousel{position:relative;aspect-ratio:16/10;filter:drop-shadow(0 24px 48px rgba(0,0,0,.35))}
                  .slides{position:absolute;inset:0}
                  .slide{position:absolute;inset:0;opacity:0;transition:opacity .45s ease}
                  .active{opacity:1}
                  .screenLaptop{position:absolute;inset:6% 6% 18% 6%;border-radius:12px;object-fit:cover}
                  .screenPhone{position:absolute;right:-3.5%;bottom:-5%;width:36%;height:60%;border-radius:18px;box-shadow:0 10px 24px rgba(0,0,0,.35)}
                `,
              }}
            />

            {/* Preconnects for analytics (optional) */}
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
          </>
        }
      />

      <main className={'snapContainer'}>
        {/* HERO */}
        <section id="hero" className={`${styles.hero} vh snap anchor`}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.badgeRow}>
                  <ul className={styles.miniProof} role="list">
                    <li>Veteran owned & operated</li>
                    <li>Based in USA</li>
                  </ul>
                </div>

                <h1>Custom-Coded Websites & Software for </h1>
                <h1 className={`accent`}> Small Businesses</h1>
                <p className={styles.sub}>
                  Transform your business with a custom website and lightweight web app.
                  Performance, accessibility, and SEO built in — no page builders, no bloat.
                </p>
                <div className={styles.ctaRow}>
                  <Link to="/contact" className="button">Start Your Project</Link>
                  <Link to="/portfolio" className={styles.secondaryCta}>View Our Work</Link>
                </div>
              </div>

              {/* Visual */}
              <div className={styles.heroVisual}>
                <FeaturedHeroProjects />
              </div>
            </div>
          </div>
        </section>

        {/* Below-the-fold (lazy) */}
          <Suspense fallback={null}>
          <Defer><Problems styles={styles} /></Defer>
          <Defer><Focus styles={styles} /></Defer>
          <Defer><Process styles={styles} /></Defer>
          <Defer><Pricing styles={styles} /></Defer>
          <Defer><FinalCta styles={styles} /></Defer>
        </Suspense>
    
      </main>
    </>
  );
}
