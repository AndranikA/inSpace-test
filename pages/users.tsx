import { useState } from 'react';
import Head from 'next/head';

import { Layout } from '@/components/designSystem/structural';
import UserAddEditModal from '@/components/users/UserAddEditModal';
import UserDeleteModal from '@/components/users/UserDeleteModal';
import UserSidebarContent from '@/components/users/UserSidebarContent';
import UserTable from '@/components/users/UserTable';
import { UserType } from '@/components/users/types';

export default function Users() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currUser, setCurrUser] = useState<UserType | null>(null);

  const onEdit = (user: UserType) => {
    setOpen(true);
    setCurrUser(user);
  };
  const onDelete = (user: UserType) => {
    setOpenDelete(true);
    setCurrUser(user);
  };
  return (
    <>
      <Head>
        <title>InSpace/Users</title>
      </Head>
      <Layout sidebarContent={<UserSidebarContent onAdd={() => setOpen(true)} />}>
        <UserTable onEdit={onEdit} onDelete={onDelete}/>
        <UserAddEditModal open={open} onChange={setOpen} onClose={() => setCurrUser(null)} user={currUser} />
        <UserDeleteModal open={openDelete} onChange={setOpenDelete} onClose={() => setCurrUser(null)} user={currUser} />
      </Layout>
    </>
  );
}

const users = [
  {
    registeredAt: '2023-01-18T13:54:10.544Z',
    name: 'Gregory Sporer',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/566.jpg',
    isBanned: false,
    id: '1',
  },
  {
    registeredAt: '2023-01-18T12:31:07.086Z',
    name: 'Lena Ward',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/200.jpg',
    isBanned: true,
    id: '2',
  },
  {
    registeredAt: '2023-01-18T19:09:34.329Z',
    name: 'Miss Sharon Rath',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg',
    isBanned: false,
    id: '3',
  },
  {
    registeredAt: '2023-01-19T00:46:18.940Z',
    name: 'Bernadette Littel',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg',
    isBanned: false,
    id: '4',
  },
  {
    registeredAt: '2023-01-19T07:49:47.846Z',
    name: 'Moses Schumm',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg',
    isBanned: false,
    id: '5',
  },
  {
    registeredAt: '2023-01-19T04:05:40.495Z',
    name: 'Jamie Jacobs',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/698.jpg',
    isBanned: false,
    id: '6',
  },
  {
    registeredAt: '2023-01-18T11:59:40.707Z',
    name: 'Chris Lakin',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/853.jpg',
    isBanned: true,
    id: '7',
  },
  {
    registeredAt: '2023-01-18T16:24:46.442Z',
    name: 'Kellie Reichert',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg',
    isBanned: false,
    id: '8',
  },
  {
    registeredAt: '2023-01-19T05:38:10.330Z',
    name: 'Susan Reynolds',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/86.jpg',
    isBanned: false,
    id: '9',
  },
  {
    registeredAt: '2023-01-19T03:09:14.797Z',
    name: 'Joshua Parker',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/13.jpg',
    isBanned: false,
    id: '10',
  },
  {
    registeredAt: '2023-01-18T20:21:02.845Z',
    name: 'Kay Stracke',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/755.jpg',
    isBanned: false,
    id: '11',
  },
  {
    registeredAt: '2023-01-19T00:10:31.531Z',
    name: 'Jim Waelchi',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/152.jpg',
    isBanned: false,
    id: '12',
  },
  {
    registeredAt: '2023-01-18T14:22:43.081Z',
    name: 'Colleen Johnson',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg',
    isBanned: false,
    id: '13',
  },
  {
    registeredAt: '2023-01-18T20:19:37.332Z',
    name: 'Clyde Hessel',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/309.jpg',
    isBanned: true,
    id: '14',
  },
  {
    registeredAt: '2023-01-18T12:15:08.183Z',
    name: 'Jacob Sawayn',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg',
    isBanned: false,
    id: '15',
  },
  {
    registeredAt: '2023-01-18T21:41:09.160Z',
    name: 'Lisa Oberbrunner PhD',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/161.jpg',
    isBanned: false,
    id: '16',
  },
  {
    registeredAt: '2023-01-19T06:26:58.498Z',
    name: 'Susie Hoeger',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/260.jpg',
    isBanned: false,
    id: '17',
  },
  {
    registeredAt: '2023-01-19T03:02:54.082Z',
    name: 'Ms. Carlos Halvorson Jr.',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg',
    isBanned: false,
    id: '18',
  },
  {
    registeredAt: '2023-01-18T16:49:18.716Z',
    name: 'Gabriel Wintheiser',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1126.jpg',
    isBanned: false,
    id: '19',
  },
  {
    registeredAt: '2023-01-19T04:28:18.471Z',
    name: 'Don Dare',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg',
    isBanned: true,
    id: '20',
  },
  {
    registeredAt: '2023-01-18T15:44:09.919Z',
    name: 'Mrs. Ken Rath V',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg',
    isBanned: false,
    id: '21',
  },
  {
    registeredAt: '2023-01-18T23:51:51.754Z',
    name: 'Shelley Jacobi',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/705.jpg',
    isBanned: false,
    id: '22',
  },
  {
    registeredAt: '2023-01-19T04:17:19.583Z',
    name: 'Samantha Mohr',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/620.jpg',
    isBanned: false,
    id: '23',
  },
  {
    registeredAt: '2023-01-18T23:31:53.706Z',
    name: 'Homer Conn',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1040.jpg',
    isBanned: false,
    id: '24',
  },
  {
    registeredAt: '2023-01-18T10:52:39.693Z',
    name: 'Moses Koelpin',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/520.jpg',
    isBanned: true,
    id: '25',
  },
  {
    registeredAt: '2023-01-18T20:58:51.974Z',
    name: 'Delbert Raynor',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/892.jpg',
    isBanned: false,
    id: '26',
  },
  {
    registeredAt: '2023-01-19T07:35:50.120Z',
    name: 'Johanna Rutherford',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/771.jpg',
    isBanned: true,
    id: '27',
  },
  {
    registeredAt: '2023-01-18T14:26:33.725Z',
    name: 'Elvira Hahn',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/474.jpg',
    isBanned: false,
    id: '28',
  },
  {
    registeredAt: '2023-01-19T04:22:21.401Z',
    name: 'Marta Stokes',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/687.jpg',
    isBanned: false,
    id: '29',
  },
  {
    registeredAt: '2023-01-18T20:43:32.950Z',
    name: 'Jana Gibson',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1210.jpg',
    isBanned: false,
    id: '30',
  },
];
