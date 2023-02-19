import type { ReactNode } from 'react';

import { Text } from '@/components/designSystem/informational';

const UserTableCell = ({ children }: { children: ReactNode }) => {
  return <Text className='text-gray-900 text-center w-1/4 p-2'>{children}</Text>;
};

export default UserTableCell
