import Link from 'next/link'

export default function FooterSection() {
  return (
    <div className="w-full h-32 mt-20 bg-blue-950 flex items-center justify-center">
      <p className="text-white text-xs px-5 text-center">
        © 2023 SHFK Forina. All Rights Reserved. Made with
        <span className="text-red-400 text-lg"> ♥ </span>from
        <Link rel="noreferrer" target="_blank" href={'https://www.luckymedia.dev/'}>
          <span className="font-bold"> Lucky Media</span>
        </Link>
      </p>
    </div>
  )
}
