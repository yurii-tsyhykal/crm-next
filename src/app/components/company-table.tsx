'use client';

import { getCompanies } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CompanyRow from './company-row';

export interface CompanyTableProps {}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined data',
];
export default function CompanyTable({}: CompanyTableProps) {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies,
    staleTime: 10 * 1000,
  });
  return (
    <div className="px-10 bg-gray-100 pt-8 pb-14">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="font-light text-sm text-gray-900 pb-5">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((company) => {
            <CompanyRow key={company.id} company={company} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
