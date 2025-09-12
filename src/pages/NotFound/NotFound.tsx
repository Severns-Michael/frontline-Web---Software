import { SEO } from '../../components/SEO/SEO'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found (404)" description="We couldn't find that page." />
      <main id="main" tabIndex={-1} className="container">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <p><Link to="/">Go back home</Link></p>
      </main>
    </>
  )
}