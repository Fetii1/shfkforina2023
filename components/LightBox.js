import FsLightbox from 'fslightbox-react'
import Image from 'next/image'
import React, { useState } from 'react'

function LightBox({ images, className }) {
  const [toggler, setToggler] = useState(false)
  const [productIndex, setProductIndex] = useState(0)

  return (
    <>
      <div className={`${className} grid px-3 mt-20 md:grid-cols-2 gap-12 lg:gap-20`}>
        {images.map(({ src, width, height }, index) => (
          <div
            key={index}
            className="translate-x-3 h-64 w-full translate-y-3 md:translate-x-0 md:translate-y-0 bg-blue-950"
          >
            <Image
              className="w-full h-full object-cover -translate-x-3 -translate-y-3"
              src={src}
              width={width}
              height={height}
              alt={'GalleryImage' + index}
              onClick={() => {
                setToggler(!toggler)
                setProductIndex(index)
              }}
            />
          </div>
        ))}
      </div>
      <FsLightbox toggler={toggler} sources={[images[productIndex].src]} />
    </>
  )
}

export default LightBox
