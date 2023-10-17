import React from 'react'

export default function SectionTitle({ text, className }) {
  return (
    <div className={`${className} max-w-[500px] mx-auto pb-8 mb-16 border-b-4`}>
      <p className="text-3xl mx-auto w-max font-bold md:text-5xl">{text}</p>
    </div>
  )
}
