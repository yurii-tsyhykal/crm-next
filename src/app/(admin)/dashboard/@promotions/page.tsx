import DashboardCard from '@/app/components/dashboard-card';
import SummaryHeaderTable from '@/app/components/summary-header-table';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import { getSummaryPromotions } from '@/lib/api';
import React from 'react';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryPromotions();
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
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
