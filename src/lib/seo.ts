// src/lib/seo.ts
// Site-wide SEO constants + helpers

export const SITE = 'https://frontlinewebsoftware.com'; // no trailing slash
export const SITE_NAME = 'Frontline Web & Software';

// Common assets (put these in /public)
export const OG_IMAGE = `${SITE}/og.jpg`;       // /public/og.jpg
export const LOGO_512 = `${SITE}/logo-512.png`; // /public/logo-512.png

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

/** WebSite (site-wide) + optional SearchAction */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: SITE_NAME,
  };
}

/** WebPage (per-page) */
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
    ...(opts.description ? { description: opts.description } : {}),
    ...(img
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: img } }
      : {}),
    isPartOf: { '@id': `${SITE}/#website` },
  };
}

/** Organization (site-wide identity) */
export function organizationJsonLd(opts?: {
  name?: string;
  url?: string;
  logo?: string;        // absolute or /path
  sameAs?: string[];    // social URLs
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#org`,
    name: opts?.name ?? SITE_NAME,
    url: opts?.url ?? SITE,
    ...(opts?.logo ? { logo: normalizeImageUrl(opts.logo) } : {}),
    ...(opts?.sameAs && opts.sameAs.length ? { sameAs: opts.sameAs } : {}),
  };
}

/** LocalBusiness (for local SEO) */

export function localBusinessJsonLd(opts?: {
  phone?: string;         // E.164 e.g. "+14192616857"
  image?: string;         // absolute or /path
  street?: string;
  city?: string;
  region?: string;        // 'ID'
  postal?: string;
  country?: string;       // 'US'
  areaServed?: string[];  // ['Pocatello', 'Idaho Falls', 'Rexburg']
  priceRange?: string;    // '$$'
  logo?: string;          // absolute or /path
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type'   : 'LocalBusiness',
    '@id'     : `${SITE}/#identity`,
    name      : SITE_NAME,
    url       : SITE,
  };

  // only add when present (avoid undefined)
  if (opts?.image) obj.image = normalizeImageUrl(opts.image); else obj.image = OG_IMAGE;
  if (opts?.logo)  obj.logo  = normalizeImageUrl(opts.logo);  else obj.logo  = LOGO_512;
  if (opts?.phone) obj.telephone = opts.phone;
  if (opts?.priceRange) obj.priceRange = opts.priceRange;
  if (opts?.areaServed?.length) obj.areaServed = opts.areaServed;

  // address: build only with defined keys
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const address: Record<string, any> = { '@type': 'PostalAddress' };
  if (opts?.street) address.streetAddress = opts.street;
  if (opts?.city)   address.addressLocality = opts.city;
  if (opts?.region) address.addressRegion   = opts.region;
  if (opts?.postal) address.postalCode      = opts.postal;
  address.addressCountry = opts?.country ?? 'US';

  // include address only if we at least have street + city (or whatever rule you prefer)
  if (address.streetAddress && address.addressLocality) {
    obj.address = address;
  }

  return obj;
}

/** Breadcrumbs */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** FAQ (must match visible Q&A) */
export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
