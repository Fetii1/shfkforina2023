import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'

function Card(props) {
  return (
    <div className="md:w-1/3 my-2 w-full">
      <div className={`${props.className} rounded-lg`}>
        <div className="w-full h-auto py-14 flex flex-col items-center justify-center">
          <SVG src={props.src} width={100} height={100} />
          <p className="text-xl font-bold text-white">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
