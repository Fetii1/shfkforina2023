import React from 'react'

import HeaderSection from '@/components/gallery/HeaderSection'
import ImageSection from '@/components/gallery/ImageSection'
import Layout from '@/components/layout/Layout'

export default function gallery() {
  return (
    <Layout title="Gallery">
      <HeaderSection />
      <ImageSection />
    </Layout>
  )
}
