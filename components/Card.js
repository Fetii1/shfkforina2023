import SVG from 'react-inlinesvg'

function Card(props) {
  return (
    <div className="w-full xl:mb-16 md:-mb-20 lg:-mb-10 mb-0 my-2 md:max-w-sm">
      <div className={`${props.className} z-50 rounded-lg`}>
        <div className="w-full py-14 flex flex-col items-center justify-center">
          <SVG src={props.src} width={100} height={100} />
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white pt-3 lg:pt-10">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
