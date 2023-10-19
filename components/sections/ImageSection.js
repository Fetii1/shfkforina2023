import { gallery, photos } from 'content/home'

import LightBox from '@/components/LightBox'

export default function ImageSection({ isHomepage }) {
  return (
    <div className="container">
      <LightBox
        images={isHomepage ? photos : gallery}
        className={isHomepage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}
      />
    </div>
  )
}
