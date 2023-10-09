import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

function ImageComp() {
  const photos = [
    {
      src: '/img/1.jpeg',
      width: '500',
      height: '500',
    },
    {
      src: '/img/2.jpeg',
      width: '500',
      height: '500',
    },
    {
      src: '/img/3.jpeg',
      width: '500',
      height: '500',
    },
    {
      src: '/img/4.jpeg',
      width: '500',
      height: '500',
    },
  ]
  return (
    <>
      {photos.map((photo, index) => (
        <div className="w-auto h-full lg:h-64 bg-blue-800">
          <Image
            className="h-full w-full object-cover lg:w-auto -translate-x-2 -translate-y-2"
            key={index}
            src={photo.src}
            width={photo.width}
            height={photo.height}
          />
        </div>
      ))}
    </>
  )
}

export default ImageComp
