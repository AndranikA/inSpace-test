import { ReactNode } from 'react';
import { useAtomValue } from 'jotai';

import { Text } from '@/components/designSystem/informational';
import { MainNav } from '@/components/designSystem/navigational';

import { userState } from '@/state';

import LogoutBtn from '../../auth/LogoutBtn'

const SidebarUserInfo = () => {
  const user = useAtomValue(userState)
  
  if (!user) return null

  return (
    <Text as='h1' className='text-black text-lg mb-4 font-bold capitalize'>Welcome, {user.name}</Text>
  )
}

export function Sidebar({children}: {children: ReactNode}) {
  return (
    <aside className='bg-white min-w-max p-6 flex flex-col'>
      <SidebarUserInfo />
      <MainNav />
      {children}
      <LogoutBtn />
    </aside>
  )
}
