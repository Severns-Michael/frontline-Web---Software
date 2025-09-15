import { Link } from 'react-router-dom';

type CSSModule = Record<string, string>;

export default function FinalCta({ styles }: { styles: CSSModule }) {
  return (
    <section id="cta" className={styles.finalCta}>
      <div className="container">
        <div className={styles.finalCard}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Join successful businesses who’ve accelerated their growth with our solutions.</p>
          <div className={styles.ctaRow}>
            <Link to="/contact" className="button">Start Your Project Today</Link>
            <Link to="/services" className={styles.secondaryCta}>Learn More About Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}