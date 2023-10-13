import dynamic from 'next/dynamic'
import Head from 'next/head'

import FooterSection from '@/components/layout/FooterSection'

const Navigation = dynamic(() => import('@/components/layout/Navigation'), { ssr: false })

export default function Layout({ children, title = null }) {
  const dev = process.env.NODE_ENV === 'development'

  return (
    <>
      <Head>
        <title>{title ? `SH.Q.K Forina - ${title}` : 'SH.Q.K Forina'}</title>

        {/* Favicons */}
        <link rel="icon" href="/favicons/favicon-32x-32" sizes="32x32" />
        <link rel="icon" href="/favicons/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" href="/favicons/android-chrome-256x256.png" sizes="228x228" />
      </Head>
      <div className={`font-sans antialiased flex flex-col ${dev ? 'debug-screens' : ''}`}>
        <Navigation />

        {children}

        <FooterSection />
      </div>
    </>
  )
}
