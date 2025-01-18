'use client';

import Image from 'next/image';
import React from 'react';
import SidebarItem from './sidebar-item';
import { usePathname, useRouter } from 'next/navigation';

// export interface SidebarProps {}

export default function Sidebar() {
  const router = useRouter();
  const pathName = usePathname();
  const handleExitClick = () => {
    router.push('/');
  };
  return (
    <aside className="fixed w-60 top-0 left-0 h-screen  bg-gray-900">
      <div className="flex flex-col h-full w-full pl-4  pb-4 pt-8 pr-1 overflow-y-auto">
        <Image
          className="mx-auto mb-[77px]"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="Logo"
        />
        <ul className="flex flex-col gap-7">
          <SidebarItem
            current={pathName === '/dashboard'}
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathName === '/companies'}
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="briefcase icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          className="flex items-center gap-2 mt-auto mx-auto p-6"
          onClick={handleExitClick}
        >
          <Image
            src="/icons/exit-arrow.svg"
            alt="exit icon"
            width={18}
            height={18}
          />
          <span className="text-base text-zinc-50">Exit</span>
        </button>
      </div>
    </aside>
  );
}
