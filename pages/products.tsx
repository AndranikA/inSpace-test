import Head from 'next/head';

import { Layout } from '@/components/designSystem/structural';
import ProductSidebarContent from '@/components/products/ProductSidebarContent';
import ProductTable from '@/components/products/ProductTable';

 const Products = () => {
  return (
    <>
      <Head>
        <title>InSpace/Products</title>
      </Head>
      <Layout sidebarContent={<ProductSidebarContent />}>
        <ProductTable />
      </Layout>
    </>
  );
}

export default Products
