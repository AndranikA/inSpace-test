import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

type LayoutProps = {
  children: ReactNode
}
export function Layout({ children}: LayoutProps) {
  return (
    <main className='bg-gray-200 flex h-screen'>
      <Sidebar />
      {children}
    </main>
  )
}
