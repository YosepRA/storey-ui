import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Storey',
  description: 'Plan your next shopping trip',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />

        <Box
          component="div"
          className="mobile-box"
          sx={{ width: 1, maxWidth: 576, marginX: 'auto' }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
