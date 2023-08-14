'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const HeadControl = function HeadControlComponent() {
  const router = useRouter();

  return (
    <Box justifyContent="space-between" alignItems="center">
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1.5,
          }}
        >
          <IconButton onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default HeadControl;
