import { gallery, photos } from 'content/home'
import Image from 'next/image'

export default function ImageSection({ isHomepage }) {
  return <div className="container">{isHomepage ? <ImageSet /> : <ImageComp />}</div>
}

const ImageSet = () => {
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

const ImageComp = () => {
  return (
    <div className="grid px-3 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
      {gallery.map((image, index) => (
        <div
          key={index}
          className="translate-x-3 translate-y-3 md:translate-x-0 md:translate-y-0 bg-blue-950"
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="h-64 w-full object-center -translate-x-3 object-cover -translate-y-3"
          />
        </div>
      ))}
    </div>
  )
}
