import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '@/components/designSystem/action';

import useEditUser from '@/requestSystem/users/useEditUser';
import useAddUser from '@/requestSystem/users/uasAddUser';

import UserIsBannedField from './UserIsBannedField';
import UsernameField from '../auth/UsernameField';

import { UserType } from './types';

const UserForm = ({ user }: {user: UserType | null}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    defaultValues: {
      id: user?.id,
      name: user?.name || '',
      isBanned: user?.isBanned || false
    },
  });
  const { mutate: editUser, isLoading: editIsLoading } = useEditUser()
  const { mutate: addUser, isLoading: addIsLoading } = useAddUser()

  const onSubmit: SubmitHandler<UserType> = (data) => {
    user ? editUser(data) : addUser(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UsernameField control={control} error={errors.name} />
      <UserIsBannedField control={control} />
      <div className='mt-3 p-2'>
        <Button type='submit' working={editIsLoading || addIsLoading}>{user ? 'Edit' : 'Add'} User</Button>
      </div>
    </form>
  );
}

export default UserForm
