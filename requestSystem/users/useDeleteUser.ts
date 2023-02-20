import { useMutation, useQueryClient } from 'react-query';

import { deleteUser } from './api';

    
const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteUser, {
    onSuccess: () => { // on scale onSuccess can be a parameter
      // Invalidate and refetch
      queryClient.invalidateQueries('users')
    },
  })
};

export default useDeleteUser;
