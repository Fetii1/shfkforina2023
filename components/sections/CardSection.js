import React from 'react'

import Card from './Card'

export default function CardSection() {
  const items = [
    {
      src: '/svg/hat-image.svg',
      text: 'Mësim Bashkëkohor',
      className: 'bg-blue-500',
    },
    {
      src: '/svg/book-image.svg',
      text: 'Bibliotekë',
      className: 'bg-red-500',
    },
    {
      src: '/svg/ball-image.svg',
      text: 'Fushë Sporti',
      className: 'bg-yellow-500',
    },
  ]

  return (
    <div className="flex flex-col justify-center w-auto h-auto mx-3 md:-mt-48 md:z-10 md:mx-10 md:space-x-4 md:flex-row">
      {items.map((item, index) => (
        <Card key={index} src={item.src} text={item.text} className={item.className} />
      ))}
    </div>
  )
}
