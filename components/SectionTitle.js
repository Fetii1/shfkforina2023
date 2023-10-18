import React from 'react'

export default function SectionTitle({ text, className }) {
  return (
    <div
      className={`${className} md:max-w-[500px] w-auto mx-10 md:mx-auto pb-8 pt-16 mb-16 border-b-4`}
    >
      <p className="text-3xl mx-auto w-max font-bold md:text-5xl">{text}</p>
    </div>
  )
}
