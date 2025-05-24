import DashboardCard from '@/app/components/dashboard-card';
import SummaryHeaderTable from '@/app/components/summary-header-table';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import { getPromotions } from '@/lib/api';

import React from 'react';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();
  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryHeaderTable>Company</SummaryHeaderTable>
            <SummaryHeaderTable>Name</SummaryHeaderTable>
            <SummaryHeaderTable align="center">%</SummaryHeaderTable>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
