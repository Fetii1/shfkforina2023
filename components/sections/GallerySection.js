import React from 'react'

import Button from '../Button'
import ImageComp from '../ImageComp'

function GallerySection() {
  return (
    <div className="w-full mt-10 h-auto">
      <div
        className="w-full h-5"
        style={{
          backgroundImage: `url("/img/wave.png")`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
        }}
      ></div>
      <div className="bg-yellow-950 h-auto">
        <div className="w-full flex justify-center h-auto">
          <p className="text-3xl font-bold md:text-5xl border-b-4 pt-10 pb-3 border-orange-950">
            Galeria
          </p>
        </div>
        <div className="container mt-20">
          <div className="w-full items-center flex flex-col lg:flex-row  gap-5 justify-center">
            <ImageComp className="translate-x-5" />
          </div>
          <div className="w-full flex justify-center my-10 h-auto">
            <Button className="text-center" text="Më shumë" />
          </div>
        </div>
        <div
          className="w-full bg-white h-5"
          style={{
            backgroundImage: `url("/img/wave.png")`,
            rotate: '180deg',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'contain',
          }}
        ></div>
      </div>
    </div>
  )
}

GallerySection.propTypes = {}

export default GallerySection
