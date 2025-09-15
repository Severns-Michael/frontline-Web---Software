type CSSModule = Record<string, string>;

export default function Problems({ styles }: { styles: CSSModule }) {
  return (
    <section id="problems" className={`${styles.bandSoft} vh snap anchor`} aria-labelledby="problems-title">
      <div className="container">
        <h1 id="problems-title" className={`${styles.h1}`}>
          <span className={`${styles.h1} accent`}> Fix</span> the stuff that hurts
          <span className={`${styles.h1} accent`}> revenue</span>
        </h1>

        <p className={styles.sub}>
          Most small businesses lose customers to slow sites, clunky forms, and poor Google visibility. We can fix that.
        </p>

        <ul className={styles.miniProof} role="list">
          <li>Slow load times</li>
          <li>Hard to use on phones</li>
          <li>Low Google rankings</li>
          <li>DIY builders that break</li>
          <li>No clear analytics</li>
        </ul>
      </div>
    </section>
  );
}
