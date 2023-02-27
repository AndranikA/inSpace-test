import { useQuery } from 'react-query';
import { useSetAtom } from 'jotai';

import { productsState } from '@/components/products/state';

import { ProductType } from '@/components/products/types';

import { fetchProducts } from './api';

const useGetProducts = () => {
  const setProducts = useSetAtom(productsState);
  return useQuery<ProductType[], Error>('products', fetchProducts, {
    onSuccess: (data) => {
      setProducts(data);
    },
  });
};

export default useGetProducts;
