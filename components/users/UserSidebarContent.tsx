import { Text } from '@/components/designSystem/informational';

import { IconPlus } from '@/components/designSystem/informational/Icons';
import { Button } from '@/components/designSystem/action';

import UserFilters from './UserFilters';

const UserSidebarContent = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <div className='mt-8'>
      <Button onClick={onAdd} className='w-full mb-5'>
        <IconPlus className='inline-block mr-2' /> Add User
      </Button>
      <Text as='h1' className='text-gray text-lg mb-5'>
        Search for user
      </Text>
      <UserFilters />
    </div>
  );
};

export default UserSidebarContent
