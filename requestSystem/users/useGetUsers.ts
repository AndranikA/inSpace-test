import { useQuery } from 'react-query'

import { UserType } from '@/components/users/types';

import { fetchUsers } from './api';

const useGetUsers = () => {
  return useQuery<UserType[], Error>('users', fetchUsers)
}

export default useGetUsers
