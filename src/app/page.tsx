import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MainAppBar from 'components/MainAppBar.tsx';
import Features from './home/Features.tsx';
import ContentPreview from './home/ContentPreview.tsx';

const Home = function HomeComponent() {
  return (
    <>
      <MainAppBar />

      <Container>
        <Box sx={{ my: 3 }}>
          <Typography variant="h4">Hi Username</Typography>
          <Typography>What item do you want today?</Typography>
        </Box>

        <Features />

        <ContentPreview />
      </Container>
    </>
  );
};

export default Home;
