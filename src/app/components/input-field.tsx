'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className=" mb-2 text-base font-normal text-gray-900 "
        >
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="min-w-custom p-3 max-h-11 text-sm border border-solid border-gray-300 focus:border-gray-300 rounded shadow-custom outline-gray-300"
      />
    </div>
  );
}
