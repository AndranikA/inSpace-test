import { useForm, SubmitHandler } from 'react-hook-form';

import UsernameField from '../auth/UsernameField';
import UserIsBannedField from './UserIsBannedField';

import { UserType } from './types';

type LoginDataType = {
  username: string;
  isBanned: boolean;
};

export default function UserForm({ user }: {user: UserType | null}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>({
    defaultValues: {
      username: user?.name || '',
      isBanned: user?.isBanned || false
    },
  });

  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    console.log(data, errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UsernameField control={control} error={errors.username} />
      <UserIsBannedField control={control} />
    </form>
  );
}
