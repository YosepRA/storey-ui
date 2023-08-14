import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';

import ProductCard from 'components/ProductCard.tsx';

const ContentPreviewProducts = function ContentPreviewProductsComponent() {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>

      <Box sx={{ textAlign: 'right' }}>
        <Link href="/products">See more products</Link>
      </Box>
    </Box>
  );
};

export default ContentPreviewProducts;
