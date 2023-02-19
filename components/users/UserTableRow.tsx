import Image from 'next/image';

import { IconDelete, IconEdit } from '@/components/designSystem/informational/Icons';
import { Button } from '@/components/designSystem/action';
import UserTableCell from "./UserTableCell";

import { UserType, UserActionsType } from './types';

type UserRowType = UserType & UserActionsType;

const UserTableRow = ({ onEdit, onDelete, ...user }: UserRowType) => {
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
      <UserTableCell>
        <Button onClick={onEdit}>
          <IconEdit />
        </Button>
      </UserTableCell>
      <UserTableCell>
        <Button variant='caution' onClick={onDelete}>
          <IconDelete />
        </Button>
      </UserTableCell>
    </li>
  );
};

export default UserTableRow
