import { SEO } from '../../components/SEO/SEO'
import { Link } from 'react-router-dom'
import { canonicalFor, webPageJsonLd } from '../../lib/seo'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found (404)"
        description="We couldn't find that page."
        canonical={canonicalFor('/404')}
        // Minimal schema for a 404 (optional)
        jsonLd={[
          webPageJsonLd({
            path: '/404',
            name: 'Page not found (404)',
            description: "We couldn't find that page."
          })
        ]}
        extraHead={<meta name="robots" content="noindex, follow" />}
      />

      <main id="main" tabIndex={-1} className="container">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <p><Link to="/">Go back home</Link></p>
      </main>
    </>
  )
}