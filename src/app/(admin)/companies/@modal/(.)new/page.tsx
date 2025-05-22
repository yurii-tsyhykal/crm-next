'use client';

import CompanyForm from '@/app/components/company-form';
import Modal from '@/app/components/modal';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log()} />
    </Modal>
  );
}
