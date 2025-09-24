import { SEO } from '../../components/SEO/SEO'
import { canonicalFor, webPageJsonLd } from '../../lib/seo'
import { Link } from 'react-router-dom'

export default function Pocatello() {
  return (
    <>
      <SEO
        title="Web Design in Pocatello, ID"
        description="Custom-coded websites for Pocatello small businesses. Fast, SEO-ready, and easy to maintain."
        canonical={canonicalFor('/locations/pocatello')}
        jsonLd={[
          webPageJsonLd({
            path: '/locations/pocatello',
            name: 'Web Design in Pocatello, ID',
            description:
              "Custom-coded websites for Pocatello's small businesses. Fast, SEO-ready, and easy to maintain."
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${canonicalFor('/locations/pocatello')}#service`,
            'serviceType': 'Web Design',
            'areaServed': {
              '@type': 'City',
              'name': 'Pocatello'
            },
            'provider': { '@id': 'https://frontlinewebsoftware.com/#identity' }
          }
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