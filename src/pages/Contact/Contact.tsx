import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadService } from '../../lib/leads.service'
import type { Lead } from '../../types/lead'
import { SEO } from '../../components/SEO/SEO'
import styles from './Contact.module.css'

const PROJECT_TYPES = ['Websites', 'Web Apps / Portals', 'E-commerce', 'Integrations & Automation'] as const

const Schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z
    .string()
    .min(1, 'Select a project type')
    .refine(v => (PROJECT_TYPES as readonly string[]).includes(v), { message: 'Select a project type' }),
  message: z.string().min(20, 'Tell us a bit more so we can help (min 20 chars)').max(1500)
})
type Form = z.infer<typeof Schema>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Form>({
    resolver: zodResolver(Schema), mode: 'onBlur'
  })

  async function onSubmit(values: Form) {
    setSent(false)
    const payload: Lead = { ...values, source: 'website' }
    await leadService.createLead(payload)
    reset()
    setSent(true)
  }

  return (
    <>
      <SEO title="Contact" description="Tell us about your project. Free consultation and a fast, detailed proposal." />

      {/* HERO */}
      <section className={`${styles.hero} snap anchor`}>
        <div className="container">
          <div className={styles.badgeRow}>
            <div className={styles.badge}>Veteran Owned and Operated</div>
            <div className={styles.badge}>Based in USA</div>
          </div>

          <h1 className={styles.h1}>Let’s Build Something <span className="accent">Great</span></h1>
          <p className={styles.sub}>
            Ready to start your project? Tell us a bit about it and we’ll reply quickly with next steps and a clear estimate.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className={`${styles.bodyBand} vh snap anchor`}>
        <div className="container">
          <div className={styles.grid}>
            {/* FORM CARD */}
            <article className={`card ${styles.formCard}`}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form} aria-labelledby="contact-title">
                <h2 id="contact-title" className={styles.h2}>Project inquiry</h2>
                <p className={styles.kicker}>Tell us about your project and we’ll reply quickly.</p>

                <div className={styles.twoCol}>
                  <div>
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" type="text" autoComplete="name" {...register('name')} aria-invalid={!!errors.name} />
                    {errors.name && <span role="alert">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" type="email" autoComplete="email" {...register('email')} aria-invalid={!!errors.email} />
                    {errors.email && <span role="alert">{errors.email.message}</span>}
                  </div>
                </div>

                <div className={styles.twoCol}>
                  <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" autoComplete="tel" {...register('phone')} />
                  </div>
                  <div>
                    <label htmlFor="company">Company Name</label>
                    <input id="company" type="text" autoComplete="organization" {...register('company')} />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType">Project Type *</label>
                  <select id="projectType" {...register('projectType')} aria-invalid={!!errors.projectType}>
                    <option value="">Select a project type</option>
                    {PROJECT_TYPES.map(pt => <option key={pt} value={pt}>{pt}</option>)}
                  </select>
                  {errors.projectType && <span role="alert">{errors.projectType.message}</span>}
                </div>

                <div>
                  <label htmlFor="message">Project Description *</label>
                  <textarea
                    id="message" rows={6} {...register('message')} aria-invalid={!!errors.message}
                    placeholder="Goals, requirements, pages/features, examples…"
                  />
                  {errors.message && <span role="alert">{errors.message.message}</span>}
                </div>

                <button className={`button ${styles.submit}`} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send Inquiry →'}
                </button>

                {sent && <p className={styles.success} aria-live="polite">Thanks! We’ll reply within one business day.</p>}
              </form>
            </article>

            {/* INFO COLUMN */}
            <aside className={styles.infoCol} aria-label="Contact information">
              <div className={`card ${styles.infoCard}`}>
                <h3>Contact</h3>
                <ul className={styles.contactList}>
                  <li>📧 <a href="mailto:frontline.web.and.software@gmail.com">frontline.web.and.software@gmail.com</a></li>
                  <li>📞 <a href="tel:+14192616857">(419) 261-6857</a></li>
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