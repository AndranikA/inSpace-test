import { Text } from '@/components/designSystem/informational';

import ProductFilters from './ProductFilters';

const ProductSidebarContent = () => {  
  return (
    <div className='mt-8'>
      <Text as='h1' className='text-gray text-lg mb-5'>
        Search for product
      </Text>
      <ProductFilters />
    </div>
  );
};

export default ProductSidebarContent
