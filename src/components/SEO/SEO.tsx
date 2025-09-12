type JSONPrimitive = string | number | boolean | null;
type JSONValue = JSONPrimitive | JSONValue[] | { [k: string]: JSONValue };

// JSON-LD must be an object or an array of objects
type JsonLd = { [k: string]: JSONValue } | Array<{ [k: string]: JSONValue }>;

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;      // absolute URL or /public path
  jsonLd?: JsonLd;     // object or array of objects
};

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (typeof window === 'undefined') return pathOrUrl; // SSR-safe fallback
  return new URL(pathOrUrl, window.location.origin).toString();
}

export function SEO({ title, description, canonical, image = '/og.jpg', jsonLd }: Props) {
  const site = 'Frontline Web & Software';
  const pageTitle = title ? `${title} • ${site}` : site;

  const url =
    canonical ??
    (typeof window !== 'undefined'
      ? window.location.origin + window.location.pathname
      : undefined);

  const ogImage = image ? toAbsoluteUrl(image) : undefined;

  return (
    <>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}

      {/* Social / Open Graph */}
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}