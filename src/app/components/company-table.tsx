import React from 'react';

export interface CompanyTableProps {
  children?: React.ReactNode;
}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined data',
];
export default function CompanyTable({ children }: CompanyTableProps) {
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
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
