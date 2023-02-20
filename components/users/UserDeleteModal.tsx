import { ModalDialog } from '@/components/designSystem/structural';
import { Text } from '@/components/designSystem/informational';
import { Button } from '@/components/designSystem/action';

import useDeleteUser from '@/requestSystem/users/useDeleteUser';

import { UserModalType } from './types';

const UserDeleteModal = ({ open, user, onChange, onClose }: UserModalType) => {
  const { mutate: deleteUser, isLoading } = useDeleteUser()
 
  return (
    <ModalDialog
      open={open}
      onChange={onChange}
      onClose={onClose}
      title='Remove User'
    >
      <Text as='div' className='text-lg font-bold'>
        Are you sure you want to remove the {user?.name}?
      </Text>
      <div className='mt-3 p-2'>
        <Button type='submit' working={isLoading} onClick={() => deleteUser(user?.id as string)}>Delete</Button>
      </div>
    </ModalDialog>
  );
}

export default UserDeleteModal
