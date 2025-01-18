import React from 'react';
import StatusLabel, { Status } from './status-label';
import Image from 'next/image';
import clsx from 'clsx';

export interface CompanyRowProps {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedDate: string;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not Active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedDate,
}: CompanyRowProps) {
  return (
    <tr className="bg-zinc-50 text-gray-900 text-sm font-medium text-center ">
      <td className="rounded-l text-xs text-orange-400 border-l-4 border-orange-400 py-5">
        {category}
      </td>
      <td>
        <a href={`/companies/${id}`}>{company}</a>
      </td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div
          className={clsx(
            'flex justify-center ',
            promotion ? 'text-green-700 gap-1' : 'text-red-700 gap-[6px]',
          )}
        >
          <Image
            src={`/icons/${promotion ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
            width={16}
            height={16}
          />
          {promotion ? 'Yes' : 'No'}
        </div>
      </td>
      <td>{country}</td>
      <td className="rounded-r">
        {new Date(joinedDate).toLocaleDateString('pl-PL')}
      </td>
    </tr>
  );
}
