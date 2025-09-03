import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadService } from '../../lib/leads.service'
import type { Lead } from '../../types/lead'
import { SEO } from '../../components/SEO/SEO'
import styles from './Contact.module.css'

const PROJECT_TYPES = ['Websites', 'Web Apps / Portals', 'E-commerce', 'Integrations & Automation'] as const
const BUDGETS       = ['$2k–$5k', '$5k–$10k', '$10k–$25k', '$25k+'] as const
const TIMELINES     = ['2–4 weeks', '4–8 weeks', '8–12 weeks', '12+ weeks'] as const


const Schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
projectType: z
  .string()
  .min(1, 'Select a project type')
  .refine(v => (PROJECT_TYPES as readonly string[]).includes(v), { message: 'Select a project type' }),

budget: z
  .string()
  .min(1, 'Select a budget')
  .refine(v => (BUDGETS as readonly string[]).includes(v), { message: 'Select a budget' }),

timeline: z
  .string()
  .min(1, 'Select a timeline')
  .refine(v => (TIMELINES as readonly string[]).includes(v), { message: 'Select a timeline' }),
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
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.badge}>Get In Touch</div>
          <h1>Let’s Build Something <span className={styles.accent}>Amazing</span> Together</h1>
          <p className={styles.sub}>
            Ready to start your project? Tell us about your vision and we’ll provide a free consultation
            and a detailed project proposal.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className={styles.bodyBand}>
        <div className="container">
          <div className={styles.grid}>
            {/* FORM CARD */}
            <article className={`card ${styles.formCard}`}>
              <header>
                <h2 className={styles.h2}>Project Inquiry Form</h2>
                <p className={styles.kicker}>Tell us about your project and we’ll provide a free consultation.</p>
              </header>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
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

                <div className={styles.twoCol}>
                  <div>
                    <label htmlFor="projectType">Project Type *</label>
                    <select id="projectType" {...register('projectType')} aria-invalid={!!errors.projectType}>
                      <option value="">Select your project type</option>
                      {PROJECT_TYPES.map(pt => <option key={pt} value={pt}>{pt}</option>)}
                    </select>
                    {errors.projectType && <span role="alert">{errors.projectType.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="budget">Project Budget *</label>
                    <select id="budget" {...register('budget')} aria-invalid={!!errors.budget}>
                      <option value="">Select your budget range</option>
                      {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    {errors.budget && <span role="alert">{errors.budget.message}</span>}
                  </div>
                </div>

                <div className={styles.singleCol}>
                  <div>
                    <label htmlFor="timeline">Timeline *</label>
                    <select id="timeline" {...register('timeline')} aria-invalid={!!errors.timeline}>
                      <option value="">When do you need this?</option>
                      {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.timeline && <span role="alert">{errors.timeline.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message">Project Description *</label>
                  <textarea id="message" rows={6} {...register('message')} aria-invalid={!!errors.message}
                    placeholder="Tell us about your goals, requirements, and any specific features you need..." />
                  {errors.message && <span role="alert">{errors.message.message}</span>}
                </div>

                <button className={styles.submit} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send Inquiry  →'}
                </button>

                {sent && <p className={styles.success} aria-live="polite">Thanks! We’ll reply within one business day.</p>}
              </form>
            </article>

            {/* INFO COLUMN */}
            <aside className={styles.infoCol} aria-label="Contact information">
              <div className={`card ${styles.infoCard}`}>
                <h3>Get In Touch</h3>
                <ul className={styles.contactList}>
                  <li>📧 <a href="mailto:frontline.web.and.software@gmail.com">frontline.web.and.software@gmail.com</a></li>
                  <li>📞 <a href="tel:+4192616857">(419) 261-6857</a></li>
                  <li>📍 Based in Pocatello, ID</li>
                </ul>
              </div>

              <div className={`card ${styles.noteBlue}`}>
                <h3>Quick Response</h3>
                <p>We typically respond within 24 hours and can schedule a consultation call within 48 hours.</p>
              </div>

              <div className={`card ${styles.noteGreen}`}>
                <h3>Free Consultation</h3>
                <p>Every project starts with a free consultation where we discuss goals and provide honest recommendations.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}