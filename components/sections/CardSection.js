import React from 'react'

import Card from '../Card'

export default function CardSection() {
  const items = [
    {
      src: '/svg/hat-image.svg',
      text: 'Mësim Bashkëkohor',
      className: 'bg-shfk-blue',
    },
    {
      src: '/svg/book-image.svg',
      text: 'Bibliotekë',
      className: 'bg-shfk-red',
    },
    {
      src: '/svg/ball-image.svg',
      text: 'Fushë Sporti',
      className: 'bg-shfk-orange',
    },
  ]

  return (
    <div className="flex flex-col justify-center w-auto h-auto md:h-10 md:items-end mx-3 md:z-10 lg:mx-20 md:space-x-4 md:flex-row">
      {items.map((item, index) => (
        <Card key={index} src={item.src} text={item.text} className={item.className} />
      ))}
    </div>
  )
}
