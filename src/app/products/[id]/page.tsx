import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import type { ProductDetailsProps } from 'types/products.d.ts';

import HeadControl from './components/HeadControl.tsx';

const ProductDetails = function ProductDetailsComponent({
  params: { id },
}: ProductDetailsProps) {
  return (
    <>
      <HeadControl />

      <Box>
        <Typography variant="h5">Image {id}</Typography>
      </Box>
    </>
  );
};

export default ProductDetails;
