import Card from '@/components/Card'

export default function CardSection() {
  const cards = [
    {
      src: '/svg/hat-image.svg',
      text: 'Mësim Bashkëkohor',
      className: 'bg-blue-950',
      alt: 'HatSvg',
    },
    {
      src: '/svg/book-image.svg',
      text: 'Bibliotekë',
      className: 'bg-red-950',
      alt: 'BookSvg',
    },
    {
      src: '/svg/ball-image.svg',
      text: 'Fushë Sporti',
      className: 'bg-yellow-950',
      alt: 'BallSvg',
    },
  ]
  return (
    <div className="flex flex-col justify-center container mx-auto md:h-1 md:items-end md:z-10 md:gap-5 md:flex-row">
      {cards.map((props, index) => (
        <Card key={index} src={props.src} text={props.text} className={props.className} />
      ))}
    </div>
  )
}
