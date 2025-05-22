'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: string;
}

export default function Button({ disabled, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        ' bg-gray-900 rounded block text-zinc-50 py-2.5 px-5 font-medium text-base',
        !disabled && 'hover:bg-gray-800 active: bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    >{ children}</button>
  );
}
