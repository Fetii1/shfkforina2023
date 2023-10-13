import Button from '@/components/Button'

export default function Tabela() {
  const data = [
    {
      text: 'Plan Programi Vjetor',
      href: '/documents/Planprogrami-Vjetor-2023-2024-Forinë-SHQIP.doc',
      download: '/documents/Planprogrami-Vjetor-2023-2024-Forinë-SHQIP.doc',
    },
    {
      text: 'Orari i Punës - Para dite',
      href: '/documents/Orari-i-Punës-Para-Dite-23-24.docx',
      download: '/documents/Orari-i-Punës-Para-Dite-23-24.docx',
    },
    {
      text: 'Orari i Punës - Pas dite',
      href: '/documents/Orari-i-Punës-Pas-Dite-23-24.docx',
      download: '/documents/Orari-i-Punës-Pas-Dite-23-24.docx',
    },
    {
      text: 'Plani Zhvillimor',
      href: '/documents/Plani-Zhvillimor.docx',
      download: '/documents/Plani-Zhvillimor.docx',
    },
    {
      text: 'Raport Vjetor 2022-2023',
      href: '/documents/Raport-Vjetor-2022-2023.docx',
      download: '/documents/Raport-Vjetor-2022-2023.docx',
    },
    {
      text: 'Годишна програма',
      href: '/documents/Годишна-програма-на-основното-училиште-2023-2024.docx',
      download: '/documents/Годишна-програма-на-основното-училиште-2023-2024.docx',
    },
    {
      text: 'Programa Foto',
      href: '/documents/20231002_113650.jpg',
      download: '/documents/20231002_113650.jpg',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full grid justify-items-center sm:grid-cols-2 gap-5 md:grid-cols-3">
        {data.map((btn, index) => (
          <a key={index} href={`${btn.href}`} download={`${btn.download}`}>
            <Button
              text={btn.text}
              className={
                'hover:bg-blue-950 transition ease-in-out duration-200 hover:-translate-y-1'
              }
            />
          </a>
        ))}
      </div>
    </div>
  )
}
