import Head from 'next/head';

import { Layout } from '@/components/designSystem/structural';
import UserAddEditModal from '@/components/users/UserAddEditModal';
import UserDeleteModal from '@/components/users/UserDeleteModal';
import UserSidebarContent from '@/components/users/UserSidebarContent';
import UserTable from '@/components/users/UserTable';

 const Users = () => {
  return (
    <>
      <Head>
        <title>InSpace/Users</title>
      </Head>
      <Layout sidebarContent={<UserSidebarContent />}>
        <UserTable />
        <UserAddEditModal />
        <UserDeleteModal />
      </Layout>
    </>
  );
}

export default Users
