import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FooterControl = function FooterControlComponent() {
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
      <Button variant="outlined" sx={{ flex: 1 }}>
        Edit
      </Button>
      <Button variant="contained" color="primary" sx={{ flex: 1 }}>
        Add to note
      </Button>
    </Paper>
  );
};

export default FooterControl;
