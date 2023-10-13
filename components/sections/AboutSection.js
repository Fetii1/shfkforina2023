import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Button from '../Button'
import Content from '../Content'

export default function AboutSection() {
  return (
    <div className="container">
      <div className="w-full flex justify-center h-auto">
        <p className="text-3xl font-bold md:text-5xl mt-14 pt-10 border-b-4 md:pt-10 pb-3 border-blue-950">
          Rreth Nesh
        </p>
      </div>
      <div className="mt-10 md:mt-20 flex flex-col lg:flex-row">
        <div className="w-full translate-y-5 lg:text-left flex flex-col text-center px-3 md:px-10 h-auto md:lg-0">
          <Content>
            Shkolla fillore në fshatin Forinë ka filluar të funksionoj në vitin 2006, shkollë kjo e
            cila ka funksionuar shumë vite më parë por për një kohë të gjatë ka qenë pasive.
            Nxënësit deri në atë kohë kanë qenë të obliguar të ndjekin mësimin në shkollën fillore
            “Përparimi” në fsh. Çegran.
            <br />
            <br />
            Deri në vitin 2014 shkolla fillore në fshatin Forinë funksiononte në kuadër të shkollës
            fillore “Përparimi” fsh. Çegran. Shkolla më 29 maj 2014 u pavarësua dhe mori emrin
            Shkolla Fillore “FORINA”.
          </Content>
          <Link className="my-14 lg:my-5" href="/about">
            <Button text="Lexo më shumë" />
          </Link>
        </div>
        <div className="w-full md:my-0 my-10 flex justify-center h-auto">
          <div
            className="w-auto flex lg:justify-center lg:translate-x-0 lg:translate-y-0 translate-x-5 translate-y-5 md:ml-6 md:mt-7"
            style={{
              backgroundImage: `url("../img/lines.png")`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Image
              className="min-w-auto lg:max-w-lg object-contain -translate-x-5 -translate-y-5"
              src="/img/forina.png"
              width={500}
              height={500}
              alt={'ShkollaForina'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
