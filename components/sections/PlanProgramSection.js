import Image from 'next/image'

import Tabela from '@/components/Tabela'

export default function PlanProgramSection() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center my-10">
        <Image
          className="w-1/2 h-96 object-cover"
          src="/img/12.jpeg"
          width={500}
          height={500}
          alt="ShkollaForinë"
        />
        <p className="text-base mt-8 px-5 md:px-0">
          Plan programi, vetëevaluimi dhe orari mund të shkarkohen këtu.
        </p>
      </div>
      <Tabela />
    </>
  )
}
