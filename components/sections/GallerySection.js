import Link from 'next/link'

import Button from '@/components/Button'
import ImageSection from '@/components/sections/ImageSection'

function GallerySection() {
  return (
    <div className="w-full pt-24 md:pt-56">
      <div
        className="w-full h-5 -mb-1 sm:mb-0"
        style={{
          backgroundImage: `url("/img/wave.png")`,
          backgroundRepeat: 'repeat-x',
        }}
      ></div>
      <div className="bg-yellow-1000">
        <div className="w-full flex justify-center">
          <p className="text-4xl font-bold md:text-5xl border-b-4 pb-3 mt-24 mb-16 border-yellow-950">
            Galeria
          </p>
        </div>
        <div className="container flex flex-col items-center">
          <ImageSection isHomepage={true} />
          <Link className="mt-16 mb-24" href="/gallery">
            <Button
              className={'hover:bg-blue-950 font-bold transition duration-200 hover:-translate-y-1'}
              text="Më shumë"
            />
          </Link>
        </div>
        <div
          className="w-full bg-white h-5 -mt-1 sm:mt-0"
          style={{
            backgroundImage: `url("/img/wave.png")`,
            rotate: '180deg',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
      </div>
    </div>
  )
}
export default GallerySection
