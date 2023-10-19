import React from 'react'

export default function SectionTitle({ children, className }) {
  return (
    <div
      className={`${className} sm:max-w-[380px] w-auto mx-10 sm:mx-auto pb-8 lg:mb-16 pt-16 border-b-4`}
    >
      <p className="text-3xl mx-auto w-max font-bold md:text-5xl">{children}</p>
    </div>
  )
}
