type CSSModule = Record<string, string>;
type LinkComponent = React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;
export default function Process({ styles, Link }: { styles: CSSModule; Link: LinkComponent }) {
  return (
    <section id="process" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className={styles.h1}>
          A Simple, <span className={`${styles.h1} accent`}>No-Stress</span> Process
        </h2>
        <div className={styles.processGrid}>
          <article className="card">
            <h2 className="accent">Plan</h2>
            <p className={styles.lead}>
              Intro call to learn your goals, pages, and must-haves. We ensure a fixed scope and timeline so there are no surprises.
            </p>
          </article>
          <article className="card">
            <h2 className="accent">Build</h2>
            <p className={styles.lead}>
              Design & development in weekly check-ins. You&quot;ll see progress as we go and can give feedback early.
            </p>
          </article>
          <article className="card">
            <h2 className="accent">Launch & grow</h2>
            <p className={styles.lead}>
              Performance tuned, SEO active, and tracked with analytics. We iterate post-launch to keep results climbing.
            </p>
          </article>
        </div>
        <div className={styles.sectionFoot}>
          <Link to="/contact" className="button">Get a 15-minute intro call</Link>
        </div>
      </div>
    </section>
  );
}
