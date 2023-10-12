import React from 'react'

import Button from './Button'

export default function Tabela() {
  return (
    <div className="container">
      <div className="w-full grid justify-items-center sm:grid-cols-2 md:grid-cols-3">
        <Button
          className={`hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 ${'w-fit my-2'}`}
          text="Plan Programi"
        />
        <Button
          className={`hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 ${'w-fit my-2'}`}
          text="Vetëevaluimi"
        />
        <Button
          className={`hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 ${'w-fit my-2'}`}
          text="Raport Vjetor"
        />
      </div>
      <div className="w-full grid justify-items-center sm:grid-cols-2 md:grid-cols-3">
        <Button
          Button
          className={`hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 ${'w-fit my-2'}`}
          text="програма"
        />
        <Button
          Button
          className={`hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 ${'w-fit my-2'}`}
          text="Самоевалуација"
        />
        <Button
          Button
          className={`hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 ${'w-fit my-2'}`}
          text="Годишна програма "
        />
      </div>
    </div>
  )
}
