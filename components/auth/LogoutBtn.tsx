import { Button } from '@/components/designSystem/action';
import UseLogout from '@/requestSystem/auth/useLogout';

export default function LogoutBtn() {
  const { mutate: logout, isLoading } = UseLogout()
  
  return (
    <Button className='mt-auto' onClick={() => logout()} working={isLoading}>Logout</Button>
  )
}
