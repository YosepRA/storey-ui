'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import ContentPreviewProducts from './ContentPreviewProducts.tsx';
import ContentPreviewNotes from './ContentPreviewNotes.tsx';

const ContentPreview = function ContentPreviewComponent() {
  const [active, setActive] = useState('products');

  const isProductsActive = active === 'products';
  const isNotesActive = active === 'notes';

  return (
    <Box component="section">
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant={isProductsActive ? 'contained' : 'text'}
            sx={{ width: 1 }}
            onClick={() => setActive('products')}
          >
            Products
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant={isNotesActive ? 'contained' : 'text'}
            sx={{ width: 1 }}
            onClick={() => setActive('notes')}
          >
            Notes
          </Button>
        </Grid>
      </Grid>

      {isProductsActive && <ContentPreviewProducts />}
      {isNotesActive && <ContentPreviewNotes />}
    </Box>
  );
};

export default ContentPreview;
