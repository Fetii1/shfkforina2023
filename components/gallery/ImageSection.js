import { gallery } from 'content/home'
import Image from 'next/image'
import React from 'react'

export default function ImageSection() {
  return (
    <div className="container">
      <div className="grid px-3 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="translate-x-3 translate-y-3 md:translate-x-0 md:translate-y-0 bg-blue-950"
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className="h-64 object-center -translate-x-3 object-cover -translate-y-3"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
