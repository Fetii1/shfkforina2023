import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Content from '@/components/Content'
import SectionTitle from '@/components/SectionTitle'

export default function AboutSection() {
  return (
    <div className="container pt-32">
      <SectionTitle text="Rreth Nesh" className="border-blue-950" />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full translate-y-5 lg:text-left flex flex-col text-base text-center px-3 md:px-10">
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
            <Button
              className={
                'hover:bg-blue-950 font-bold transition duration-200 ml-0 lg:ml-3 hover:-translate-y-1'
              }
            >
              Lexo më shumë
            </Button>
          </Link>
        </div>
        <div className="w-full md:my-0 my-10 flex justify-center">
          <div
            className="w-auto flex lg:justify-center translate-x-5 translate-y-5"
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
