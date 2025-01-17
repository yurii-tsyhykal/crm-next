'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import LogoUploader from './logo-uploader';
import InputField from './input-field';
import Button from './button';

export type CompanyFieldsValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldsValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldsValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="font-semibold text-xl text-gray-900 mb-0.5">
          Add new company
        </p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5 ">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" placeholder="Title" name="status" />
            <InputField
              label="Country"
              placeholder="Description"
              name="country"
            />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" placeholder="Title" name="name" />
            <InputField label="Category" placeholder="Title" name="category" />
            <InputField type="date" label="Joined data" name="date" />
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
