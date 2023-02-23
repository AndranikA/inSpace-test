import { useMutation, useQueryClient } from 'react-query';
import { useSetAtom } from 'jotai';

import { openDeleteModalState, currentUserState } from '@/components/users/state';

import { deleteUser } from './api';

    
const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const setOpenDeleteModal = useSetAtom(openDeleteModalState)
  const setCurrentUser = useSetAtom(currentUserState)

  return useMutation(deleteUser, {
    onSuccess: () => { // on scale onSuccess can be a parameter
      setOpenDeleteModal(false)
      setCurrentUser(null)
      queryClient.invalidateQueries('users')
    },
  })
};

export default useDeleteUser;
