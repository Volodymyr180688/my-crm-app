'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

async function getParams(paramsPromise: Promise<{ id: string }>) {
  return await paramsPromise;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();

  const [companyId, setCompanyId] = React.useState<string | null>(null);

  React.useEffect(() => {
    getParams(params).then(({ id }) => setCompanyId(id));
  }, [params]);

  if (!companyId) {
    return <div>Loading...</div>;
  }

  return (
    <PromotionFormModal
      companyId={companyId}
      show={true}
      onClose={() => router.back()}
    />
  );
}
