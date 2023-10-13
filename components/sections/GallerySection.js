import Link from 'next/link'

import Button from '@/components/Button'
import ImageComp from '@/components/ImageComp'

function GallerySection() {
  return (
    <div className="w-full mt-10">
      <div
        className="w-full h-5 -mb-1 sm:mb-0"
        style={{
          backgroundImage: `url("/img/wave.png")`,
          backgroundRepeat: 'repeat-x',
        }}
      ></div>
      <div className="bg-yellow-960">
        <div className="w-full flex justify-center">
          <p className="text-3xl font-bold md:text-5xl pt-10 border-b-4 md:pt-10 pb-3 border-orange-950">
            Galeria
          </p>
        </div>
        <div className="container flex flex-col items-center my-20">
          <ImageComp />
          <Link className="mt-20" href="/gallery">
            <Button
              className={'hover:bg-blue-950 transition duration-200 hover:-translate-y-1'}
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
