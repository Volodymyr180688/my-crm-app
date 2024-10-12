'use client';
import React from 'react';
import {Field, FieldProps} from "formik";

export interface InputFieldProps {
    label?: string;
    id: string;
    placeholder?: string;
    name: string;
    type?: string;
}

export default function InputField({label, id, type="text", ...rest} : InputFieldProps) {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id} className="mb-2 text-base color-gray-900">
                {label}
            </label>
            )}
            <Field {...rest}
                   id={id}
                   type={type}
                   className="p-3 h-11 text-sm rounded border border-gray-300 shadow" />
        </div>
    );
}