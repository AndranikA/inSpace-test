import { ModalDialog } from '@/components/designSystem/structural';
import UserAddEditForm from '@/components/users/userForm';

import { UserModalType } from './types';

const UserAddEditModal = ({ open, user, onChange, onClose }: UserModalType) => {
  return (
    <ModalDialog
      open={open}
      onChange={onChange}
      onClose={onClose}
      title={`${user ? 'Edit' : 'Add'} User`}
      primaryAction={{
        label: 'Submit',
        onClick: () => {},
      }}
    >
      <UserAddEditForm user={user} />
    </ModalDialog>
  );
}

export default UserAddEditModal
