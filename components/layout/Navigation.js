import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  const router = useRouter()
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link
        className={`${
          router.asPath === href ? 'text-blue-800' : 'text-gray-800'
        } block hover:text-blue-800 py-4 md:py-0 border-b lg:text-lg border-gray-200 md:border-b-0 md:border-transparent`}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div className="w-full h-6 bg-red-950"></div>
      <div className="w-full shadow-md">
        <div className="container">
          <div className="w-auto py-5 md:mx-3 sm:mx-10 flex flex-row justify-between flex-wrap">
            <div className="flex w-full md:w-1/3 flex-row py-3 justify-between">
              <div className="w-full">
                <Link href="/">
                  <p className="font-bold text-gray-800 text-2xl lg:text-3xl pl-5">SH.Q.K Forina</p>
                </Link>
              </div>
              <div className="w-1/4 flex justify-end md:hidden pr-5">
                <label htmlFor="menu-toggle" className="cursor-pointer">
                  <SVG
                    aria-label="menu"
                    src="/svg/menu.svg"
                    className="fill-current text-black w-6 h-6"
                    onClick={() => setMenu(!menu)}
                  />
                </label>
              </div>
            </div>
            <div
              className={`w-full md:w-2/3 md:justify-end items-center md:flex ${
                menu ? ' flex' : ' hidden'
              }`}
            >
              <ul className="flex lg:text-lg font-bold w-full p-5 flex-col md:w-auto md:p-0 md:flex-row ">
                <NavItem href="/">Ballina</NavItem>
                <NavItem href="/about">Rreth Nesh</NavItem>
                <NavItem href="/gallery">Galeria</NavItem>
                <NavItem href="/planprogrami">Plan Programi</NavItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
