import React from 'react'
import Card from './Card'

export default function CardSection() {
  return (
    <div className="w-auto mx-3 md:-mt-48 md:z-10 h-auto md:mx-10 md:space-x-4 flex flex-col justify-center  md:flex-row">
      <Card
        className="bg-blue-900 w-full h-52 rounded-3xl"
        src="/svg/hat-image.svg"
        text="Mësim Bashkëkohor"
      />
      <Card
        className="bg-red-500 w-full h-52 rounded-3xl"
        src="/svg/book-image.svg"
        text="Bibliotekë"
      />
      <Card
        className="bg-yellow-500 w-full h-52 rounded-3xl"
        src="/svg/ball-image.svg"
        text="Fushë Sporti

        "
      />
    </div>
  )
}
