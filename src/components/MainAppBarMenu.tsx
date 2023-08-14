import React from 'react';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import type { MainAppBarMenuProps } from 'types/main-app-bar.d.ts';

import MenuItem from './styled/MenuItem.tsx';

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
          <MenuItem href="/products/1">Products details</MenuItem>
          <MenuItem href="/products/new">Products new</MenuItem>
          <MenuItem href="/products/edit/1">Products edit</MenuItem>
          <MenuItem href="/notes">Notes</MenuItem>
          <MenuItem href="/notes/1">Notes details</MenuItem>
          <MenuItem href="/notes/new">Notes new</MenuItem>
          <MenuItem href="/notes/edit/1">Notes edit</MenuItem>
          <MenuItem href="/user/login">Login</MenuItem>
          <MenuItem href="/user/register">Register</MenuItem>
        </Box>
      </Container>
    </Drawer>
  );
};

export default MainAppBarMenu;
