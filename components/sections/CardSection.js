import { cardData } from 'content/home'

import Card from '@/components/Card'

export default function CardSection() {
  return (
    <div className="flex flex-col justify-center container mx-auto md:h-1 md:items-end md:z-10 md:gap-5 md:flex-row">
      {cardData.map((props, index) => (
        <Card key={index} src={props.src} text={props.text} className={props.className} />
      ))}
    </div>
  )
}
