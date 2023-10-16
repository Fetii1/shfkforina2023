import Link from 'next/link'

export default function FooterSection() {
  return (
    <div className="w-full h-32 mt-32 bg-blue-950 flex items-end justify-center">
      <p className="text-white text-xs mb-2">
        © 2023 SHFK Forina. All Rights Reserved. Made with{' '}
        <span className="text-red-400 text-lg">♥</span> from{' '}
        <Link target="_blank" href={'https://www.luckymedia.dev/'}>
          <span className="font-bold">Lucky Media</span>
        </Link>
      </p>
    </div>
  )
}
