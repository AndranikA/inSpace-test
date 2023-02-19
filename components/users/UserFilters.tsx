import { useForm, SubmitHandler } from 'react-hook-form';

import UsernameField from '@/components/auth/UsernameField';
import UserIsBannedField from '@/components/users/UserIsBannedField';

import { UserType } from './types';

const UserFilters = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit: SubmitHandler<UserType> = (data) => {
    console.log(data, errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UsernameField control={control} error={errors.name} />
      <UserIsBannedField control={control} />
    </form>
  );
};

export default UserFilters
