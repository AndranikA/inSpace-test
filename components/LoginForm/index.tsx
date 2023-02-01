import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/action';
import UsernameField from './UsernameField';
import PasswordField from './PasswordField';

type LoginDataType = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>();

  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    console.log(data, errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
      <UsernameField control={control} error={errors.username} />
      <PasswordField control={control} error={errors.password} />
      <Button type='submit'>Login</Button>
    </form>
  );
}
