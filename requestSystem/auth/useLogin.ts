import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { userState } from '@/state';

import { login } from './api';
    
const UseLogin = () => {
  const router = useRouter()
  const setUserState = useSetAtom(userState)

  return useMutation(login, {
    onSuccess: (data) => {
      console.log(data)
      setUserState(data)
      router.push('/users')
    },
  })
};

export default UseLogin;
