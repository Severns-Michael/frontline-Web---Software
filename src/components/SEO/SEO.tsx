type JSONPrimitive = string | number | boolean | null;
type JSONValue = JSONPrimitive | JSONValue[] | { [k: string]: JSONValue };

// JSON-LD must be an object or an array of objects
type JsonLd = { [k: string]: JSONValue } | Array<{ [k: string]: JSONValue }>;

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;           // absolute URL or /public path
  jsonLd?: JsonLd;          // object or array of objects
  extraHead?: React.ReactNode;
  noindex?: boolean;        // 🔹 optional: allow "noindex"
  ogType?: string;          // 🔹 optional: override OG type (article, website, etc.)
  twitterHandle?: string;   // 🔹 optional: @yourhandle
};

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (typeof window === 'undefined') return pathOrUrl;
  return new URL(pathOrUrl, window.location.origin).toString();
}

export function SEO({
  title,
  description,
  canonical,
  image = '/og.jpg',
  jsonLd,
  extraHead,
  noindex,
  ogType = 'website',
  twitterHandle,
}: Props) {
  const site = 'Frontline Web & Software';
  const pageTitle = title ? `${title} • ${site}` : site;

  const url =
    canonical ??
    (typeof window !== 'undefined'
      ? window.location.origin + window.location.pathname
      : undefined);

  const ogImage = image ? toAbsoluteUrl(image) : undefined;

  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}

      {/* Robots control */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* JSON-LD (supports single or multiple objects) */}
      {jsonLdArray.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* Anything extra (preconnect, preload, inline critical CSS, etc.) */}
      {extraHead}
    </>
  );
}