import AboutText from '@/components/sections/about/AboutText'
import HeaderSection from '@/components/sections/about/HeaderSection'
import Layout from '@/layout/Layout'

export default function about() {
  return (
    <Layout title="About">
      <HeaderSection />
      <AboutText />
    </Layout>
  )
}
