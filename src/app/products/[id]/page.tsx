import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PushPinIcon from '@mui/icons-material/PushPin';

import type { ProductDetailsProps } from 'types/products.d.ts';

import CardTag from 'components/styled/CardTag.tsx';
import HeadControl from './components/HeadControl.tsx';
import FooterControl from './components/FooterControl.tsx';

const ProductDetails = function ProductDetailsComponent({
  params: { id },
}: ProductDetailsProps) {
  return (
    <>
      <HeadControl />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          height: 300,
          mb: 2,
          bgcolor: 'grey.500',
        }}
      >
        <Typography variant="h5">Image {id}</Typography>
      </Box>

      <Container>
        <Box component="section" className="product__metadata" sx={{ mb: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h5" component="h1">
                Tomato
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <IconButton
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  ml: 'auto',
                  p: 0,
                }}
              >
                <PushPinIcon />
              </IconButton>
            </Grid>

            <Grid item xs={12} sx={{ mt: 1 }}>
              <CardTag>Fruit</CardTag>
            </Grid>
          </Grid>
        </Box>

        <Box
          component="section"
          className="product__price"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ fontSize: 18 }}>
              Rp19,500
            </Typography>
            <Typography variant="body2">
              Last updated: <b>23 June 2023</b>
            </Typography>
          </Box>

          <Button variant="outlined" color="primary">
            Update price
          </Button>
        </Box>

        <Box component="section" className="product__description">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            repellat, non reiciendis aperiam enim fuga consequuntur architecto,
            rerum atque ab neque delectus ratione impedit iusto repellendus
            eaque deleniti voluptatem eum.
          </Typography>
        </Box>
      </Container>

      <FooterControl />
    </>
  );
};

export default ProductDetails;
