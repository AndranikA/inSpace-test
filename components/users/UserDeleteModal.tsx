import { ModalDialog } from '@/components/designSystem/structural';
import { Text } from '@/components/designSystem/informational';

import { UserModalType } from './types';

const UserDeleteModal = ({ open, user, onChange, onClose }: UserModalType) => {
  return (
    <ModalDialog
      open={open}
      onChange={onChange}
      onClose={onClose}
      title='Remove User'
      primaryAction={{
        label: 'Delete',
        onClick: () => {},
        variant: 'caution',
      }}
    >
      <Text as='div' className='text-lg font-bold'>
        Are you sure you want to remove the {user?.name}?
      </Text>
    </ModalDialog>
  );
}

export default UserDeleteModal
