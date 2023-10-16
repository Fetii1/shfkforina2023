import { photos } from 'content/home'
import Image from 'next/image'

function ImageComp() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="w-full h-64 translate-x-2 translate-y-2 object-cover bg-blue-800"
        >
          <Image
            className="h-full w-full object-cover -translate-x-2 -translate-y-2"
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageComp
