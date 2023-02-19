import Head from 'next/head';

import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login/inSpace</title>
      </Head>
      <main className='bg-gray-200 flex min-h-screen justify-center items-center'>
        <LoginForm />
      </main>
    </>
  );
}
