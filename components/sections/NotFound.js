import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="container my-28 mx-auto justify-around items-center flex flex-col lg:flex-row">
      <div className="flex flex-col m-10 text-center md:text-left w-auto md:w-[455px]">
        <p className="text-3xl md:text-5xl font-bold">Faqja nuk u gjet!</p>
        <p className="my-4 md:my-6">
          Faqja që po kërkoni nuk ekziston. Ju mund të keni shkruar gabim adresën ose faqja mund të
          jetë zhvendosur.
        </p>
        <Link href="/">
          <Button
            className="w-fit transition duration-150 hover:-translate-y-1 hover:bg-blue-950"
            text="Kthehu mbrapa"
          />
        </Link>
      </div>
      <div className="object-cover">
        <Image src="/img/404.png" width={550} height={500} alt="Not Found" />
      </div>
    </div>
  )
}
