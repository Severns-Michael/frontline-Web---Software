import { useState } from 'react'
import * as RHF from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadService } from '../../lib/leads.service'
import type { Lead } from '../../types/lead'
import { SEO } from '../../components/SEO/SEO'
import styles from './Contact.module.css'

const LeadSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more so we can help').max(1000)
})

type LeadForm = z.infer<typeof LeadSchema>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = RHF.useForm<LeadForm>({
    resolver: zodResolver(LeadSchema),
    mode: 'onBlur'
  })

  async function onSubmit(values: LeadForm) {
    setSent(false)
    try {
      const payload: Lead = { ...values, source: 'website' }
      await leadService.createLead(payload)
      reset()
      setSent(true)
    } catch (err) {
      console.error(err)
      alert('Something went wrong sending your message. Please try again.')
    }
  }

  return (
    <section className={styles.wrap}>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>Tell us about your project. We’ll reply within one business day.</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <span id="name-error" role="alert">{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <span id="email-error" role="alert">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone <small>(optional)</small></label>
          <input id="phone" type="tel" autoComplete="tel" {...register('phone')} />
        </div>

        <div>
          <label htmlFor="company">Company <small>(optional)</small></label>
          <input id="company" type="text" autoComplete="organization" {...register('company')} />
        </div>

        <div>
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <span id="message-error" role="alert">{errors.message.message}</span>}
        </div>

        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>

        {sent && <p className={styles.success} aria-live="polite">Message sent ✓</p>}
      </form>
    </section>
  )
}