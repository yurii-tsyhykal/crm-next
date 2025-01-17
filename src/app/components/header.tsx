import Image from 'next/image';
import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-6 px-7 pl-96 border border-b border-solid border-gray-300 ">
      <h1 className="font-semibold text-3xl">{children}</h1>
      <div className="pl-9 border-l flex gap-3">
        <Image
          width={44}
          height={44}
          src="/images/avatar.png"
          alt="avatar image"
        />
        <div className="flex flex-col text-gray-900">
          <p className="font-semibold text-[15px] leading-6 ">Adam Smith</p>
          <p className="font-light text-sm">adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
