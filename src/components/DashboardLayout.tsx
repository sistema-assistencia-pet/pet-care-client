'use client'

interface DashBoradLayoutProps {
  children?: React.ReactNode
  secondaryText?: string
  title: string
}

export default function DashboardLayout({
  children,
  secondaryText,
  title
}: DashBoradLayoutProps) {
  return (
    <div className="flex flex-col gap-8 px-8 py-12 w-full h-full">
      <div className='flex flex-row gap-8 justify-between w-full'>
        <h1 className="text-2xl font-bold">{title}</h1>
        {
          secondaryText && (
            <div
              className="cursor-default text-center font-semibold py-2 border rounded-md px-8"
            >
              {secondaryText}
            </div>
          )
        }
      </div>
      {children}
    </div>
  )
}
