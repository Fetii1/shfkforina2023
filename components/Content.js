import Image from 'next/image'

export default function Content({ children, hasImage, className }) {
  return (
    <div className="max-w-4xl flex flex-col items-center mx-auto">
      {hasImage && (
        <Image
          className={className}
          src="/img/1.jpeg"
          width={800}
          height={500}
          alt="About Us Image"
        />
      )}
      <div className="max-w-2xl">
        <p className="md:mx-2 md:text-lg text-gray-600">{children}</p>
      </div>
    </div>
  )
}
