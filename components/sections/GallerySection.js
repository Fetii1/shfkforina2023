import Link from 'next/link'
import React from 'react'

import Button from '../Button'
import ImageComp from '../ImageComp'

function GallerySection() {
  return (
    <div className="w-full mt-10 h-auto">
      <div
        className="w-full h-5 -mb-1 sm:mb-0"
        style={{
          backgroundImage: `url("/img/wave.png")`,
          backgroundRepeat: 'repeat-x',
        }}
      ></div>
      <div className="bg-yellow-950 h-auto">
        <div className="w-full flex justify-center h-auto">
          <p className="text-3xl font-bold md:text-5xl pt-10 border-b-4 md:pt-10 pb-3 border-orange-950">
            Galeria
          </p>
        </div>
        <div className="container flex flex-col items-center my-20">
          <ImageComp />
          <Link className="mt-20" href="/gallery">
            <Button className="text-center" text="Më shumë" />
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
