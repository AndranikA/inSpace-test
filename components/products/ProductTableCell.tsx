import type { ReactNode } from 'react';

import { Text } from '@/components/designSystem/informational';

const ProductTableCell = ({ children, w = '1' }: { children: ReactNode, w?: string }) => {
  return <Text className={`text-gray-900 p-2 ${w}`}>{children}</Text>;
};

export default ProductTableCell
