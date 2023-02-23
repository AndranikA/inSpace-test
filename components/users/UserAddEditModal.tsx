import { useAtom } from 'jotai'

import { ModalDialog } from '@/components/designSystem/structural';
import UserAddEditForm from '@/components/users/userForm';

import { currentUserState, openAddEditModalState } from './state';

const UserAddEditModal = () => {
  const [openAddEditModal, setOpenAddEditModal] = useAtom(openAddEditModalState)
  const [currentUser, setCurrentUser] = useAtom(currentUserState)

  return (
    <ModalDialog
      open={openAddEditModal}
      onChange={setOpenAddEditModal}
      onClose={() => setCurrentUser(null)}
      title={`${currentUser ? 'Edit' : 'Add'} User`}
    >
      <UserAddEditForm user={currentUser} />
    </ModalDialog>
  );
}

export default UserAddEditModal
