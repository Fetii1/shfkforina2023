import React from 'react'

export default function HeaderSection() {
  return (
    <div
      className="w-full h-32 bg-red-950 text-4xl items-center flex justify-start"
      style={{ backgroundImage: `url(/img/redLines.png)` }}
    >
      <h1 className="text-white font-bold pl-16">Galeria</h1>
    </div>
  )
}
