import React from 'react'

import Card from '../Card'

export default function CardSection() {
  const items = [
    {
      src: '/svg/hat-image.svg',
      text: 'Mësim Bashkëkohor',
      className: 'bg-blue-950',
    },
    {
      src: '/svg/book-image.svg',
      text: 'Bibliotekë',
      className: 'bg-red-950',
    },
    {
      src: '/svg/ball-image.svg',
      text: 'Fushë Sporti',
      className: 'bg-orange-950',
    },
  ]

  return (
    <div className="flex flex-col justify-center container mx-auto md:h-1 md:items-end md:z-10 md:space-x-4 md:flex-row">
      {items.map((item, index) => (
        <Card key={index} src={item.src} text={item.text} className={item.className} />
      ))}
    </div>
  )
}
