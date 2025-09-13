import { SEO } from '../../components/SEO/SEO'

export default function Pocatello() {
  return (
    <>
      <SEO
        title="Web Design in Pocatello, ID"
        description="Custom-coded websites for Pocatello's small businesses. Fast, SEO-ready, and easy to maintain."
        canonical="https://frontline.example/locations/idaho-falls"
        jsonLd={{
          "@context":"https://schema.org",
          "@type":"LocalBusiness",
          "name":"Frontline Web & Software",
          "url":"https://frontline.example/locations/pocatello",
          "address":{
            "@type":"PostalAddress",
            "addressLocality":"Pocatello",
            "addressRegion":"ID",
            "addressCountry":"US"
          },
          "areaServed":"Pocatello, ID",

        }}
      />
      <main id="main" tabIndex={-1} className="container">
        <h1>Web Design in Pocatello, ID</h1>
        <p>We help Pocatello's businesses launch fast, modern, and SEO-ready websites.</p>
        {/* Short testimonial, 3-4 local clients or industries, a map embed, and a contact CTA */}
      </main>
    </>
  )
}