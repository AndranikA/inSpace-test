import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';
import { useMutation } from 'react-query';
import { deleteCookie } from 'cookies-next';

import { userState } from '@/state';

import { logout } from './api';
    
const UseLogout = () => {
  const router = useRouter()
  const setUserState = useSetAtom(userState)

  return useMutation(logout, {
    onSuccess: () => {
      deleteCookie('token')
      setUserState(null)
      router.push('/login')
    },
  })
};

export default UseLogout;
