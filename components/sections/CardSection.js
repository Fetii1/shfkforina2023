import { cardItems } from 'content/cardItems'
import React from 'react'

import Card from '@/components/Card'

export default function CardSection() {
  return (
    <div className="flex flex-col justify-center container mx-auto md:h-1 md:items-end md:z-10 md:gap-5 md:flex-row">
      {cardItems.map((item, index) => (
        <Card key={index} src={item.src} text={item.text} className={item.className} />
      ))}
    </div>
  )
}
