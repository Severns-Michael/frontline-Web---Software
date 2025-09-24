import { SEO } from '../../components/SEO/SEO'
import { canonicalFor, webPageJsonLd } from '../../lib/seo'
import { Link } from 'react-router-dom'

export default function IdahoFalls() {
  return (
    <>
      <SEO
        title="Web Design in Idaho Falls, ID"
        description="Custom-coded websites for Idaho Falls small businesses. Fast, SEO-ready, and easy to maintain."
        canonical={canonicalFor('/locations/idaho-falls')}
        jsonLd={[
          webPageJsonLd({
            path: '/locations/idaho-falls',
            name: 'Web Design in Idaho Falls, ID',
            description:
              'Custom-coded websites for Idaho Falls small businesses. Fast, SEO-ready, and easy to maintain.'
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${canonicalFor('/locations/idaho-falls')}#service`,
            'serviceType': 'Web Design',
            'areaServed': {
              '@type': 'City',
              'name': 'Idaho Falls'
            },
            'provider': { '@id': 'https://frontlinewebsoftware.com/#identity' }
          }
        ]}
      />

      <main id="main" tabIndex={-1} className="container">
        <h1>Web Design in Idaho Falls, ID</h1>
        <p>
          We help Idaho Falls businesses launch fast, modern, and SEO-ready websites. Popular with trades,
          clinics, and local shops.
        </p>

        {/* Ideas to add: 1 short testimonial, 3 local industries, small map embed, CTA */}
        <p><Link className="button" to="/contact?city=idaho-falls">Get a free plan</Link></p>
      </main>
    </>
  )
}