import CardSection from '@/components/sections/CardSection'
import HeroSection from '@/components/sections/HeroSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection />
      <CardSection />
    </Layout>
  )
}
