import { useQuery } from 'react-query'
import { useAtom, useSetAtom } from 'jotai';

import { usersState } from '@/components/users/state';

import { UserType } from '@/components/users/types';

import { fetchUsers } from './api';

const useGetUsers = () => {
  const setUsers = useSetAtom(usersState)
  return useQuery<UserType[], Error>('users', fetchUsers, {
    onSuccess: (data) => {
      setUsers(data)
    }
  })
}

export default useGetUsers
