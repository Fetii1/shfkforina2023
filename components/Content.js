import Image from 'next/image'
import React from 'react'

export default function Content({ children, hasImage, className }) {
  return (
    <div className="max-w-4xl flex flex-col items-center mx-auto h-auto">
      {hasImage && (
        <Image
          className={className}
          src="/img/1.jpeg"
          width={500}
          height={500}
          alt="About Us Image"
        />
      )}
      <p className="px-5 md:px-2 text-sm md:text-lg text-gray-600">{children}</p>
    </div>
  )
}
