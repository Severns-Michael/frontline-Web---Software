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
          We build clean, fast websites for Pocatello businesses—focused on results, not bloat.
        </p>

        <p><Link className="button" to="/contact?city=pocatello">Start your project</Link></p>
      </main>
    </>
  )
}