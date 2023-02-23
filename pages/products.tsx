import Head from 'next/head';
import { ReactNode } from 'react';

import { Layout } from '@/components/designSystem/structural';
import { Text } from '@/components/designSystem/informational';

type ProductType = {
  createdAt: string;
  name: string;
  description: string;
  isHidden: boolean;
  parentId: number | null;
  id: string;
};
const ProductCell = ({ children }: { children: ReactNode }) => {
  return <Text className='text-gray-900 text-lg text-center w-1/4'>{children}</Text>;
};
const ProductRow = ({ id, name, description, isHidden, createdAt }: ProductType) => {
  return (
    <li className='flex justify-between'>
      <ProductCell>{id}</ProductCell>
      <ProductCell>{name}</ProductCell>
      {/* <ProductCell>{description}</ProductCell> */}
      <ProductCell>{isHidden ? 'Yes' : 'No'}</ProductCell>
      <ProductCell>{createdAt}</ProductCell>
    </li>
  );
};
export default function Products() {
  return (
    <>
      <Head>
        <title>InSpace/Products</title>
      </Head>
      <Layout sidebarContent={null}>
        <ul className='grow list-none max-h-screen overflow-y-scroll p-5'>
          {products.map(product => <ProductRow key={product.id} {...product} />)}
        </ul>
      </Layout>
    </>
  );
}

const products = [
  {
    createdAt: '2023-01-18T20:27:19.814Z',
    name: 'Tasty Wooden Fish',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    isHidden: false,
    parentId: null,
    id: '1',
  },
  {
    createdAt: '2023-01-18T23:06:20.632Z',
    name: 'Tasty Frozen Table',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    isHidden: false,
    parentId: 1,
    id: '2',
  },
  {
    createdAt: '2023-01-18T18:49:53.509Z',
    name: 'Elegant Soft Tuna',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    isHidden: false,
    parentId: 1,
    id: '3',
  },
  {
    createdAt: '2023-01-19T07:01:14.798Z',
    name: 'Bespoke Metal Towels',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    isHidden: false,
    parentId: null,
    id: '4',
  },
  {
    createdAt: '2023-01-19T09:30:40.633Z',
    name: 'Gorgeous Granite Soap',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    isHidden: false,
    parentId: 2,
    id: '5',
  },
  {
    createdAt: '2023-01-19T08:16:33.110Z',
    name: 'Refined Bronze Tuna',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    isHidden: false,
    parentId: 3,
    id: '6',
  },
  {
    createdAt: '2023-01-19T08:22:32.026Z',
    name: 'Rustic Wooden Salad',
    description: 'The Football Is Good For Training And Recreational Purposes',
    isHidden: false,
    parentId: null,
    id: '7',
  },
  {
    createdAt: '2023-01-18T16:20:10.785Z',
    name: 'Incredible Steel Mouse',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    isHidden: false,
    parentId: 2,
    id: '8',
  },
  {
    createdAt: '2023-01-18T23:20:27.010Z',
    name: 'Handmade Frozen Keyboard',
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    isHidden: false,
    parentId: null,
    id: '9',
  },
  {
    createdAt: '2023-01-18T14:01:19.395Z',
    name: 'Licensed Soft Bike',
    description: 'The Football Is Good For Training And Recreational Purposes',
    isHidden: false,
    parentId: null,
    id: '10',
  },
  {
    createdAt: '2023-01-19T04:39:07.554Z',
    name: 'Refined Rubber Chips',
    description: 'The Football Is Good For Training And Recreational Purposes',
    isHidden: false,
    parentId: 1,
    id: '11',
  },
  {
    createdAt: '2023-01-18T16:03:35.585Z',
    name: 'Tasty Frozen Ball',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    isHidden: false,
    parentId: null,
    id: '12',
  },
  {
    createdAt: '2023-01-18T22:32:58.628Z',
    name: 'Recycled Bronze Fish',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    isHidden: false,
    parentId: null,
    id: '13',
  },
  {
    createdAt: '2023-01-19T09:34:58.302Z',
    name: 'Practical Rubber Bacon',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    isHidden: false,
    parentId: null,
    id: '14',
  },
  {
    createdAt: '2023-01-18T12:00:36.924Z',
    name: 'Unbranded Frozen Sausages',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    isHidden: false,
    parentId: 4,
    id: '15',
  },
  {
    createdAt: '2023-01-18T21:34:12.792Z',
    name: 'Licensed Fresh Gloves',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    isHidden: false,
    parentId: 4,
    id: '16',
  },
  {
    createdAt: '2023-01-18T21:50:40.981Z',
    name: 'Fantastic Steel Bacon',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    isHidden: false,
    parentId: null,
    id: '17',
  },
  {
    createdAt: '2023-01-19T09:15:36.118Z',
    name: 'Intelligent Frozen Hat',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    isHidden: false,
    parentId: null,
    id: '18',
  },
  {
    createdAt: '2023-01-19T08:11:58.526Z',
    name: 'Modern Wooden Bacon',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    isHidden: false,
    parentId: null,
    id: '19',
  },
  {
    createdAt: '2023-01-19T04:40:40.727Z',
    name: 'Fantastic Fresh Fish',
    description: 'The Football Is Good For Training And Recreational Purposes',
    isHidden: false,
    parentId: 16,
    id: '20',
  },
  {
    createdAt: '2023-01-18T16:01:17.129Z',
    name: 'Practical Metal Pizza',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    isHidden: false,
    parentId: 20,
    id: '21',
  },
  {
    createdAt: '2023-01-19T08:01:54.144Z',
    name: 'Fantastic Fresh Keyboard',
    description: 'The Football Is Good For Training And Recreational Purposes',
    isHidden: false,
    parentId: 21,
    id: '22',
  },
  {
    createdAt: '2023-01-19T00:32:11.862Z',
    name: 'Refined Granite Chicken',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    isHidden: false,
    parentId: null,
    id: '23',
  },
  {
    createdAt: '2023-01-19T06:39:54.479Z',
    name: 'Refined Granite Computer',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    isHidden: false,
    parentId: null,
    id: '24',
  },
  {
    createdAt: '2023-01-19T06:03:34.511Z',
    name: 'Licensed Plastic Bike',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    isHidden: false,
    parentId: null,
    id: '25',
  },
  {
    createdAt: '2023-01-18T15:24:05.212Z',
    name: 'Fantastic Granite Soap',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    isHidden: false,
    parentId: 25,
    id: '26',
  },
  {
    createdAt: '2023-01-19T03:38:42.598Z',
    name: 'Tasty Frozen Shoes',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    isHidden: false,
    parentId: 1,
    id: '27',
  },
  {
    createdAt: '2023-01-18T16:58:10.888Z',
    name: 'Modern Steel Chair',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    isHidden: false,
    parentId: null,
    id: '28',
  },
  {
    createdAt: '2023-01-19T07:18:32.664Z',
    name: 'Awesome Soft Bacon',
    description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    isHidden: false,
    parentId: null,
    id: '29',
  },
  {
    createdAt: '2023-01-19T03:15:55.366Z',
    name: 'Gorgeous Frozen Cheese',
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    isHidden: false,
    parentId: 4,
    id: '30',
  },
];
