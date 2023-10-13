import React from 'react'

function Button({ text, className }) {
  return (
    <button
      className={`${className} bg-red-950 py-2 px-5 text-white font-bold rounded-full uppercase`}
    >
      {text}
    </button>
  )
}

export default Button
