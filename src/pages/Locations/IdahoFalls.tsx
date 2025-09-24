import { SEO } from '../../components/SEO/SEO'
import { webPageJsonLd, breadcrumbJsonLd, localBusinessJsonLd, canonicalFor } from '../../lib/seo';
import { Link } from 'react-router-dom'

export default function IdahoFalls() {
  return (
    <>
<SEO
  title="Web Design in Idaho Falls, ID"
  description="Custom-coded websites for Idaho Falls small businesses. Fast, SEO-ready, and easy to maintain."
  canonical={canonicalFor('/locations/idaho-falls')}
  jsonLd={[
    // Page descriptor
    webPageJsonLd({
      path: '/locations/idaho-falls',
      name: 'Web Design in Idaho Falls, ID',
      description:
        'Custom-coded websites for Idaho Falls small businesses. Fast, SEO-ready, and easy to maintain.',
    }),

    // Breadcrumbs
    breadcrumbJsonLd([
      { name: 'Home', url: 'https://frontlinewebsoftware.com' },
      { name: 'Locations', url: 'https://frontlinewebsoftware.com/locations' },
      { name: 'Idaho Falls', url: 'https://frontlinewebsoftware.com/locations/idaho-falls' },
    ]),

    // Your business with local signal (areaServed includes the city)
    localBusinessJsonLd({
      areaServed: ['Idaho Falls', 'Idaho'],
      // optionally add: phone, street, city, region, postal to publish NAP here too
      // phone: '+14192616957',
      // street: '1500 E Venture Way',
      // city: 'Pocatello',
      // region: 'ID',
      // postal: '83201',
    }),

    // The specific service in this city (ties to your LocalBusiness via @id)
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalFor('/locations/idaho-falls')}#service`,
      serviceType: 'Web Design',
      areaServed: { '@type': 'City', name: 'Idaho Falls' },
      provider: { '@id': 'https://frontlinewebsoftware.com/#identity' },
    },
  ]}
/>

      <main id="main" tabIndex={-1} className="container">
        <h1>Web Design in Idaho Falls, ID</h1>
        <p>
          Idaho Falls is full of busy, no-nonsense businesses. We build websites that match that energy—clean, fast, and focused on results. No page builders or templates. Every site is custom-coded for performance, accessibility, and SEO so customers find you and pages load instantly on mobile.

          We’re a veteran-owned, USA-based shop that keeps things simple: clear scope, honest pricing, and fast turnaround. Most small business sites launch in 2–4 weeks with a smooth hand-off (or we can handle hosting and ongoing edits for you).

          Industries we often help: trades & home services, clinics, restaurants, retail, professional services, and nonprofits.

          Ready for a modern site that’s easy to maintain? We’ll look at what you have now and outline the three fastest wins for Idaho Falls.
        </p>

        {/* Ideas to add: 1 short testimonial, 3 local industries, small map embed, CTA */}
        <p><Link className="button" to="/contact?city=idaho-falls">Get a free plan</Link></p>
      </main>
    </>
  )
}