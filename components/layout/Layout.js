import dynamic from 'next/dynamic'
import Head from 'next/head'

import FooterSection from '@/components/layout/FooterSection'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - SH.F.K Forina - Shkolla Fillore Komunale Forinë`
            : 'SH.F.K Forina - Shkolla Fillore Komunale Forinë'}
        </title>
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:image:alt" content="Shkolla Forinë OG" />
        <meta property="og:image:type" content="png" />
        <link rel="icon" sizes="180x180" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/favicon/android-chrome-256x256.png"
        />
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        <Navigation />

        {children}

        <FooterSection />
      </div>
    </>
  )
}
