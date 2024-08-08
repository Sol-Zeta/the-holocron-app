import React, { FC, ReactNode } from 'react';
import { Box, Divider, Typography } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Box data-testid="Layout">
    <Box
      sx={{ textAlign: 'center', margin: '20px 0' }}
      component="header"
      data-testid="Header"
    >
      <Typography variant="h4" component="h1" gutterBottom color="text.accent">
        The Holocron
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Unlock the Galaxy&apos;s Secrets
      </Typography>
    </Box>
    <Divider />
    <Box
      maxHeight="calc(100vh - 120px)"
      overflow="scroll"
      paddingY={{ xs: 6, md: 8 }}
    >
      {children}
    </Box>
  </Box>
);

export default Layout;
