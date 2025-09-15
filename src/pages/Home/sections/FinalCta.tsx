type CSSModule = Record<string, string>;
type LinkComponent = React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;

export default function FinalCta({ styles, Link }: { styles: CSSModule; Link: LinkComponent }) {
  return (
    <section id="cta" className={`${styles.finalCta}`}>
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
