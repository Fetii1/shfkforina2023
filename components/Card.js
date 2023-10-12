import React from 'react'
import SVG from 'react-inlinesvg'

function Card({ className, src, text }) {
  return (
    <div className="md:w-1/3 my-2 w-full">
      <div className={`${className} rounded-lg`}>
        <div className="w-full h-auto py-14 flex flex-col items-center justify-center">
          <SVG src={src} width={100} height={100} />
          <p className="text-xl font-bold text-white">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
