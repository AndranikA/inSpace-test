
import { useSetAtom } from 'jotai';
import { useQuery } from 'react-query'

import { LoginResponseType } from '@/components/auth/types';

import { userState } from '@/state';

import { fetchUser } from './api';

const useGetUser = () => {
  const setUserState = useSetAtom(userState)
  
  return useQuery<LoginResponseType, Error>('user', fetchUser, {
    onSuccess: (data) => {
      setUserState(data)
    }
  })
}

export default useGetUser
