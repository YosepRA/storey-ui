'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductFormHeadControl = function ProductFormHeadControlComponent() {
  const router = useRouter();

  const handleDelete = () => {
    console.log('Product delete');
  };

  return (
    <Paper
      elevation={2}
      sx={{ mb: 2.5, p: '32px 0 16px', borderRadius: '0 0 32px 32px' }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              columnGap: 1,
            }}
          >
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default ProductFormHeadControl;
