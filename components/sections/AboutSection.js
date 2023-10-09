import React from 'react'
import Image from 'next/image'
import Button from '../Button'

export default function AboutSection() {
  return (
    <div className="container">
      <div className="w-full h-auto flex my-20 justify-center">
        <p className="text-3xl md:text-5xl px-8 pb-3 font-bold border-b-4 border-shfk-blue">
          Rreth Nesh
        </p>
      </div>
      <div className="flex flex-col  lg:flex-row">
        <div className="w-full lg:text-left text-center px-10 h-auto mb-20 md:lg-0">
          <p className="text-gray-800">
            Shkolla fillore në fshatin Forinë ka filluar të funksionoj në vitin 2006, shkollë kjo e
            cila ka funksionuar shumë vite më parë por për një kohë të gjatë ka qenë pasive.
            Nxënësit deri në atë kohë kanë qenë të obliguar të ndjekin mësimin në shkollën fillore
            “Përparimi” në fsh. Çegran.
            <br />
            <br />
            Deri në vitin 2014 shkolla fillore në fshatin Forinë funksiononte në kuadër të shkollës
            fillore “Përparimi” fsh. Çegran. Shkolla më 29 maj 2014 u pavarësua dhe mori emrin
            Shkolla Fillore “FORINA”.
          </p>
          <Button text="Lexo më shumë" />
        </div>
        <div
          className="w-full flex justify-center lg:ml-6 lg:mt-7"
          style={{
            backgroundImage: `url("../img/lines.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom middle',
          }}
        >
          <Image
            className="-translate-x-0 -translate-y-5 lg:-translate-x-6 lg:-translate-y-6"
            src="/img/forina.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
