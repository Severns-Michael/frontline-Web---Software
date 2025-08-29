//import { api } from './api'
import type { Lead } from '../types/lead'


export interface LeadService {
createLead(payload: Lead): Promise<Lead>
}


// class HttpLeadService implements LeadService {
// async createLead(payload: Lead): Promise<Lead> {
// const { data } = await api.post<Lead>('/api/leads', payload)
// return data
// }
// }


class LocalStorageLeadService implements LeadService {
async createLead(payload: Lead): Promise<Lead> {
const key = 'leads'
const list: Lead[] = JSON.parse(localStorage.getItem(key) || '[]')
const lead = { ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() }
list.push(lead)
localStorage.setItem(key, JSON.stringify(list))
return lead
}
}


// Swap this to `new HttpLeadService()` as soon as the backend is live.
export const leadService: LeadService = new LocalStorageLeadService()