import React from 'react';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import type { MainAppBarMenuProps } from 'types/main-app-bar.d.ts';

const MenuItem = styled(Link)`
  display: block;
`;

const MainAppBarMenu = function MainAppBarMenuComponent({
  open,
  handleMenuClose,
}: MainAppBarMenuProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleMenuClose}
      sx={{
        '.MuiDrawer-paper': { width: '75%' },
        a: { textDecoration: 'none' },
      }}
    >
      <Container sx={{ height: 1, py: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" component="h2">
              Storey
            </Typography>
          </Link>
        </Box>

        <Box sx={{}}>
          <MenuItem href="/products">Products</MenuItem>
          <MenuItem href="/notes">Notes</MenuItem>
        </Box>
      </Container>
    </Drawer>
  );
};

export default MainAppBarMenu;
