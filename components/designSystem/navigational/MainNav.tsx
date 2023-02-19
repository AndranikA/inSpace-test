import Link from 'next/link';
import { ReactNode } from 'react';

type MainNavLinkProps = {
  href: string;
  children: ReactNode;
};
export function MainNavLink({ href, children }: MainNavLinkProps) {
  return (
    <Link
      href={href}
      className='text-blue-600 underline hover:text-blue-800 focus:text-gray-500 focus:no-underline mr-3 inline-block'
    >
      {children}
    </Link>
  );
}

export function MainNav() {
  return (
    <nav>
      <MainNavLink href='/users'>Users</MainNavLink>
      <MainNavLink href='/products'>Products</MainNavLink>
    </nav>
  );
}
