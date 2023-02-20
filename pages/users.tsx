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
