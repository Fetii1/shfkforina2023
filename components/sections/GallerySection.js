import Link from 'next/link'

import Button from '@/components/Button'
import ImageSection from '@/components/sections/ImageSection'
import Title from '@/components/Title'

function GallerySection() {
  return (
    <div className="w-full pt-24 md:pt-32">
      <div
        className="w-full h-5 -mb-1 sm:mb-0"
        style={{
          backgroundImage: `url("/img/wave.png")`,
          backgroundRepeat: 'repeat-x',
        }}
      ></div>
      <div className="bg-yellow-1000">
        <Title className="border-yellow-950">Galeria</Title>
        <div className="container flex flex-col items-center">
          <ImageSection isHomepage={true} />
          <div className="w-full flex justify-center items-center">
            <Link className="my-20" href="/gallery">
              <Button
                className={
                  'hover:bg-blue-950 font-bold transition duration-200 hover:-translate-y-1'
                }
              >
                Më shumë
              </Button>
            </Link>
          </div>
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
