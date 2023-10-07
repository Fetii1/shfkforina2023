import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link
        className="block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent"
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
    <div>
      <div className="w-full h-6 bg-red-500"></div>
      <div className="w-full shadow-md">
        <div className="w-auto mx-10 flex flex-row justify-between flex-wrap">
          <div className="flex w-full md:w-1/3 flex-row py-6 justify-between">
            <div className="w-full">
              <p className="font-bold text-gray-800 text-2xl pl-5">SH.Q.K Forina</p>
            </div>
            <div className="w-1/4 flex justify-end md:hidden pr-5">
              <label htmlFor="menu-toggle" className="cursor-pointer">
                <SVG
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
            <ul className="flex text-base font-bold w-full p-5 flex-col md:w-auto md:p-0 md:flex-row ">
              <NavItem href="/">Ballina</NavItem>
              <NavItem href="/about">Rreth Nesh</NavItem>
              <NavItem href="/galeria">Galeria</NavItem>
              <NavItem href="/planprogrami">Plan Programi</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
