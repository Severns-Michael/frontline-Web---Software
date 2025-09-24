// src/lib/seo.ts
// Site-wide SEO constants + helpers

export const SITE = 'https://frontlinewebsoftware.com'; // no trailing slash
export const SITE_NAME = 'Frontline Web & Software';

// Common assets (put these in /public)
export const OG_IMAGE = `${SITE}/og.jpg`;         // /public/og.jpg
export const LOGO_512 = `${SITE}/logo-512.png`;   // /public/logo-512.png

// ---- URL helpers ----
export function absoluteUrl(path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE}${clean}`;
}

export function canonicalFor(path = '/'): string {
  if (path === '/' || path.trim() === '') return `${SITE}/`;
  const lowerNoSlash = path.replace(/\/+$/, '').toLowerCase();
  return `${SITE}${lowerNoSlash.startsWith('/') ? '' : '/'}${lowerNoSlash}`;
}

export function normalizeImageUrl(img?: string): string | undefined {
  if (!img) return undefined;
  if (/^https?:\/\//i.test(img)) return img;
  const prefixed = img.startsWith('/') ? img : `/${img}`;
  return `${SITE}${prefixed}`;
}

// ---- JSON-LD builders ----
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: SITE_NAME,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function webPageJsonLd(opts: {
  path?: string;            // e.g., "/about"
  name: string;             // page title (no site name)
  description?: string;
  image?: string;           // absolute preferred; relative will be normalized
}) {
  const url = canonicalFor(opts.path ?? '/');
  const img = opts.image ? normalizeImageUrl(opts.image) : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `${opts.name} • ${SITE_NAME}`,
    // 👇 only include if defined to satisfy JSONValue (no undefineds)
    ...(opts.description ? { description: opts.description } : {}),
    ...(img ? { primaryImageOfPage: { '@type': 'ImageObject', url: img } } : {}),
    isPartOf: { '@id': `${SITE}/#website` },
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#identity`,
    name: SITE_NAME,
    url: SITE,
    image: OG_IMAGE,
    logo: LOGO_512,
    telephone: '+14192616957', // E.164
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1500 E Venture Way',
      addressLocality: 'Pocatello',
      addressRegion: 'ID',
      postalCode: '83201',
      addressCountry: 'US',
    },
    areaServed: ['Pocatello', 'Idaho Falls', 'Rexburg'],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+14192616957',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English'],
    }],
    knowsAbout: [
      'Small business websites',
      'Local SEO',
      'React web apps',
      'Performance optimization',
      'Accessibility (WCAG)',
    ],
    // sameAs: ['https://www.linkedin.com/in/...','https://github.com/...'],
  };
}