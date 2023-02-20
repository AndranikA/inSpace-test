import UserTableHead from './UserTableHead';
import UserTableRow from './UserTableRow';
import { Text } from '@/components/designSystem/informational';

import useGetUsers from '@/requestSystem/users/useGetUsers';
import { UserType } from './types';

const UserTable = ({ onEdit, onDelete }: { onEdit: (user: UserType) => void; onDelete: (user: UserType) => void }) => {
  const { data: users, isLoading } = useGetUsers();

  if (isLoading) return <Text className='font-bold text-lg'>...Loading</Text>;

  return (
    <ul className='grow list-none max-h-screen overflow-y-scroll p-5 pt-0'>
      <UserTableHead />
      {users?.map((user) => (
        <UserTableRow key={user.id} {...user} onEdit={() => onEdit(user)} onDelete={() => onDelete(user)} />
      ))}
    </ul>
  );
};

export default UserTable;
