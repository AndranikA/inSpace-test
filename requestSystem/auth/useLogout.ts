import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { deleteCookie } from 'cookies-next';

import { logout } from './api';
    
const UseLogout = () => {
  const router = useRouter()

  return useMutation(logout, {
    onSuccess: () => {
      deleteCookie('token')
      router.push('/login')
    },
  })
};

export default UseLogout;
