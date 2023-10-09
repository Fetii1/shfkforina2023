import AboutSection from '@/components/sections/AboutSection'
import CardSection from '@/components/sections/CardSection'
import FooterSection from '@/components/sections/FooterSection'
import GallerySection from '@/components/sections/GallerySection'
import HeroSection from '@/components/sections/HeroSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection />
      <CardSection />
      <AboutSection />
      <GallerySection />
      <FooterSection />
    </Layout>
  )
}
