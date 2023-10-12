import React from 'react'

import Button from './Button'

export default function Tabela() {
  const classList = [
    {
      class: 'hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1',
    },
  ]
  const data = [
    {
      text: 'Plan Programi',
    },
    {
      text: 'Vetëevaluimi',
    },
    {
      text: 'Raport Vjetor',
    },
    {
      text: 'програма',
    },
    {
      text: 'Самоевалуација',
    },
    {
      text: 'Годишна програма',
    },
  ]

  return (
    <div className="container">
      <div className="w-full grid justify-items-center sm:grid-cols-2 gap-5 md:grid-cols-3">
        {data.map((btn, index) => (
          <Button key={index} text={btn.text} className={classList[0].class} />
        ))}
      </div>
    </div>
  )
}
