import React from 'react';

export interface DashboardCardProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardCard({ label, children }: DashboardCardProps) {
  return (
    <div className="border border-solid border-gray-100 bg-gray-100 w-full h-full rounded">
      <p className="font-medium text-xl text-gray-900 p-5">{label}</p>
      <div>{children}</div>
    </div>
  );
}
