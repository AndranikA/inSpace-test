import { useMutation, useQueryClient } from 'react-query';
import { useSetAtom } from 'jotai/react';

import { openAddEditModalState, currentUserState } from '@/components/users/state';
import { editUser } from './api';

const useEditUser = () => {
  const queryClient = useQueryClient()
  const setOpenAddEditModal = useSetAtom(openAddEditModalState)
  const setCurrentUser = useSetAtom(currentUserState)

  return useMutation(editUser, {
    onSuccess: () => {
      setOpenAddEditModal(false)
      setCurrentUser(null)
      queryClient.invalidateQueries('users')
    },
  })
};

export default useEditUser;
