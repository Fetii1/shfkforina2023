import Image from 'next/image'

import Tabela from '@/components/Tabela'

export default function PlanProgramSection() {
  return (
    <>
      <div className="flex flex-col items-center my-10">
        <Image
          className="h-[25rem] w-[43rem] object-cover"
          src="/img/12.jpeg"
          width={500}
          height={500}
          priority={true}
          alt="ShkollaForinë"
        />
        <p className="text-base mt-8 md:text-lg px-5 md:px-0">
          Plan programi, vetëevaluimi dhe orari mund të shkarkohen këtu.
        </p>
      </div>
      <Tabela />
    </>
  )
}
