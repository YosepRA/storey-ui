import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import type { FeatureCardProps } from 'types/home.d.ts';

import { capitalizeFirstLetter } from 'utils/helpers.ts';

const FeatureCard = function FeatureCardComponent({
  type,
  color,
}: FeatureCardProps) {
  return (
    <Paper
      elevation={2}
      sx={{ p: 1, borderRadius: '24px', '&:not(:last-child)': { mb: 1 } }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '48px',
              height: '48px',
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              borderRadius: '50%',
            }}
          >
            <Typography variant="body1">Icon</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">100</Typography>
          <Typography variant="body1">{capitalizeFirstLetter(type)}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Link href={`/${type}/new`}>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FeatureCard;
