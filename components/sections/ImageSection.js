import { gallery, photos } from 'content/home'

import LightBox from '@/components/LightBox'

export default function ImageSection({ isHomepage }) {
  return (
    <div className="max-w-5xl mx-auto px-5">
      <LightBox
        images={isHomepage ? photos : gallery}
        className={isHomepage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}
      />
    </div>
  )
}
