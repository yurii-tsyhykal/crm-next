import clsx from 'clsx';
import React from 'react';

export interface SummaryHeaderTableProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export default function SummaryHeaderTable({
  align = 'left',
  children,
}: SummaryHeaderTableProps) {
  return (
    <th
      className={clsx(
        'py-1.5 px-5 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm',
        `text-${align}`,
        '[&:nth-child(3n+1)]:text-white [&:nth-child(3n+1)]:bg-gray-900',
        '[&:nth-child(3n+2)]:text-gray-900 [&:nth-child(3n+2)]:bg-purple-200',
        '[&:nth-child(3n+3)]:text-gray-900 [&:nth-child(3n+3)]:bg-lime-200',
      )}
    >
      {children}
    </th>
  );
}
