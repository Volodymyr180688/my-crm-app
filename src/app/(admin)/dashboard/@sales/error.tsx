'use client';

import React from 'react';

export interface ErrorComponentProps {
    error: Error;
    reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
    return (
        <div>Unexpected error inside slot sales</div>
    );
}