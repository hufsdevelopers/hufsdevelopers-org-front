import React from 'react';
import { Box } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <React.Fragment>
      <Navigation />
      <Box as="main" pt={14}>
        {children}
      </Box>
    </React.Fragment>
  );
}

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}
