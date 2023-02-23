import { useAtomValue } from 'jotai';
import { Text } from '@/components/designSystem/informational';

import useGetUsers from '@/requestSystem/users/useGetUsers';

import { filteredUsersState } from './state';

import UserTableHead from './UserTableHead';
import UserTableRow from './UserTableRow';

const UserTable = () => {
  const { isLoading } = useGetUsers();
  const users = useAtomValue(filteredUsersState)
  
  if (isLoading) return <Text className='font-bold text-lg p-5'>...Loading</Text>;

  return (
    <ul className='grow list-none max-h-screen overflow-y-scroll p-5 pt-0'>
      <UserTableHead />
      {users?.map((user) => (
        <UserTableRow key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserTable;
