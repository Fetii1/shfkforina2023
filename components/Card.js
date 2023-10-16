import SVG from 'react-inlinesvg'

function Card({ className, src, text }) {
  return (
    <div className="w-full xl:mb-16 md:-mb-20 lg:-mb-10 mb-0 my-2 md:max-w-xs">
      <div className={`${className} z-50 rounded-2xl`}>
        <div className="w-full py-14 flex flex-col items-center justify-center">
          <SVG src={src} width={100} height={100} />
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white pt-3 lg:pt-10">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
