import { SEO } from '../../components/SEO/SEO'
import styles from './Contact.module.css'

const PROJECT_TYPES = ['Websites', 'Web Apps / Portals', 'E-commerce', 'Integrations & Automation'] as const

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Tell us about your project. Free consultation and a fast, detailed proposal." />

      {/* HERO (copy + left form + right info cards) */}
      <section className={`${styles.hero} snap anchor`}>
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Copy */}
            <div className={`${styles.heroCopy} ${styles.areaCopy}`}>
              <div className="badgeRow center-row">
                <ul className="miniProof center-row" role="list">
                  <li>Veteran owned &amp; operated</li>
                  <li>Based in USA</li>
                  <li>No Page builders or templates</li>
                </ul>
              </div>

              <h1 className={styles.h1}>
                Let’s Build Something <span className="accent">Great</span>
              </h1>
              <p className={styles.sub}>
                Ready to start your project? Tell us a bit about it and we’ll reply quickly with next steps and a clear estimate.
              </p>
            </div>

            {/* FORM — Netlify Forms */}
            <article className={`card ${styles.formCardHero} ${styles.areaForm}`}>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you"
                className={styles.form}
                aria-labelledby="contact-title"
                onSubmitCapture={() => {
                  // fire GA without blocking submit
                  window.gtag?.('event', 'generate_lead', { form: 'contact' })
                }}
              >
                {/* Required hidden input (Netlify form name) */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Redirect (optional; action also works) */}
                {/* <input type="hidden" name="redirect" value="/thank-you" /> */}

                {/* Honeypot (hidden) */}
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <h2 id="contact-title" className={styles.h2}>Project inquiry</h2>
                <p className={styles.kicker}>Tell us about your project and we’ll reply quickly.</p>

                <div className={styles.twoCol}>
                  <div>
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                </div>

                <div className={styles.twoCol}>
                  <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                  <div>
                    <label htmlFor="company">Company Name</label>
                    <input id="company" name="company" type="text" autoComplete="organization" />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType">Project Type *</label>
                  <select id="projectType" name="projectType" required defaultValue="">
                    <option value="" disabled>Select a project type</option>
                    {PROJECT_TYPES.map(pt => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    minLength={20}
                    maxLength={1500}
                    placeholder="Goals, requirements, pages/features, examples…"
                  />
                </div>

                {/* If you enable reCAPTCHA in Netlify, uncomment: */}
                {/* <div data-netlify-recaptcha="true"></div> */}

                <button className={`button ${styles.submit}`} type="submit">Send Inquiry →</button>
              </form>
            </article>

            {/* Info cards (right) */}
            <aside className={`${styles.infoColHero} ${styles.areaInfo}`} aria-label="Contact information">
              <div className={`card ${styles.infoCard}`}>
                <h3>Contact</h3>
                <ul className={styles.contactList}>
                  <li>📧 <a href="mailto:frontline.web.and.software@gmail.com"
                         onClick={() => window.gtag?.('event', 'click_email', { location: 'contact_hero' })}>
                         frontline.web.and.software@gmail.com
                      </a></li>
                  <li>📞 <a href="tel:+1419261685"
                         onClick={() => window.gtag?.('event', 'click_call', { location: 'contact_hero' })}>
                         (419) 261-6857
                      </a></li>
                  <li>📍 Based in Pocatello, ID</li>
                </ul>
              </div>

              <div className={`card ${styles.noteBlue}`}>
                <h3>Quick response</h3>
                <p>We typically respond within 24 hours and can schedule a consultation within 48 hours.</p>
              </div>

              <div className={`card ${styles.noteGreen}`}>
                <h3>Free consultation</h3>
                <p>Every project starts with a free call where we discuss goals and share honest recommendations.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}