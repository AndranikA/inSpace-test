import LogoutBtn from '../auth/LogoutBtn'
import { Text } from '@/components/informational';
import { MainNav } from '@/components/navigational';

export function Sidebar() {
  return (
    <aside className='bg-white w-64 p-6 flex flex-col'>
      <Text as='h1' className='text-black text-lg mb-4'>John Doe</Text>
      <MainNav />
      <LogoutBtn />
    </aside>
  )
}
