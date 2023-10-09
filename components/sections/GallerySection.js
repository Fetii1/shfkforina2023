import React from 'react'
import PropTypes from 'prop-types'
import ImageComp from '../ImageComp'

function GallerySection(props) {
  return (
    <div className="w-full mt-10 h-auto">
      <div
        className="w-full h-5"
        style={{
          backgroundImage: `url("/img/wave.png")`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'contain',
        }}
      ></div>
      <div className="bg-yellow-200/40 h-96">
        <div className="container">
          <div className="w-full flex justify-center h-auto">
            <p className="text-3xl font-bold md:text-5xl border-b-4 pt-10 pb-3 border-orange-500 ">
              Galeria
            </p>
          </div>
          <div className="w-full h-auto flex flex-col md:flex-col">
            <ImageComp />
          </div>
        </div>
      </div>
    </div>
  )
}

GallerySection.propTypes = {}

export default GallerySection
