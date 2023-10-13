import { programdata } from 'content/home'

import Button from '@/components/Button'

export default function Tabela() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full grid justify-items-center sm:grid-cols-2 gap-5 md:grid-cols-3">
        {programdata.map((btn, index) => (
          <a key={index} href={`${btn.href}`} download={`${btn.download}`}>
            <Button
              text={btn.text}
              className={
                'hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1'
              }
            />
          </a>
        ))}
      </div>
    </div>
  )
}
