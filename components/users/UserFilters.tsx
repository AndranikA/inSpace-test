import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';

import { TextField, Checkbox } from '@/components/designSystem/input';

import { filterUsers } from './state';

const UserFilters = () => {
  const [{ byName, byIsBanned }, setFilterUsers] = useAtom(filterUsers);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFilterUsers((p) => ({...p, [name]: type === 'checkbox' ? checked : value }));
  };

  return (
    <div>
      <TextField
        type='text'
        label='Username'
        placeholder='Username'
        name='byName'
        onChange={handleOnChange}
        value={byName}
      />
      <Checkbox name='byIsBanned' onChange={handleOnChange} checked={byIsBanned}>
        Is Banned
      </Checkbox>
    </div>
  );
};

export default UserFilters;
