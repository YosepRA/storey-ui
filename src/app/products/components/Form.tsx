'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Field, FieldProps } from 'formik';

import type { ProductFormProps } from 'types/products.d.ts';

const categories = [
  {
    label: 'Fruit',
    value: 'fruit',
  },
  {
    label: 'Vegetables',
    value: 'vegetables',
  },
  {
    label: 'Meat',
    value: 'meat',
  },
];

const units = [
  {
    label: 'ml',
    value: 'ml',
  },
  {
    label: 'g',
    value: 'g',
  },
  {
    label: 'pcs',
    value: 'pcs',
  },
];

const ImageBox = styled(Paper)(({ theme }) => ({
  width: 50,
  height: 50,
  backgroundColor: theme.palette.grey[400],
}));

const ProductForm = function ProductFormComponent({
  formikProps,
}: ProductFormProps) {
  return (
    <Container>
      <Field name="categories">
        {({ field }: FieldProps) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="categories-label">Categories</InputLabel>

            <Select
              label="Categories"
              labelId="categories-label"
              id="categories"
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            >
              {categories.map(({ label, value }) => (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Field>

      <Field name="name">
        {({ field }: FieldProps) => (
          <FormControl fullWidth margin="normal">
            <TextField
              label="Product name"
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
          </FormControl>
        )}
      </Field>

      <Field name="unit">
        {({ field }: FieldProps) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="unit-label">Unit measurement</InputLabel>

            <Select
              label="Unit measurement"
              labelId="unit-label"
              id="unit"
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            >
              {units.map(({ label, value }) => (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Field>

      <FormControl fullWidth margin="normal">
        <FormLabel sx={{ mb: 1 }}>Images</FormLabel>

        <Stack direction="row" columnGap={2}>
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </Stack>
      </FormControl>

      <Field name="description">
        {({ field }: FieldProps) => (
          <FormControl fullWidth margin="normal">
            <TextField
              label="Description"
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              multiline
              rows={4}
            />
          </FormControl>
        )}
      </Field>
    </Container>
  );
};

export default ProductForm;
