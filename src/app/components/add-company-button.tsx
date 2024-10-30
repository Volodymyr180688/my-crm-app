'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Button from './button';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
