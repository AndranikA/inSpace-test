import { ChangeEvent } from 'react';
import { useAtom } from 'jotai';

import { TextField } from '@/components/designSystem/input';

import { productsFilters } from './state';

const ProductFilters = () => {
  const [byNameDesc, setFilterProducts] = useAtom(productsFilters);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterProducts(value);
  };

  return (
    <div>
      <TextField
        type='text'
        label='Product Name'
        placeholder='Product Name here'
        name='byNameDesc'
        onChange={handleOnChange}
        value={byNameDesc}
      />
    </div>
  );
};

export default ProductFilters;
