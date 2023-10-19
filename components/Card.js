import SVG from 'react-inlinesvg'

function Card({ className, src, text }) {
  return (
    <div className="w-full my-2 md:-mb-10 lg:-mb-16 xl:-mb-1 md:max-w-xs">
      <div className={`${className} z-50 rounded-2xl`}>
        <div className="w-full h-72 flex flex-col items-center justify-evenly">
          <SVG src={src} width={100} height={100} />
          <p className="text-lg w px-5 text-center md:text-2xl lg:text-3xl font-bold text-white">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
