import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface SidebarItemProps {
  current?: boolean;
  children: React.ReactNode;
  src: string;
  alt: string;
  pathname: string;
}

export default function SidebarItem({
  current,
  children,
  src,
  alt,
  pathname,
}: SidebarItemProps) {
  return (
    <li className=" py-[6px]">
      <Link
        href={pathname}
        className={clsx(
          'flex gap-[14px] relative ',
          current &&
            `after:absolute after:content-[''] after:top-[-6px]  after:right-0  after:w-1  after:min-h-9  after:ml-auto after:bg-purple-200 after:rounded-sm`,
        )}
      >
        <Image src={src} alt={alt} width={18} height={18} />
        <span className=" font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
