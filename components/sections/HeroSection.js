import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="max-w-screen">
      <div className="w-full mx-auto relative">
        <Image
          className="absolute -bottom-1"
          src="/img/curve.png"
          width={2560}
          height={1080}
          alt="wave svg"
        />
        <Image
          src="/img/hero-image.png"
          width={2560}
          height={1080}
          alt="Hero Image"
          priority={true}
        />
      </div>
    </div>
  )
}
