import Header from '@/components/Header'
import Layout from '@/components/layout/Layout'
import ImageSection from '@/components/sections/ImageSection'

export default function Gallery() {
  return (
    <Layout title="Gallery">
      <Header text="Galerija" />
      <ImageSection />
    </Layout>
  )
}
