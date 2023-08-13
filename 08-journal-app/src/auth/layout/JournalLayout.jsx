import { Box } from '@mui/material';
import React from 'react';
import { NavBar } from './components/NavBar';

/** */

const drawerWith = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <NavBar drawerWith={drawerWith} />
      {/* Sidebar */}

      {/* En ves de un div que sea la etiqueta  main */}
      <Box component='main' sx={{ flexGrowl: 1, p: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
