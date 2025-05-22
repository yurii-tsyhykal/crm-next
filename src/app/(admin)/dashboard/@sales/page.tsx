import DashboardCard from '@/app/components/dashboard-card';
import SummaryHeaderTable from '@/app/components/summary-header-table';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import { getSummarySales } from '@/lib/api';
import React from 'react';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();
  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryHeaderTable>Company</SummaryHeaderTable>
            <SummaryHeaderTable align="center">Sold</SummaryHeaderTable>
            <SummaryHeaderTable align="center">Income</SummaryHeaderTable>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
