'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';

import type { ProductFormValues } from 'types/products.d.ts';

import FormHeadControl from '../components/FormHeadControl.tsx';
import ProductForm from '../components/Form.tsx';

const initialValues: ProductFormValues = {
  categories: '',
  name: '',
  price: 0,
  unit: 'ml',
  images: [],
  description: '',
};

const ProductNew = function ProductNewComponent() {
  const handleFormSubmit = (values: ProductFormValues) => {
    console.log('Product submit', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {(formikProps) => (
        <Form autoComplete="off" noValidate>
          <FormHeadControl handleSubmit={formikProps.handleSubmit} />

          <ProductForm formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default ProductNew;
