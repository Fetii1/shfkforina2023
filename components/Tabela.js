import { programs } from 'content/home'

import Button from '@/components/Button'

export default function Tabela() {
  return (
    <div className="container">
      <div className="grid place-content-stretch sm:grid-cols-2 gap-7 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {programs.map(({ href, download, text }, index) => (
          <a key={index} href={href} download={download}>
            <Button
              className={
                'hover:bg-blue-950 text-sm lg:text-lg transition ease-in-out duration-200 hover:-translate-y-1 w-full'
              }
            >
              {text}
            </Button>
          </a>
        ))}
      </div>
    </div>
  )
}
