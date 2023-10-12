/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

function ImageComp() {
  const photos = [
    {
      src: '/img/1.jpeg',
      width: '500',
      height: '500',
      alt: 'ShkollaForinë',
    },
    {
      src: '/img/2.jpeg',
      width: '500',
      height: '500',
      alt: 'ShkollaForinë1',
    },
    {
      src: '/img/3.jpeg',
      width: '500',
      height: '500',
      alt: 'ShkollaForinë2',
    },
    {
      src: '/img/4.jpeg',
      width: '500',
      height: '500',
      alt: 'ShkollaForinë3',
    },
  ]
  return (
    <>
      {photos.map((photo, index) => (
        <div key={index} className="w-full h-64 object-cover bg-blue-800">
          <Image
            className="h-full w-full object-cover -translate-x-2 -translate-y-2"
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
          />
        </div>
      ))}
    </>
  )
}

export default ImageComp
