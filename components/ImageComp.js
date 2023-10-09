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
    <div className="w-full grid grid-cols-4 items- justify-center flex-col md:flex-row h-auto">
      {photos.map((photo, index) => (
        <div className="w-auto h-64 overflow-hidden">
          <Image key={index} src={photo.src} width={photo.width} height={photo.height} />
        </div>
      ))}
    </div>
  )
}

export default ImageComp
