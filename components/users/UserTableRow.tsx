import Image from 'next/image';

import UserTableCell from './UserTableCell';
import DeleteUserCell from './DeleteUserCell';
import EditUserCell from './EditUserCell';

import { UserType } from './types';

const UserTableRow = ({ user }: {user: UserType }) => {
  const { id, name, avatar, isBanned, registeredAt } = user;

  return (
    <li className='flex justify-between border-b-2 border-black'>
      <UserTableCell>{id}</UserTableCell>
      <UserTableCell>{name}</UserTableCell>
      <UserTableCell>
        <Image src={avatar} alt={name} width={20} height={20} className='rounded-full inline-block' />
      </UserTableCell>
      <UserTableCell>{isBanned ? 'Yes' : 'No'}</UserTableCell>
      <UserTableCell>{new Date(registeredAt).toDateString()}</UserTableCell>
      <EditUserCell user={user} />
      <DeleteUserCell user={user} />
    </li>
  );
};

export default UserTableRow;
