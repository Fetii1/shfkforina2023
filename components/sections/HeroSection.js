/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full relative">
      <Image className="absolute bottom-0" src="/img/curve.png" width={1920} height={1080} />
      <Image src="/img/hero-image.png" width={1920} height={1080} />
      321
    </div>
  )
}
