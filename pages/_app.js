import '../styles/globals.css'

import { Nunito } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const nunito = Nunito({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: '',
          site_name: 'SH.Q.K Forina',
          description: 'SH.Q.K Forinë',
        }}
      />
      <div className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
