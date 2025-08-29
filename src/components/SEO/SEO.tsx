type Props = { title?: string; description?: string }


export function SEO({ title, description }: Props) {
const site = 'FrontLine Web & Software Solutions'
const pageTitle = title ? `${title} • ${site}` : site
const desc = description ?? 'Custom websites & software for small businesses.'


return (
<>
<title>{pageTitle}</title>
<meta name="description" content={desc} />
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={desc} />
</>
)
}