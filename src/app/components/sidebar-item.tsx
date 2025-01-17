import Image from 'next/image';
import React from 'react';

export interface SidebarItemProps {
  children: React.ReactNode;
  src: string;
  alt: string;
  pathname: string;
}

export default function SidebarItem({
  children,
  src,
  alt,
  pathname,
}: SidebarItemProps) {
  return (
    <li>
      <a href={pathname} className="flex gap-[14px]">
        <Image src={src} alt={alt} width={18} height={18} />
        <span className=" font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  );
}
