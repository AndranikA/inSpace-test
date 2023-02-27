import { useAtomValue } from 'jotai';
import { Text } from '@/components/designSystem/informational';

import useGetProducts from '@/requestSystem/products/useGetProducts';

import { productsTreeState } from './state';

import ProductTableRow from './ProductTableRow';

const ProductTable = () => {
  const { isLoading } = useGetProducts();
  const productsTree = useAtomValue(productsTreeState)
  
  if (isLoading) return <Text className='font-bold text-lg p-5'>...Loading</Text>;

  return (
    <ul className='grow max-h-screen overflow-y-scroll p-5 pt-0'>
      {productsTree?.map((product) => (
        <ProductTableRow key={product.id} product={product} level={0} />
      ))}
    </ul>
  );
};

export default ProductTable;
