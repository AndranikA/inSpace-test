import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/designSystem/action';

import useLogin from '@/requestSystem/auth/useLogin';

import UsernameField from './UsernameField';
import PasswordField from './PasswordField';

import { LoginDataType } from './types';

 const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>();

  const { mutate: login, isLoading } = useLogin()

  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    login(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
      <UsernameField control={control} error={errors.name} />
      <PasswordField control={control} error={errors.password} />
      <Button type='submit' working={isLoading}>Login</Button>
    </form>
  );
}

export default LoginForm
