import { useMutation, useQueryClient } from 'react-query';

import { editUser } from './api';

const useEditUser = () => {
  const queryClient = useQueryClient()

  return useMutation(editUser, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('users')
    },
  })
};

export default useEditUser;
