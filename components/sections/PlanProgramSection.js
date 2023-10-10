import Image from 'next/image'
import React from 'react'

import Tabela from '../Tabela'

export default function PlanProgramSection() {
  return (
    <>
      <div className="w-full md:w-auto flex flex-col items-center md:mx-20 my-10 h-auto">
        <Image src="/img/12.jpeg" width={500} height={500} alt="ShkollaForinë" />
        <p className="text-base pt-14">
          Plan programi, vetëevaluimi dhe orari mund të shkarkohen këtu.
        </p>
      </div>
      <Tabela />
    </>
  )
}
