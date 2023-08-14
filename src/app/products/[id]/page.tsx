import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import HeadControl from './HeadControl.tsx';

const ProductDetails = function ProductDetailsComponent() {
  return (
    <>
      <HeadControl />

      <Box>
        <Typography variant="h5">Image</Typography>
      </Box>
    </>
  );
};

export default ProductDetails;
