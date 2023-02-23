import { ReactNode } from 'react'

import useGetUser from '@/requestSystem/auth/useAuth'

import { Sidebar } from './Sidebar'

type LayoutProps = {
  children: ReactNode
  sidebarContent: ReactNode
}
export function Layout({ children, sidebarContent }: LayoutProps) {
  useGetUser()
  
  return (
    <main className='bg-gray-200 flex h-screen'>
      <Sidebar>
        {sidebarContent}
      </Sidebar>
      {children}
    </main>
  )
}
