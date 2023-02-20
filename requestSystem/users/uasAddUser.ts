import { useMutation, useQueryClient } from 'react-query';

import { addUser } from './api';
    
const useAddUser = () => {
  const queryClient = useQueryClient()

  return useMutation(addUser, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('users')
    },
  })
};

export default useAddUser;
