'use client';

import React from 'react';
import Box from '@mui/material/Box';

import FeatureCard from './FeatureCard.tsx';

const Features = function FeaturesComponent() {
  return (
    <Box sx={{ mb: 3 }}>
      <FeatureCard type="products" color="primary" />
      <FeatureCard type="notes" color="secondary" />
    </Box>
  );
};

export default Features;
