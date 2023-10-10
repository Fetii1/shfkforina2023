import React from 'react'

function Button({ text }) {
  return (
    <button className="bg-red-950 text-sm md:text-lg w-auto mx-5 my-7 text-white font-bold rounded-full px-5 py-2 uppercase">
      {text}
    </button>
  )
}

Button.propTypes = {}

export default Button
