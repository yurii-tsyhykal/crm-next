import React from 'react';
import StatusLabel from './status-label';
import Image from 'next/image';
import clsx from 'clsx';
import { Company } from '@/lib/api';
import Link from 'next/link';

export interface CompanyRowProps {
  company: Company;
}

export default function CompanyRow({ company }: CompanyRowProps) {
  return (
    <tr className="bg-zinc-50 text-gray-900 text-sm font-medium text-center ">
      <td className="rounded-l text-xs text-orange-400 border-l-4 border-orange-400 py-5">
        {company.categoryTitle}
      </td>
      <td>
        <Link href={`/companies/${company.id}`}>{company.title}</Link>
      </td>
      <td>
        <StatusLabel status={company.status} />
      </td>
      <td>
        <div
          className={clsx(
            'flex justify-center ',
            company.hasPromotions
              ? 'text-green-700 gap-1'
              : 'text-red-700 gap-[6px]',
          )}
        >
          <Image
            src={`/icons/${company.hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
            width={16}
            height={16}
          />
          {company.hasPromotions ? 'Yes' : 'No'}
        </div>
      </td>
      <td>{company.countryTitle}</td>
      <td className="rounded-r">
        {new Date(company.joinedDate).toLocaleDateString('pl-PL')}
      </td>
    </tr>
  );
}
