'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

import type { ReactNode } from 'react';

const NavLink = memo(({ href, exact, children, className = '', scroll = false }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const classNameGroup = [isActive ? 'isActive' : '', className];

  return (
    <Link href={href} className={classNameGroup.join(' ')} scroll={scroll}>
      {children}
    </Link>
  );
});

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
  scroll?: boolean;
}

NavLink.displayName = 'NavLink';
export default NavLink;
