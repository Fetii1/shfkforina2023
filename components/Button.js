function Button({ children, className }) {
  return (
    <button
      className={`${className} bg-red-950 py-4 px-8 md:py-2 md:px-5 text-white rounded-full uppercase`}
    >
      {children}
    </button>
  )
}

export default Button
