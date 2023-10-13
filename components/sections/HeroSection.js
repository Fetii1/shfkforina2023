/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="w-full relative">
      <Image
        className="absolute -bottom-1"
        src="/img/curve.png"
        width={1920}
        height={1080}
        alt={'wave svg'}
      />
      <Image src="/img/hero-image.png" width={1920} height={1080} alt={'Hero Image'} />
    </div>
  )
}
