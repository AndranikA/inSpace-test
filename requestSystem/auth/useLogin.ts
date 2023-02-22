import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { login } from './api';
    
const UseLogin = () => {
  const router = useRouter()

  return useMutation(login, {
    onSuccess: () => {
      router.push('/users')
    },
  })
};

export default UseLogin;
