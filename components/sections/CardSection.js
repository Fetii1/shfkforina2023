import Card from '../Card'

export default function CardSection() {
  const items = [
    {
      src: '/svg/hat-image.svg',
      text: 'Mësim Bashkëkohor',
      className: 'bg-blue-950',
    },
    {
      src: '/svg/book-image.svg',
      text: 'Bibliotekë',
      className: 'bg-red-950',
    },
    {
      src: '/svg/ball-image.svg',
      text: 'Fushë Sporti',
      className: 'bg-orange-950',
    },
  ]

  return (
    <div className="flex flex-col justify-center w-auto h-auto md:h-28 lg:h-20 xl:h-0 xl:-mt-8 md:items-end mx-3 md:z-10 lg:mx-20 md:space-x-4 md:flex-row">
      {items.map((item, index) => (
        <Card key={index} src={item.src} text={item.text} className={item.className} />
      ))}
    </div>
  )
}
