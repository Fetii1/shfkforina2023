export default function Header({ text }) {
  return (
    <div
      className="h-32 bg-red-950 text-4xl items-center flex justify-start"
      style={{ backgroundImage: `url(/img/redLines.png)` }}
    >
      <div className="container">
        <h1 className="text-white font-bold ml-0 sm:ml-6 text-3xl md:text-4xl">{text}</h1>
      </div>
    </div>
  )
}
