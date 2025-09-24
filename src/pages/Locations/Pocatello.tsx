import { SEO } from '../../components/SEO/SEO'
import { webPageJsonLd, breadcrumbJsonLd, localBusinessJsonLd, canonicalFor } from '../../lib/seo';
import { Link } from 'react-router-dom'

export default function Pocatello() {
  return (
    <>
      <SEO
  title="Web Design in Pocatello, ID"
  description="Custom-coded websites for Pocatello small businesses. Fast, SEO-ready, and easy to maintain."
  canonical={canonicalFor('/locations/pocatello')}
  jsonLd={[
    // Page descriptor
    webPageJsonLd({
      path: '/locations/pocatello',
      name: 'Web Design in Pocatello, ID',
      description:
        "Custom-coded websites for Pocatello's small businesses. Fast, SEO-ready, and easy to maintain.",
    }),

    // Breadcrumbs
    breadcrumbJsonLd([
      { name: 'Home', url: 'https://frontlinewebsoftware.com' },
      { name: 'Locations', url: 'https://frontlinewebsoftware.com/locations' },
      { name: 'Pocatello', url: 'https://frontlinewebsoftware.com/locations/pocatello' },
    ]),

    // Local business signal (include the city in areaServed)
    localBusinessJsonLd({
      areaServed: ['Pocatello', 'Idaho'],
      // optionally publish NAP here too if you want:
      // phone: '+14192616957',
      // street: '1500 E Venture Way',
      // city: 'Pocatello',
      // region: 'ID',
      // postal: '83201',
    }),

    // Specific service in this city (ties to your LocalBusiness via @id)
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalFor('/locations/pocatello')}#service`,
      serviceType: 'Web Design',
      areaServed: { '@type': 'City', name: 'Pocatello' },
      provider: { '@id': 'https://frontlinewebsoftware.com/#identity' },
    },
  ]}
/>

      <main id="main" tabIndex={-1} className="container">
        <h1>Web Design in Pocatello, ID</h1>
        <p>
          Pocatello businesses deserve websites that work as hard as they do. We build lean, custom-coded sites—no bloated themes—so pages load fast, rank better, and are simple to update. Accessibility and SEO come standard, along with analytics so you can see what’s working.

          We’re local and easy to reach. Most projects start with a quick intro, a short questionnaire, and a fixed-scope quote. From there it’s design → build → launch, usually in a few weeks.

          Industries we often help: local services, clinics, contractors, restaurants, retailers, and community orgs.

        </p>

        <p><Link className="button" to="/contact?city=pocatello">Start your project</Link></p>
      </main>
    </>
  )
}