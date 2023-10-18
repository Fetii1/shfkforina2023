import { gallery, photos } from 'content/home'

import LightBox from '@/components/LightBox'

export default function ImageSection({ isHomepage }) {
  return (
    <div className="container">
      <LightBox
        images={isHomepage ? photos : gallery}
        className={
          isHomepage
            ? 'grid px-3 mt-20 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20'
            : 'grid px-3 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20'
        }
      />
    </div>
  )
}
