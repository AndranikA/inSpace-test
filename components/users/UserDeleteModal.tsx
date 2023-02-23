import { useAtom } from 'jotai';

import { ModalDialog } from '@/components/designSystem/structural';
import { Text } from '@/components/designSystem/informational';
import { Button } from '@/components/designSystem/action';

import useDeleteUser from '@/requestSystem/users/useDeleteUser';

import { openDeleteModalState, currentUserState } from './state';

const UserDeleteModal = () => {
  const { mutate: deleteUser, isLoading } = useDeleteUser()
  const [openDeleteModal, setOpenAddEditModal] = useAtom(openDeleteModalState)
  const [currentUser, setCurrentUser] = useAtom(currentUserState)
 
  return (
    <ModalDialog
      open={openDeleteModal}
      onChange={setOpenAddEditModal}
      onClose={() => setCurrentUser(null)}
      title='Remove User'
    >
      <Text as='div' className='text-lg font-bold'>
        Are you sure you want to remove the {currentUser?.name}?
      </Text>
      <div className='mt-3 p-2'>
        <Button type='submit' working={isLoading} onClick={() => deleteUser(currentUser?.id as string)}>Delete</Button>
      </div>
    </ModalDialog>
  );
}

export default UserDeleteModal
