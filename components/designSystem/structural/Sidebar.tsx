import { ReactNode } from 'react';

import LogoutBtn from '../../auth/LogoutBtn'

import { Text } from '@/components/designSystem/informational';
import { MainNav } from '@/components/designSystem/navigational';

export function Sidebar({children}: {children: ReactNode}) {
  return (
    <aside className='bg-white w-64 p-6 flex flex-col'>
      <Text as='h1' className='text-black text-lg mb-4'>John Doe</Text>
      <MainNav />
      {children}
      <LogoutBtn />
    </aside>
  )
}
