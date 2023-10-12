import React from 'react'

import ImageSection from '@/components/gallery/ImageSection'
import Header from '@/components/Header'
import Layout from '@/components/layout/Layout'

export default function Gallery() {
  return (
    <Layout title="Gallery">
      <Header text="Galerija" />
      <ImageSection />
    </Layout>
  )
}
