'use client';

import React from 'react';
import Link from "next/link";

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
            <Link href="/" className="text-blue-500">
                Back to Home Page
            </Link>
        </div>
      </body>
    </html>
  );
}
