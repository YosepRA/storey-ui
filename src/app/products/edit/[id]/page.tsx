import React from 'react';
import Typography from '@mui/material/Typography';

import type { ProductEditProps } from 'types/products.d.ts';

const ProductEdit = function ProductEditComponent({
  params: { id },
}: ProductEditProps) {
  return (
    <Typography variant="h4" component="h1">
      ProductEdit {id}
    </Typography>
  );
};

export default ProductEdit;
