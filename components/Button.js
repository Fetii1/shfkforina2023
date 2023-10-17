function Button({ text, className }) {
  return (
    <button
      className={`${className} bg-red-950 py-4 px-8 md:py-2 md:px-5 text-white rounded-full uppercase`}
    >
      {text}
    </button>
  )
}

export default Button
