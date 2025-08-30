export type Lead = {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  source?: 'website' | 'referral' | 'ad'
  createdAt?: string
  projectType?: string
  budget?: string
  timeline?: string
}