'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FooterControlLink from './styled/FooterControlLink.tsx';

const FooterControl = function FooterControlComponent() {
  const { id } = useParams();

  const handleAddToNote = () => {
    console.log('Product add to note');
  };

  return (
    <Paper
      elevation={4}
      sx={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 2,
        width: 1,
        p: '20px',
        pb: '32px',
      }}
    >
      <FooterControlLink href={`/products/edit/${id}`}>
        <Button variant="outlined" sx={{ width: 1 }}>
          Edit
        </Button>
      </FooterControlLink>

      <Button
        variant="contained"
        color="primary"
        sx={{ flex: '1 0 50%' }}
        onClick={handleAddToNote}
      >
        Add to note
      </Button>
    </Paper>
  );
};

export default FooterControl;
