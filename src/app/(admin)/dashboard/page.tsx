import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
      <main>
        <h1 className="text-xl text-center text-gray-950">Dashboard</h1>
      </main>
    </>
  );
}
