import React from 'react';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { ProductCardProps } from 'types/products.d.ts';

import CardTag from './styled/CardTag.tsx';
import LinkWrapper from './styled/LinkWrapper.tsx';

const ProductCard = function ProductCardComponent() {
  return (
    <LinkWrapper href="/products/1">
      <Paper
        component="article"
        sx={{ height: 70, pr: '10px', '&:not(:last-child)': { mb: 1 } }}
      >
        <Grid
          container
          columnSpacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item xs={2} sx={{ height: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 1,
                height: 1,
                borderRadius: 1,
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              <Typography variant="body1">Image</Typography>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                py: '10px',
              }}
            >
              <Typography>Tomato</Typography>

              <Typography>Rp 26,000/kilogram</Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography>27/08/2023</Typography>

              <CardTag>
                <Typography>Fruit</Typography>
              </CardTag>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </LinkWrapper>
  );
};

export default ProductCard;
