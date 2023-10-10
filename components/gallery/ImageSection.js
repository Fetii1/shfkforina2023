import Image from 'next/image'
import React from 'react'

export default function ImageSection() {
  const galleryImages = [
    {
      src: '/img/1.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages1',
    },
    {
      src: '/img/2.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages2',
    },
    {
      src: '/img/3.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages3',
    },
    {
      src: '/img/4.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages4',
    },
    {
      src: '/img/5.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages5',
    },
    {
      src: '/img/6.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages6',
    },
    {
      src: '/img/7.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages7',
    },
    {
      src: '/img/8.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages8',
    },
    {
      src: '/img/9.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages9',
    },
    {
      src: '/img/10.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages10',
    },
    {
      src: '/img/11.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages11',
    },
    {
      src: '/img/12.jpeg',
      width: 500,
      height: 500,
      alt: 'GalleryImages12',
    },
  ]
  return (
    <div className="container">
      <div className="grid px-3 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 w-full">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="translate-x-3 translate-y-3 md:translate-x-0 md:translate-y-0 h-full w-full bg-blue-950"
          >
            <Image
              key={index}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className="h-80 -translate-x-3 w-full object-cover -translate-y-3"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
