import { programs } from 'content/home'

import Button from '@/components/Button'

export default function Tabela() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid place-content-stretch sm:grid-cols-2 gap-10 md:gap-5 md:grid-cols-3">
        {programs.map((btn, index) => (
          <a key={index} href={`${btn.href}`} download={`${btn.download}`}>
            <Button
              text={btn.text}
              className={
                'hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1 w-full'
              }
            />
          </a>
        ))}
      </div>
    </div>
  )
}
