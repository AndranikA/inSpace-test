import ProductTableCell from './ProductTableCell';

import { ProductType } from './types';

const ProductTableRow = ({ product, level }: { product: ProductType; level: number }) => {
  const { id, name, description, createdAt, children } = product;

  const hasChildren = children?.length !== 0;

  const renderChildren = () => {
    if (hasChildren) {
      const currentLevel = level + 1;
      return children?.map((child) => <ProductTableRow key={child.id} product={child} level={currentLevel} />);
    } else {
      return null;
    }
  };

  return (
    <li className='flex flex-wrap border-t-2 border-black' key={id} style={{ paddingLeft: level * 20 }}>
      <ProductTableCell w='w-8'>{id}</ProductTableCell>
      <ProductTableCell w='w-40'>{name}</ProductTableCell>
      <ProductTableCell w='w-96'>{description}</ProductTableCell>
      <ProductTableCell>{new Date(createdAt).toDateString()}</ProductTableCell>
      <ul>{renderChildren()}</ul>
    </li>
  );
};

export default ProductTableRow;
