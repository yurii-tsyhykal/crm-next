import Image from 'next/image';
import React from 'react';
import SidebarItem from './sidebar-item';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed w-60 top-0 left-0 h-screen  bg-gray-900">
      <div className="flex flex-col h-full w-full p-4 pt-8 overflow-y-auto">
        <Image
          className="mx-auto mb-[77px]"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="Logo"
        />
        <ul className="flex flex-col gap-7">
          <SidebarItem
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="briefcase icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 mt-auto mx-auto p-6">
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
