import Head from 'next/head'

type SEOProps = {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
}
export default function SEO({
  shouldIndexPage = false,
  shouldExcludeTitleSuffix = false,
  title,
  description,
  image
}: SEOProps) {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Move.It' : ''}`

  const pageImage = image ? `img/${image}` : undefined

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}

      {pageImage && <meta name="image" content={pageImage} />}

      {/* //paginar que nao queira ser indexada */}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta name="keywords" content="alquipo, exercise" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />

      <meta name="full-screen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="MoveIt" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alquiponeto" />
      <meta name="twitter:creator" content="@alquiponeto" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  )
}
