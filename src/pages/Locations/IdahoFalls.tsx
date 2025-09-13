import { SEO } from '../../components/SEO/SEO'

export default function IdahoFalls() {
  return (
    <>
      <SEO
        title="Web Design in Idaho Falls, ID"
        description="Custom-coded websites for Idaho Falls small businesses. Fast, SEO-ready, and easy to maintain."
        canonical="https://frontline.example/locations/idaho-falls"
        jsonLd={{
          "@context":"https://schema.org",
          "@type":"LocalBusiness",
          "name":"Frontline Web & Software",
          "url":"https://frontline.example/locations/idaho-falls",
          "address":{
            "@type":"PostalAddress",
            "addressLocality":"Idaho Falls",
            "addressRegion":"ID",
            "addressCountry":"US"
          },
          "areaServed":"Idaho Falls"
        }}
      />
      <main id="main" tabIndex={-1} className="container">
        <h1>Web Design in Idaho Falls, ID</h1>
        <p>We help Idaho Falls businesses launch fast, modern, and SEO-ready websites.</p>
        {/* Short testimonial, 3-4 local clients or industries, a map embed, and a contact CTA */}
      </main>
    </>
  )
}