import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

type LayoutProps = {
  children: ReactNode
  sidebarContent: ReactNode
}
export function Layout({ children, sidebarContent }: LayoutProps) {
  return (
    <main className='bg-gray-200 flex h-screen'>
      <Sidebar>
        {sidebarContent}
      </Sidebar>
      {children}
    </main>
  )
}
