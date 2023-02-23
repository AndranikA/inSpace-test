import { useSetAtom } from 'jotai/react';
import { useMutation, useQueryClient } from 'react-query';

import { openAddEditModalState, currentUserState } from '@/components/users/state';

import { addUser } from './api';
    
const useAddUser = () => {
  const queryClient = useQueryClient()
  const setOpenAddEditModal = useSetAtom(openAddEditModalState)
  const setCurrentUser = useSetAtom(currentUserState)

  return useMutation(addUser, {
    onSuccess: () => {
      setOpenAddEditModal(false)
      setCurrentUser(null)
      queryClient.invalidateQueries('users')
    },
  })
};

export default useAddUser;
