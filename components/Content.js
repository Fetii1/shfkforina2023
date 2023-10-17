import Image from 'next/image'

export default function Content({ children, hasImage, src }) {
  return (
    <div className="flex flex-col items-center mx-auto pt-10">
      {hasImage && <Image src={src} width={800} height={500} alt="About Us Image" />}
      <div className="max-w-2xl">
        <p className="md:mx-2 md:text-lg my-10 px-3 text-gray-600">{children}</p>
      </div>
    </div>
  )
}
