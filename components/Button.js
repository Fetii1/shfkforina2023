import React from 'react'

function Button(props) {
  return (
    <button className="bg-red-950 w-auto my-10 text-white font-bold rounded-full px-5 py-2 uppercase">
      {props.text}
    </button>
  )
}

Button.propTypes = {}

export default Button
